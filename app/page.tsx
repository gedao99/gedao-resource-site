'use client';
import { useState } from 'react';
import Link from 'next/link';

type Resource = {
  title: string;
  type: 'app' | 'ai' | 'side';
  time: string;
  linkUrl: string;
  desc: string;
};

const initialResources: Resource[] = [
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

  const appList = initialResources.filter(item => item.type === 'app');
  const aiList = initialResources.filter(item => item.type === 'ai');
  const sideList = initialResources.filter(item => item.type === 'side');

  const appResources = sortResources(appList, currentSort);
  const aiResources = sortResources(aiList, currentSort);
  const sideResources = sortResources(sideList, currentSort);

  const searchList = (list: Resource[]) => {
    if (!currentKeyword) return list;
    return list.filter(item => item.title.includes(currentKeyword));
  };

  const finalApp = searchList(appResources);
  const finalAi = searchList(aiResources);
  const finalSide = searchList(sideResources);

  const renderItem = (item: Resource) => (
    <Link href={`/detail?title=${encodeURIComponent(item.title)}`} key={item.title} className="card">
      <div className="card-title">{item.title}</div>
      <div className="card-info">
        <span className={`tag tag-${item.type}`}>
          {item.type === 'app' ? '🤖 破解APP' : item.type === 'ai' ? '🧠 AI教程' : '💻 副业资源'}
        </span>
        <span>{item.time}</span>
      </div>
      <div className="card-btn">🚀 查看详情</div>
    </Link>
  );

  return (
    <div className="all">
      <div className="container">
        <div className="title">
          <h1>🤖 格道AI资源站</h1>
          <p>AI工具 | 破解APP | 副业教程</p>
        </div>

        <div className="search">
          <input
            value={currentKeyword}
            onChange={e => setCurrentKeyword(e.target.value)}
            placeholder="🔍 搜索AI资源..."
          />
        </div>

        <div className="sort">
          <button onClick={() => setCurrentSort('time')} className={currentSort === 'time' ? 'on' : ''}>✨ 最新</button>
          <button onClick={() => setCurrentSort('name')} className={currentSort === 'name' ? 'on' : ''}>📋 名称</button>
        </div>

        <div className="columns">
          <div className="col">
            <Link href="/category?type=app" className="col-title">
              🤖 破解版APP（点我查看全部）
            </Link>
            <div className="list">{finalApp.map(renderItem)}</div>
          </div>

          <div className="col">
            <Link href="/category?type=ai" className="col-title">
              🧠 AI教程资源（点我查看全部）
            </Link>
            <div className="list">{finalAi.map(renderItem)}</div>
          </div>

          <div className="col">
            <Link href="/category?type=side" className="col-title">
              💻 副业资源（点我查看全部）
            </Link>
            <div className="list">{finalSide.map(renderItem)}</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:Microsoft Yahei}
        html,body{
          background:url("https://picsum.photos/id/1039/1920/1080") !important;
          background-image: url('https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/cd457466542c42bab2095994e3f29e02.jpeg~tplv-a9rns2rl98-image_dld_watermark_1_6b.png?lk3s=8e244e95&rcl=20260415045342E70F294401205B79CB5A&rrcfp=e875b5a5&x-expires=2091560024&x-signature=W1W6iw%2Balw6D%2F1rhf306nPtxvC0%3D') !important;
          background-size:cover !important;
          background-position:center !important;
          background-attachment:fixed !important;
          background-repeat:no-repeat !important;
          min-height:100vh;
        }
        .all{padding:30px 15px}
        .container{max-width:1200px;margin:0 auto}
        .title{text-align:center;color:#fff;margin-bottom:30px;text-shadow:0 0 15px rgba(100,150,255,0.8)}
        .title h1{font-size:36px;margin-bottom:8px}
        .title p{font-size:20px;opacity:0.9}
        .search{text-align:center;margin-bottom:15px}
        .search input{width:90%;max-width:500px;padding:14px 20px;border-radius:30px;border:none;outline:none;background:rgba(255,255,255,0.9);backdrop-filter:blur(8px)}
        .sort{display:flex;justify-content:center;gap:10px;margin-bottom:25px}
        .sort button{padding:10px 18px;border-radius:20px;border:none;background:rgba(255,255,255,0.8);backdrop-filter:blur(8px);cursor:pointer;font-weight:bold}
        .sort button.on{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;box-shadow:0 0 10px rgba(99,102,241,0.6)}
        .columns{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}
        .col{background:rgba(255,255,255,0.1);backdrop-filter:blur(12px);border-radius:16px;padding:20px;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 32px rgba(0,0,0,0.1)}
        .col-title{display:block;text-align:center;font-weight:bold;margin-bottom:15px;color:#fff;text-decoration:none;font-size:18px;text-shadow:0 0 10px rgba(100,150,255,0.8)}
        .card{background:rgba(255,255,255,0.9);border-radius:12px;padding:18px;margin-bottom:12px;display:block;text-decoration:none;color:#333;box-shadow:0 4px 15px rgba(0,0,0,0.1);border:1px solid rgba(255,255,255,0.3)}
        .card-title{font-weight:bold;margin-bottom:10px;font-size:16px}
        .card-info{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-size:13px;color:#666}
        .tag{padding:4px 10px;border-radius:12px;color:#fff;font-weight:bold;box-shadow:0 0 8px rgba(0,0,0,0.2)}
        .tag-app{background:linear-gradient(135deg,#ff6b6b,#f43f5e)}
        .tag-ai{background:linear-gradient(135deg,#4ecdc4,#06b6d4)}
        .tag-side{background:linear-gradient(135deg,#45b7d1,#3b82f6)}
        .card-btn{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-align:center;padding:8px;border-radius:8px;font-size:13px;font-weight:bold;box-shadow:0 0 10px rgba(99,102,241,0.5)}
        @media(max-width:900px){.columns{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}
