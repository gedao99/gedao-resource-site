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
          {item.type === 'app' ? '破解APP' : item.type === 'ai' ? 'AI教程' : '副业资源'}
        </span>
        <span>{item.time}</span>
      </div>
      <div className="card-btn">查看详情</div>
    </Link>
  );

  return (
    <div className="all">
      <div className="container">
        <div className="title">
          <h1>🎯 格道资源站</h1>
          <p>分享破解APP、AI教程、副业资源</p>
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
            <Link href="/category?type=app" className="col-title">
              📱 破解版APP（点我查看全部）
            </Link>
            <div className="list">{finalApp.map(renderItem)}</div>
          </div>

          <div className="col">
            <Link href="/category?type=ai" className="col-title">
              🤖 AI教程（点我查看全部）
            </Link>
            <div className="list">{finalAi.map(renderItem)}</div>
          </div>

          <div className="col">
            <Link href="/category?type=side" className="col-title">
              💰 副业资源（点我查看全部）
            </Link>
            <div className="list">{finalSide.map(renderItem)}</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:Microsoft Yahei}
        html,body{
          background:url("https://img2.baidu.com/it/u=1752509292,1468373501&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500") !important;
          background-size:cover !important;
          background-position:center !important;
          background-attachment:fixed !important;
          background-repeat:no-repeat !important;
          min-height:100vh;
        }
        .all{padding:30px 15px}
        .container{max-width:1200px;margin:0 auto}
        .title{text-align:center;color:#fff;margin-bottom:30px;text-shadow:0 2px 5px #000}
        .search{text-align:center;margin-bottom:15px}
        .search input{width:90%;max-width:500px;padding:12px 16px;border-radius:30px;border:none;outline:none}
        .sort{display:flex;justify-content:center;gap:10px;margin-bottom:25px}
        .sort button{padding:8px 14px;border-radius:20px;border:none;background:#fff}
        .sort button.on{background:#0071e3;color:#fff}
        .columns{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}
        .col{background:rgba(255,255,255,0.9);border-radius:16px;padding:20px}
        .col-title{display:block;text-align:center;font-weight:bold;margin-bottom:15px;color:#0071e3;text-decoration:none}
        .card{background:#fff;border-radius:12px;padding:15px;margin-bottom:10px;display:block;text-decoration:none;color:#333;box-shadow:0 2px 5px rgba(0,0,0,0.1)}
        .card-title{font-weight:bold;margin-bottom:8px}
        .card-info{display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:10px}
        .tag{padding:3px 8px;border-radius:10px;color:#fff}
        .tag-app{background:#ff6b6b}
        .tag-ai{background:#4ecdc4}
        .tag-side{background:#45b7d1}
        .card-btn{background:#0071e3;color:#fff;text-align:center;padding:6px;border-radius:8px;font-size:12px}
        @media(max-width:900px){.columns{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}
