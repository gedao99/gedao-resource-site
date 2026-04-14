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
    title: "2026AI私教实战课：从AI原理到全场景实操，零基础学会用AI提效+单人单干创业",
    type: "ai",
    time: "2026-04-15",
    linkUrl: "https://pan.quark.cn/s/3dedc19b4aa6"
  },
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
  const [currentSort, setCurrentSort] = useState<'time' | 'name'>('time');
  const [currentKeyword, setCurrentKeyword] = useState('');

  const sortResources = (list: Resource[], sortType: 'time' | 'name') => {
    if (sortType === 'time') {
      return [...list].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    } else {
      return [...list].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
    }
  };

  // 按分类筛选资源
  const appResources = sortResources(initialResources.filter(item => item.type === 'app'), currentSort);
  const aiResources = sortResources(initialResources.filter(item => item.type === 'ai'), currentSort);
  const sideResources = sortResources(initialResources.filter(item => item.type === 'side'), currentSort);

  // 全局搜索过滤
  const filterByKeyword = (list: Resource[]) => {
    if (!currentKeyword) return list;
    return list.filter(item => item.title.toLowerCase().includes(currentKeyword.toLowerCase()));
  };

  const filteredApp = filterByKeyword(appResources);
  const filteredAi = filterByKeyword(aiResources);
  const filteredSide = filterByKeyword(sideResources);

  // 渲染单个资源卡片
  const renderResourceCard = (item: Resource) => {
    const tagStyle = {
      'app': { bg: '#ff6b6b', text: '破解版APP' },
      'ai': { bg: '#4ecdc4', text: 'AI教程' },
      'side': { bg: '#45b7d1', text: '副业资源' }
    }[item.type];
    return (
      <div key={item.title} className="resource-item">
        <div className="resource-title">{item.title}</div>
        <div className="resource-meta">
          <span className="tag" style={{ backgroundColor: tagStyle.bg }}>{tagStyle.text}</span>
          <span className="update-time">更新时间：{item.time}</span>
        </div>
        <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="link-btn">
          🔗 获取资源
        </a>
      </div>
    );
  };

  return (
    <div className="container">
      {/* 顶部横幅 */}
      <div className="top-banner">
        <img src="https://你的横幅图片链接" alt="格道资源站横幅" className="banner-img" />
      </div>

      {/* 标题 */}
      <div className="site-header">
        <h1>🎯 格道资源站</h1>
        <p>分享破解版APP、AI教程、副业资源</p>
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

      {/* 三列固定布局核心 */}
      <div className="three-column-layout">
        {/* 第1列：破解版APP资源 */}
        <div className="column">
          <h2 className="column-title">📱 破解版APP资源</h2>
          <div className="column-content">
            {filteredApp.length === 0 ? (
              <div className="empty-tip">暂无资源</div>
            ) : (
              filteredApp.map(renderResourceCard)
            )}
          </div>
        </div>

        {/* 第2列：AI教程资源 */}
        <div className="column">
          <h2 className="column-title">🤖 AI教程资源</h2>
          <div className="column-content">
            {filteredAi.length === 0 ? (
              <div className="empty-tip">暂无资源</div>
            ) : (
              filteredAi.map(renderResourceCard)
            )}
          </div>
        </div>

        {/* 第3列：副业资源 */}
        <div className="column">
          <h2 className="column-title">💰 副业资源</h2>
          <div className="column-content">
            {filteredSide.length === 0 ? (
              <div className="empty-tip">暂无资源</div>
            ) : (
              filteredSide.map(renderResourceCard)
            )}
          </div>
        </div>
      </div>

      {/* 底部免责声明 */}
      <div className="footer-declare">
        本站所有资源均来自网络收集，仅供学习与交流使用，严禁商用。<br/>
        若内容涉及侵权，请联系站长邮箱：jinc56@cbb21.cc，我方将第一时间处理删除。
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Microsoft Yahei", Arial, sans-serif;
        }
        body {
          /* 核心修复：强制背景图生效，全屏覆盖、不拉伸、居中固定 */
          background-image: url('https://img2.baidu.com/it/u=1752509292,1468373501&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500') !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
          background-attachment: fixed !important;
          background-size: cover !important;
          min-height: 100vh;
          padding: 30px 20px;
        }
        .container {
          max-width: 1400px;
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
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        .site-header h1 {
          font-size: 42px;
          margin-bottom: 15px;
        }
        .site-header p {
          font-size: 22px;
          opacity: 0.95;
        }
        /* 搜索+排序 */
        .search-sort-bar {
          background: rgba(255,255,255,0.9);
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
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
        /* 三列布局核心样式 */
        .three-column-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 20px;
        }
        .column {
          background: rgba(255,255,255,0.85);
          border-radius: 16px;
          padding: 20px;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .column-title {
          color: #333;
          font-size: 20px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        .column-content {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        /* 资源卡片样式 */
        .resource-item {
          background: white;
          padding: 20px;
          border-radius: 14px;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .resource-item:hover {
          transform: translateY(-3px);
        }
        .resource-title {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          line-height: 1.4;
        }
        .resource-meta {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .tag {
          font-size: 13px;
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
        }
        .update-time {
          font-size: 13px;
          color: #888;
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
          margin-top: 5px;
          transition: background 0.3s;
        }
        .link-btn:hover {
          background: #5568d3;
        }
        .empty-tip {
          color: #666;
          font-size: 16px;
          padding: 30px 0;
          opacity: 0.8;
        }
        /* 底部免责声明 */
        .footer-declare {
          margin-top: 60px;
          padding: 30px 0;
          text-align: center;
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          line-height: 1.8;
          border-top: 1px solid rgba(255,255,255,0.3);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        /* 响应式适配：手机端自动变单列 */
        @media (max-width: 1024px) {
          .three-column-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
