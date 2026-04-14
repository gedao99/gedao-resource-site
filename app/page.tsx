'use client';
import { useState } from 'react';

type 资源 = {
  标题: string;
  类型: '应用程序' | '人工智能' | '边';
  时间: string;
  链接网址: string;
};

const 初始资源: 资源[] = [
  {
    标题: "2026AI私教实战课：从AI原理到全场景实操，零基础学会用AI提效+单人单干创业",
    类型: "人工智能",
    时间: "2026-04-15",
    链接网址: "https://pan.quark.cn/s/3dedc19b4aa6"
  },
  {
    标题: "抖音破解版无水印",
    类型: "应用程序",
    时间: "2026-04-14",
    链接网址: "https://你的网盘/链接"
  },
  {
    标题: "ChatGPT 4o 使用教程",
    类型: "人工智能",
    时间: "2026-04-13",
    链接网址: "https://你的教程/链接"
  },
  {
    标题: "小红书副业变现课",
    类型: "边",
    时间: "2026-04-12",
    链接网址: "https://你的课程/链接"
  },
  {
    标题: "PS 2025 永久激活版",
    类型: "应用程序",
    时间: "2026-04-11",
    链接网址: "https://你的网盘/链接"
  },
  {
    标题: "AI绘画 Midjourney 教程",
    类型: "人工智能",
    时间: "2026-04-10",
    链接网址: "https://你的教程/链接"
  },
  {
    标题: "闲鱼无货源赚钱课",
    类型: "边",
    时间: "2026-04-09",
    链接网址: "https://你的课程/链接"
  },
];

export default function Home() {
  const [当前分类, set当前分类] = useState<'all' | '应用程序' | '人工智能' | '边'>('all');
  const [当前排序, set当前排序] = useState<'时间' | '名称'>('时间');
  const [当前关键词, set当前关键词] = useState('');

  const 排序资源 = (列表: 资源[], 排序方式: '时间' | '名称') => {
    if (排序方式 === '时间') {
      return [...列表].sort((a, b) => new Date(b.时间).getTime() - new Date(a.时间).getTime());
    } else {
      return [...列表].sort((a, b) => a.标题.localeCompare(b.标题, 'zh-CN'));
    }
  };

  const 获取列表 = () => {
    let 列表 = [...初始资源];
    if (当前分类 !== "all") 列表 = 列表.filter(item => item.类型 === 当前分类);
    if (当前关键词) 列表 = 列表.filter(item => item.标题.includes(当前关键词));
    return 排序资源(列表, 当前排序);
  };

  const 列表 = 获取列表();

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

      {/* 分类导航 */}
      <div className="category-nav">
        <button className={`category-btn ${当前分类 === 'all' ? 'active' : ''}`} onClick={() => set当前分类('all')}>📋 全部资源</button>
        <button className={`category-btn ${当前分类 === '应用程序' ? 'active' : ''}`} onClick={() => set当前分类('应用程序')}>📱 破解版APP资源</button>
        <button className={`category-btn ${当前分类 === '人工智能' ? 'active' : ''}`} onClick={() => set当前分类('人工智能')}>🤖 AI学习教程</button>
        <button className={`category-btn ${当前分类 === '边' ? 'active' : ''}`} onClick={() => set当前分类('边')}>💰 副业资源</button>
      </div>

      {/* 搜索+排序 */}
      <div className="search-sort-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 输入资源名称搜索..."
          value={当前关键词}
          onInput={(e) => set当前关键词(e.target.value)}
        />
        <div className="sort-group">
          <button className={`sort-btn ${当前排序 === '时间' ? 'active' : ''}`} onClick={() => set当前排序('时间')}>⏰ 按时间排序（最新置顶）</button>
          <button className={`sort-btn ${当前排序 === '名称' ? 'active' : ''}`} onClick={() => set当前排序('名称')}>🔤 按名称排序</button>
        </div>
      </div>

      {/* 资源列表（横排三行布局） */}
      <div className="resource-list">
        {列表.length === 0 ? (
          <div className="empty-tip">📭 暂无资源</div>
        ) : (
          列表.map((item, idx) => {
            const 标签样式 = {
              '应用程序': { bg: '#ff6b6b', text: '破解版APP' },
              '人工智能': { bg: '#4ecdc4', text: 'AI教程' },
              '边': { bg: '#45b7d1', text: '副业资源' }
            }[item.类型];
            return (
              <div key={idx} className="resource-item">
                {/* 第一行：资源名称 */}
                <div className="resource-title">{item.标题}</div>
                {/* 第二行：类别 + 更新时间 */}
                <div className="resource-meta">
                  <span className="tag" style={{ backgroundColor: 标签样式.bg }}>{标签样式.text}</span>
                  <span className="update-time">更新时间：{item.时间}</span>
                </div>
                {/* 第三行：获取资源链接按钮 */}
                <a href={item.链接网址} target="_blank" rel="noopener noreferrer" className="link-btn">
                  🔗 获取资源
                </a>
              </div>
            );
          })
        )}
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
        /* 搜索+排序 */}
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
        /* 资源列表（横排三行布局核心样式） */
        .resource-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
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
        /* 第一行：资源名称 */
        .resource-title {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          line-height: 1.4;
        }
        /* 第二行：类别 + 更新时间 */
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
        /* 第三行：获取资源按钮 */
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
