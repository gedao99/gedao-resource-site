'use client';
import { useState, useEffect } from 'react';

// 资源数据类型定义
type Resource = {
  title: string;
  type: 'app' | 'ai' | 'side';
  time: string;
  downloadUrl: string; // 新增下载链接
};

// 初始资源数据（你在这里加自己的资源！）
const initialResources: Resource[] = [
  { 
    title: "抖音破解版无水印", 
    type: "app", 
    time: "2026-04-14",
    downloadUrl: "https://你的下载链接1" // 替换成你的下载链接
  },
  { 
    title: "ChatGPT 4o 使用教程", 
    type: "ai", 
    time: "2026-04-13",
    downloadUrl: "https://你的下载链接2"
  },
  { 
    title: "小红书副业变现课", 
    type: "side", 
    time: "2026-04-12",
    downloadUrl: "https://你的下载链接3"
  },
  { 
    title: "PS 2025 永久激活版", 
    type: "app", 
    time: "2026-04-11",
    downloadUrl: "https://你的下载链接4"
  },
  { 
    title: "AI绘画 Midjourney 教程", 
    type: "ai", 
    time: "2026-04-10",
    downloadUrl: "https://你的下载链接5"
  },
  { 
    title: "闲鱼无货源赚钱课", 
    type: "side", 
    time: "2026-04-09",
    downloadUrl: "https://你的下载链接6"
  },
];

export default function Home() {
  // 状态管理
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [currentCategory, setCurrentCategory] = useState<'all' | 'app' | 'ai' | 'side'>('all');
  const [currentSort, setCurrentSort] = useState<'time' | 'name'>('time');
  const [currentKeyword, setCurrentKeyword] = useState('');

  // 排序函数
  const sortResources = (list: Resource[], sortType: 'time' | 'name') => {
    if (sortType === 'time') {
      return [...list].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    } else {
      return [...list].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
    }
  };

  // 筛选函数
  const filterResources = () => {
    let filtered = [...initialResources];
    
    // 分类筛选
    if (currentCategory !== 'all') {
      filtered = filtered.filter(item => item.type === currentCategory);
    }
    
    // 搜索筛选
    if (currentKeyword) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(currentKeyword.toLowerCase())
      );
    }
    
    // 排序
    return sortResources(filtered, currentSort);
  };

  // 渲染资源列表
  const renderResources = () => {
    const filteredList = filterResources();
    
    if (filteredList.length === 0) {
      return (
        <div className="empty-tip">
          <h2>📭 暂无资源</h2>
          <p>管理员正在整理资源，请稍后再来~</p>
        </div>
      );
    }

    return (
      <div className="resource-list">
        {filteredList.map((item, index) => {
          const tagClass = {
            app: 'tag-app',
            ai: 'tag-ai',
            side: 'tag-side'
          }[item.type];
          const tagText = {
            app: '破解版APP',
            ai: 'AI教程',
            side: '副业资源'
          }[item.type];

          return (
            <div key={index} className="resource-item">
              <h3>{item.title}</h3>
              <span className={`tag ${tagClass}`}>{tagText}</span>
              <div className="time">更新时间：{item.time}</div>
              {/* 新增下载按钮 */}
              <a 
                href={item.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-btn"
              >
                📥 立即下载
              </a>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      {/* 顶部横幅图片区域（可插入图片） */}
      <div className="top-banner">
        {/* 替换成你的图片链接 */}
        <img 
          src="https://你的横幅图片链接" 
          alt="格道资源站横幅" 
          className="banner-img"
        />
      </div>

      {/* 头部标题 */}
      <div className="site-header">
        <h1>🎯 格道资源站</h1>
        <p>分享破解版APP、AI教程、副业资源</p>
      </div>

      {/* 分类导航（保留你原来的4个） */}
      <div className="category-nav">
        <button 
          className={`category-btn ${currentCategory === 'all' ? 'active' : ''}`}
          onClick={() => setCurrentCategory('all')}
        >
          📋 全部资源
        </button>
        <button 
          className={`category-btn ${currentCategory === 'app' ? 'active' : ''}`}
          onClick={() => setCurrentCategory('app')}
        >
          📱 破解版APP资源
        </button>
        <button 
          className={`category-btn ${currentCategory === 'ai' ? 'active' : ''}`}
          onClick={() => setCurrentCategory('ai')}
        >
          🤖 AI学习教程
        </button>
        <button 
          className={`category-btn ${currentCategory === 'side' ? 'active' : ''}`}
          onClick={() => setCurrentCategory('side')}
        >
          💰 副业资源
        </button>
      </div>

      {/* 搜索+排序栏 */}
      <div className="search-sort-bar">
        <input 
          type="text" 
          className="search-input" 
          placeholder="🔍 输入资源名称搜索..."
          value={currentKeyword}
          onChange={(e) => setCurrentKeyword(e.target.value)}
        />
        <div className="sort-group">
          <button 
            className={`sort-btn ${currentSort === 'time' ? 'active' : ''}`}
            onClick={() => setCurrentSort('time')}
          >
            ⏰ 按时间排序（最新置顶）
          </button>
          <button 
            className={`sort-btn ${currentSort === 'name' ? 'active' : ''}`}
            onClick={() => setCurrentSort('name')}
          >
            🔤 按名称排序
          </button>
        </div>
      </div>

      {/* 资源列表 */}
      {renderResources()}

      {/* 右侧悬浮微信群卡片（图片形式） */}
      <div className="wechat-float-card">
        <a 
          href="https://你的微信群链接" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {/* 替换成你的微信群二维码图片链接 */}
          <img 
            src="https://你的微信群二维码图片链接" 
            alt="扫码加微信群" 
            className="wechat-qrcode"
          />
          <p>扫码加群获取更多资源</p>
        </a>
      </div>

      {/* 全局样式 */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Microsoft Yahei", Arial, sans-serif;
        }
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 30px 20px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        /* 顶部横幅样式 */
        .top-banner {
          width: 100%;
          margin-bottom: 30px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .banner-img {
          width: 100%;
          height: auto;
          display: block;
        }
        /* 头部标题 */
        .site-header {
          color: white;
          margin-bottom: 40px;
        }
        .site-header h1 {
          font-size: 42px;
          margin-bottom: 15px;
        }
        .site-header p {
          font-size: 22px;
          opacity: 0.95;
        }
        /* 分类导航 */
        .category-nav {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }
        .category-btn {
          padding: 14px 30px;
          border: none;
          border-radius: 30px;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .category-btn.active {
          background: #333;
          color: white;
        }
        .category-btn:not(.active) {
          background: white;
          color: #333;
          border: 3px solid transparent;
        }
        .category-btn[data-type="app"]:not(.active) {
          border-color: #ff6b6b;
        }
        .category-btn[data-type="ai"]:not(.active) {
          border-color: #4ecdc4;
        }
        .category-btn[data-type="side"]:not(.active) {
          border-color: #45b7d1;
        }
        /* 搜索+排序栏 */
        .search-sort-bar {
          background: rgba(255,255,255,0.95);
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          align-items: center;
          justify-content: center;
        }
        .search-input {
          flex: 1;
          min-width: 280px;
          max-width: 500px;
          padding: 12px 18px;
          border: 1px solid #ddd;
          border-radius: 30px;
          font-size: 16px;
          outline: none;
        }
        .sort-group {
          display: flex;
          gap: 10px;
        }
        .sort-btn {
          padding: 10px 20px;
          border: none;
          border-radius: 20px;
          background: #f0f0f0;
          cursor: pointer;
          font-size: 15px;
        }
        .sort-btn.active {
          background: #667eea;
          color: white;
        }
        /* 资源列表 */
        .resource-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .resource-item {
          background: white;
          padding: 22px;
          border-radius: 14px;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        .resource-item:hover {
          transform: translateY(-3px);
        }
        .resource-item h3 {
          color: #333;
          font-size: 20px;
          margin-bottom: 10px;
        }
        .resource-item .tag {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 13px;
          color: white;
          margin-right: 8px;
        }
        .tag-app { background: #ff6b6b; }
        .tag-ai { background: #4ecdc4; }
        .tag-side { background: #45b7d1; }
        .resource-item .time {
          font-size: 13px;
          color: #888;
          margin: 12px 0;
        }
        /* 下载按钮样式 */
        .download-btn {
          display: block;
          width: 100%;
          padding: 10px;
          background: #07c160;
          color: white;
          text-align: center;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 10px;
          transition: background 0.3s;
        }
        .download-btn:hover {
          background: #06ae56;
        }
        .empty-tip {
          color: white;
          font-size: 28px;
          margin-top: 60px;
        }
        .empty-tip p {
          font-size: 18px;
          margin-top: 10px;
          opacity: 0.9;
        }
        /* 右侧悬浮微信群卡片样式 */
        .wechat-float-card {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          background: white;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          width: 180px;
        }
        .wechat-qrcode {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        .wechat-float-card p {
          font-size: 14px;
          color: #333;
          text-align: center;
          font-weight: bold;
        }
        .wechat-float-card a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
