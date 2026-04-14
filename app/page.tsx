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
    title: "示例资源1", 
    type: "app", 
    time: "2026-04-14",
    linkUrl: "https://这里填你的链接"
  },
  { 
    title: "示例资源2", 
    type: "ai", 
    time: "2026-04-13",
    linkUrl: "https://这里填你的链接"
  },
  { 
    title: "示例资源3", 
    type: "side",
    time: "2026-04-12",
    linkUrl: "https://这里填你的链接"
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
    if (currentKeyword) list = list.filter(item => item.title.includes(currentKeyword));
    return sortResources(list, currentSort);
  };

  const list = getList();

  return (
    <div className="container">
      {/* 顶部横幅图片 */}
      <div className="top-banner">
        <img 
          src="https://你的顶部图片链接" 
          alt="网站横幅" 
          className="banner-img"
        />
      </div>

      {/* 头部标题 */}
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

      {/* 搜索 + 排序 */}
      <div className="search-sort-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 输入资源名称搜索..."
          value={currentKeyword}
          onInput={(e) => setCurrentKeyword(e.target.value)}
        />
        <div className="sort-group">
          <button className={`sort-btn ${currentSort === 'time' ? 'active' : ''}`} onClick={() => setCurrentSort('time')}>⏰ 按时间排序</button>
          <button className={`sort-btn ${currentSort === 'name' ? 'active' : ''}`} onClick={() => setCurrentSort('name')}>🔤 按名称排序</button>
        </div>
      </div>

      {/* 资源列表 */}
      <div className="resource-list">
        {list.length === 0 ? (
          <div className="empty-tip">暂无资源</div>
        ) : (
          list.map((item, idx) => {
            const tagObj = {
              app: { text: "破解APP", color: "#ff6b6b" },
              ai: { text: "AI教程", color: "#4ecdc4" },
              side: { text: "副业资源", color: "#45b7d1" }
            };
            return (
              <div key={idx} className="resource-item">
                <h3>{item.title}</h3>
                <span className="tag" style={{background: tagObj[item.type].color}}>{tagObj[item.type].text}</span>
                <div className="time">更新时间：{item.time}</div>
                <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="link-btn">
                  🔗 点击跳转
                </a>
              </div>
            )
          })
        )}
      </div>

      {/* 底部免责声明（已加入你的邮箱） */}
      <div className="footer-declare">
        本站所有资源均来自网络收集，仅供学习与交流使用，严禁商用。
        若内容涉及侵权，请联系站长邮箱：jinc56@cbb21.cc，我方将第一时间处理删除。
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Microsoft Yahei", sans-serif;
        }
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 30px 20px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .top-banner {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 25px;
        }
        .banner-img {
          width: 100%;
          height: auto;
          display: block;
        }
        .site-header {
          text-align: center;
          color: #fff;
          margin-bottom: 30px;
        }
        .site-header h1 {
          font-size: 38px;
          margin-bottom: 10px;
        }
        .site-header p {
          font-size: 18px;
          opacity: 0.9;
        }
        .category-nav {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 20px;
        }
        .category-btn {
          padding: 10px 22px;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          cursor: pointer;
        }
        .category-btn.active {
          background: #222;
          color: #fff;
        }
        .search-sort-bar {
          background: #fff;
          padding: 18px;
          border-radius: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }
        .search-input {
          flex: 1;
          min-width: 280px;
          padding: 11px 16px;
          border: 1px solid #eee;
          border-radius: 30px;
          font-size: 16px;
          outline: none;
        }
        .sort-group {
          display: flex;
          gap: 10px;
        }
        .sort-btn {
          padding: 9px 18px;
          border: none;
          border-radius: 20px;
          background: #f3f3f3;
          cursor: pointer;
        }
        .sort-btn.active {
          background: #667eea;
          color: #fff;
        }
        .resource-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 20px;
        }
        .resource-item {
          background: #fff;
          padding: 20px;
          border-radius: 14px;
        }
        .resource-item h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 8px;
        }
        .tag {
          font-size: 12px;
          color: #fff;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .time {
          font-size: 13px;
          color: #999;
          margin: 10px 0;
        }
        .link-btn {
          display: block;
          text-align: center;
          background: #667eea;
          color: #fff;
          text-decoration: none;
          padding: 9px;
          border-radius: 8px;
          font-weight: bold;
        }
        .empty-tip {
          text-align: center;
          color: #fff;
          font-size: 20px;
          padding: 60px 0;
        }
        .footer-declare {
          margin-top: 60px;
          padding: 25px 0;
          text-align: center;
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          line-height: 1.8;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
      </style>
    </div>
  )
}
