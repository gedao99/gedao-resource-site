'use client';
import { useState } from 'react';

export default function Home() {
  const [currentSort, setCurrentSort] = useState('time');
  const [currentKeyword, setCurrentKeyword] = useState('');

  // 你的资源数据（纯对象，无类型，绝对不报错）
  const initialResources = [
    {
      title: "2026AI私教实战课：从AI原理到全场景实操",
      type: "ai",
      time: "2026-04-15",
      linkUrl: "https://pan.quark.cn/s/3dedc19b4aa6",
      desc: "零基础学会AI提效、单人创业、全流程教程。"
    },
    {
      title: "抖音破解版无水印",
      type: "app",
      time: "2026-04-14",
      linkUrl: "https://你的链接",
      desc: "无水印下载、去广告、高清解析。"
    },
    {
      title: "ChatGPT 4o 使用教程",
      type: "ai",
      time: "2026-04-13",
      linkUrl: "https://你的链接",
      desc: "最新4o模型使用技巧、提示词模板。"
    },
    {
      title: "小红书副业变现课",
      type: "side",
      time: "2026-04-12",
      linkUrl: "https://你的链接",
      desc: "0粉起号、选品、文案、变现全流程。"
    },
    {
      title: "PS 2025 永久激活版",
      type: "app",
      time: "2026-04-11",
      linkUrl: "https://你的链接",
      desc: "完整插件、无广告、永久使用。"
    },
    {
      title: "闲鱼无货源赚钱课",
      type: "side",
      time: "2026-04-09",
      linkUrl: "https://你的链接",
      desc: "不用囤货，一部手机就能做。"
    },
  ];

  // 排序函数（纯JS，无类型）
  const sortResources = (list, sortType) => {
    if (sortType === 'time') {
      return [...list].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    } else {
      return [...list].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
    }
  };

  // 分类筛选
  const appList = initialResources.filter(item => item.type === 'app');
  const aiList = initialResources.filter(item => item.type === 'ai');
  const sideList = initialResources.filter(item => item.type === 'side');

  // 排序后的数据
  const appResources = sortResources(appList, currentSort);
  const aiResources = sortResources(aiList, currentSort);
  const sideResources = sortResources(sideList, currentSort);

  // 搜索过滤
  const searchList = (list) => {
    if (!currentKeyword) return list;
    return list.filter(item => item.title.includes(currentKeyword));
  };

  const finalApp = searchList(appResources);
  const finalAi = searchList(aiResources);
  const finalSide = searchList(sideResources);

  // 渲染资源卡片（用a标签代替Link，绝对不报错）
  const renderItem = (item) => (
    <a href={`/detail?title=${encodeURIComponent(item.title)}`} key={item.title} className="card">
      <div className="card-title">{item.title}</div>
      <div className="card-info">
        <span className={`tag tag-${item.type}`}>
          {item.type === 'app' ? '软件工具' : item.type === 'ai' ? 'AI教程' : '副业项目'}
        </span>
        <span>{item.time}</span>
      </div>
      <div className="card-btn">查看详情</div>
    </a>
  );

  return (
    <div className="all">
      <div className="container">
        <div className="title">
          <h1>格道资源站</h1>
          <p>精品软件 | AI教程 | 副业项目</p>
        </div>

        <div className="search">
          <input
            value={currentKeyword}
            onChange={e => setCurrentKeyword(e.target.value)}
            placeholder="🔍 搜索资源..."
          />
        </div>

        <div className="sort">
          <button onClick={() => setCurrentSort('time')} className={currentSort === 'time' ? 'on' : ''}>最新</button>
          <button onClick={() => setCurrentSort('name')} className={currentSort === 'name' ? 'on' : ''}>名称</button>
        </div>

        <div className="columns">
          <div className="col">
            <h2 className="col-title">📱 破解软件</h2>
            <div className="list">{finalApp.map(renderItem)}</div>
          </div>

          <div className="col">
            <h2 className="col-title">🤖 AI教程</h2>
            <div className="list">{finalAi.map(renderItem)}</div>
          </div>

          <div className="col">
            <h2 className="col-title">💰 副业项目</h2>
            <div className="list">{finalSide.map(renderItem)}</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:Microsoft Yahei}
        html,body{
          background:url('https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/cd457466542c42bab2095994e3f29e02.jpeg~tplv-a9rns2rl98-image_dld_watermark_1_6b.png?lk3s=8e244e95&rcl=20260415045342E70F294401205B79CB5A&rrcfp=e875b5a5&x-expires=2091560024&x-signature=W1W6iw%2Balw6D%2F1rhf306nPtxvC0%3D') !important;
          background-size:cover !important;
          background-position:center !important;
          background-attachment:fixed !important;
          background-repeat:no-repeat !important;
          min-height:100vh;
        }
        .all{padding:30px 15px}
        .container{max-width:1200px;margin:0 auto}
        
        /* 标题渐变 AI风格 */
        .title{text-align:center;margin-bottom:30px}
        .title h1{
          font-size:38px;
          font-weight:bold;
          background:linear-gradient(90deg,#4f46e5,#7c3aed,#8b5cf6);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          margin-bottom:8px;
        }
        .title p{font-size:18px;color:#fff;text-shadow:0 2px 5px rgba(0,0,0,0.5)}
        
        .search{text-align:center;margin-bottom:25px}
        .search input{
          width:90%;max-width:500px;padding:14px 20px;
          border-radius:30px;border:none;outline:none;
          background:rgba(255,255,255,0.95);
        }

        .sort{display:flex;justify-content:center;gap:10px;margin-bottom:25px}
        .sort button{padding:10px 18px;border-radius:20px;border:none;background:rgba(255,255,255,0.9);cursor:pointer}
        .sort button.on{background:#4f46e5;color:#fff}

        /* 三栏 —— 纯白色 */
        .columns{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}
        .col{
          background:#ffffff !important;
          border-radius:16px;padding:22px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
        }
        .col-title{
          text-align:center;font-size:18px;font-weight:bold;
          margin-bottom:18px;color:#222;
        }

        .card{
          background:#f9fafb;
          border-radius:12px;padding:16px;
          margin-bottom:10px;display:block;text-decoration:none;color:#222;
        }
        .card-title{font-weight:bold;margin-bottom:8px}
        .card-info{display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:10px}
        
        .tag{padding:3px 8px;border-radius:8px;color:#fff;font-size:12px}
        .tag-app{background:#3b82f6}
        .tag-ai{background:#8b5cf6}
        .tag-side{background:#10b981}
        
        .card-btn{
          background:#4f46e5;color:#fff;
          text-align:center;padding:6px;border-radius:8px;font-size:12px
        }

        @media(max-width:900px){.columns{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}
