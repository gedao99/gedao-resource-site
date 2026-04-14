'use client';
import { useState } from 'react';

type Resource = {
  title: string;
  type: 'app' | 'ai' | 'side';
  time: string;
  linkUrl: string;
};

const initialResources: Resource[] = [
  {
    title: "抖音破解版无水印",
    type: "app",
    time: "2026-04-14",
    linkUrl: "https://你的网盘/链接"
  },
  {
    title: "ChatGPT 4o 使用教程",
    type: "ai",
    time: "2026-04-13",
    linkUrl: "https://你的教程/链接"
  },
  {
    title: "小红书副业变现课",
    type: "side",
    time: "2026-04-12",
    linkUrl: "https://你的课程/链接"
  },
   {
    标题: "2026AI私教实战课：从AI原理到全场景实操，零基础学会用AI提效+单人单干创业",
    类型: "人工智能",
    时间: "2026-04-15",
    链接网址: "https://pan.quark.cn/s/3dedc19b4aa6"
  },
  {
    title: "PS 2025 永久激活版",
    type: "app",
    time: "2026-04-11",
    linkUrl: "https://你的网盘/链接"
  },
  {
    title: "AI绘画 Midjourney 教程",
    type: "ai",
    time: "2026-04-10",
    linkUrl: "https://你的教程/链接"
  },
  {
    title: "闲鱼无货源赚钱课",
    type: "side",
    time: "2026-04-09",
    linkUrl: "https://你的课程/链接"
  },
];

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState<'all' | 'app' | 'ai' | 'side'>('all');
  const [currentSort, setCurrentSort] = useState<'time' | 'name'>('time');
  const [currentKeyword, setCurrentKeyword] = useState('');

  const sortResources = (list: Resource[], sortType: 'time' | 'name') => {
    if (sortType === 'time') {
      return [...list].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    } else {
      return [...list].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
    }
  };

  const getList = () => {
    let list = [...initialResources];
    if (currentCategory !== "all") list = list.filter(item => item.type === currentCategory);
    if (currentKeyword) list = list.filter(item => item.title.toLowerCase().includes(currentKeyword.toLowerCase()));
    return sortResources(list, currentSort);
  };

  const list = getList();

  return (
    <div className="container">
      {/* 顶部横幅（不需要就删掉这段） */}
      <div className="top-banner">
        <img src="https://你的横幅图片链接" alt="格道资源站横幅" className="banner-img" />
      </div>

      {/* 标题 */}
      <div className="site-header">
        <h1>🎯 格道资源站</h1>
        <p>分享破解版APP、AI教程、副业资源</p>
      </div>

      {/* 分类导航 */}
      <div className="category-nav">
        <button className={`category-btn ${currentCategory === 'all' ? 'active' : ''}`} onClick={() => setCurrentCategory('all')}>📋 全部资源</button>
        <button className={`category-btn ${currentCategory === 'app' ? 'active' : ''}`} onClick={() => setCurrentCategory('app')}>📱 破解版APP资源</button>
        <button className={`category-btn ${currentCategory === 'ai' ? 'active' : ''}`} onClick={() => setCurrentCategory('ai')}>🤖 AI学习教程</button>
        <button className={`category-btn ${currentCategory === 'side' ? 'active' : ''}`} onClick={() => setCurrentCategory('side')}>💰 副业资源</button>
      </div>

      {/* 搜索+排序 */}
      <div className="search-sort-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 输入资源名称搜索..."
          value={currentKeyword}
          onChange={(e) => setCurrentKeyword(e.target.value)}
        />
        <div className="sort-group">
          <button className={`sort-btn ${currentSort === 'time' ? 'active' : ''}`} onClick={() => setCurrentSort('time')}>⏰ 按时间排序（最新置顶）</button>
          <button className={`sort-btn ${currentSort === 'name' ? 'active' : ''}`} onClick={() => setCurrentSort('name')}>🔤 按名称排序</button>
        </div>
      </div>

      {/* 资源列表 */}
      <div className="resource-list">
        {list.length === 0 ? (
          <div className="empty-tip">📭 暂无资源</div>
        ) : (
          list.map((item, idx) => {
            const tagStyle = {
              app: { bg: '#ff6b6b', text: '破解版APP' },
              ai: { bg: '#4ecdc4', text: 'AI教程' },
              side: { bg: '#45b7d1', text: '副业资源' }
            }[item.type];
            return (
              <div key={idx} className="resource-item">
                <h3>{item.title}</h3>
                <span className="tag" style={{ backgroundColor: tagStyle.bg }}>{tagStyle.text}</span>
                <div className="time">更新时间：{item.time}</div>
                <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="link-btn">🔗 点击跳转</a>
              </div>
            );
          })
        )}
      </div>

      {/* ✅ 底部免责声明（带你的邮箱） */}
      <div className="footer-declare">
        本站所有资源均来自网络收集，仅供学习与交流使用，严禁商用。<br/>
        若内容涉及侵权，请联系站长邮箱：jinc56@cbb21.cc，我方将第一时间处理删除。
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
        /* 顶部横幅 */
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
        /* 标题 */
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
        }
        /* 搜索+排序 */
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
        .tag {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 13px;
          color: white;
          margin-right: 8px;
        }
        .time {
          font-size: 13px;
          color: #888;
          margin: 12px 0;
        }
        .link-btn {
          display: block;
          width: 100%;
          padding: 10px;
          background: #667eea;
          color: white;
          text-align: center;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 10px;
          transition: background 0.3s;
        }
        .link-btn:hover {
          background: #5568d3;
        }
        .empty-tip {
          color: white;
          font-size: 28px;
          margin-top: 60px;
        }
        /* 底部免责声明 */
        .footer-declare {
          margin-top: 60px;
          padding: 30px 0;
          text-align: center;
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          line-height: 1.8;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
      `}</style>
    </div>
  );
}
