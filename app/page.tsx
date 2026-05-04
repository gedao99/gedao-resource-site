'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showMoreModal, setShowMoreModal] = useState<{ type: string | null; show: boolean }>({ type: null, show: false });
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // 页面加载判断弹窗逻辑
  useEffect(() => {
    const hasJoined = localStorage.getItem('userJoinedAIGroup');
    if (hasJoined) {
      setShowInviteModal(false);
      return;
    }
    const today = new Date().toLocaleDateString();
    const closedDate = localStorage.getItem('popupClosedDate');
    if (closedDate !== today) {
      setShowInviteModal(true);
    }
  }, []);

  const handleJoinGroup = () => {
    localStorage.setItem('userJoinedAIGroup', 'true');
    window.open("https://qm.qq.com/q/KPkPCBv6MK", "_blank");
    setShowInviteModal(false);
  };

  const handleSkip = () => {
    const today = new Date().toLocaleDateString();
    localStorage.setItem('popupClosedDate', today);
    setShowInviteModal(false);
  };

  // 资源列表（已包含你所有资源）
  const initialResources = [
    {
      title: "自用精品合集app推荐：包含影视音乐小说美图剪映等！！",
      type: "app",
      time: "2026-04-20",
      linkUrl: "https://pan.quark.cn/s/你的链接",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: true,
    },
    {
      title: "顾我追剧",
      type: "app",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/e643c5741ac8",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "爱电影",
      type: "app",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/8ea054442ecc",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "百度贴吧",
      type: "app",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/a6da0c4efd09",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "喵趣(原轻漫岛)",
      type: "app",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/ef4f26138407",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "鸭趣听书",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/6c13ed9ceed9",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "紫金草视频4K",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/f4d1111a13c1",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "追片喵4K",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/3313ff3666ad",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "AI编程第三期",
      type: "ai",
      time: "2026-04-19",
      linkUrl: "https://pan.baidu.com/s/1NnyHkqwvufyye-utHVInPA?pwd=uyhp",
      desc: "《AI编程实战课-第三期》零基础全链路AI编程实战，覆盖产品开发到冷启动变现全流程！",
      top: false,
    },
    {
      title: "AI真人短剧训练营",
      type: "side",
      time: "2026-04-19",
      linkUrl: "https://pan.baidu.com/s/1fBt69UXFJycWB2H0MKQUgg?pwd=uyhp",
      desc: "21天AI真人短剧全流程实战，从剧本→分镜→生成→剪辑，小白也能做出电影感短剧！",
      top: false,
    },
    {
      title: "2026AI私教实战课：从AI原理到全场景实操，零基础学会用AI提效+单人单干创业",
      type: "ai",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/897dc90bed96",
      desc: "本课程以「AI落地实操+单人单干创业」为双主线，覆盖全场景实战技能，配套98节视频课+专属私教答疑，打造超级个体变现能力！",
      top: true,
    },
    {
      title: "Ai漫剧制作全流程",
      type: "side",
      time: "2026-05-02",
      linkUrl: "https://pan.quark.cn/s/f6ddc7055054",
      desc: "AI漫剧制作全流程实战教学，零基础快速成片，高效批量产出高质量漫剧内容！",
      top: true,
    },
  ];

  // 通用排序函数：置顶优先，然后按时间倒序
  const sortResources = (list: any[]) => {
    return [...list].sort((a, b) => {
      if (a.top && !b.top) return -1;
      if (!a.top && b.top) return 1;
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    });
  };

  // 过滤最近3天内更新的资源 + 置顶资源（去重）
  const getRecentAndTopResources = (list: any[]) => {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    
    const recentList = list.filter(item => {
      const itemDate = new Date(item.time);
      return itemDate >= threeDaysAgo || item.top;
    });
    
    const uniqueMap = new Map();
    recentList.forEach(item => {
      if (!uniqueMap.has(item.title)) {
        uniqueMap.set(item.title, item);
      }
    });
    
    return sortResources(Array.from(uniqueMap.values()));
  };

  // 各分类资源列表
  const allResources = sortResources(initialResources);
  const appList = sortResources(initialResources.filter(item => item.type === 'app'));
  const aiList = sortResources(initialResources.filter(item => item.type === 'ai'));
  const sideList = sortResources(initialResources.filter(item => item.type === 'side'));
  
  // 首页显示的资源：置顶 + 最近3天
  const homeList = getRecentAndTopResources(initialResources);

  // 根据当前激活的标签获取对应的资源列表
  const getCurrentList = () => {
    switch (activeTab) {
      case 'all': return homeList;
      case 'app': return appList;
      case 'ai': return aiList;
      case 'side': return sideList;
      default: return homeList;
    }
  };

  // 搜索过滤（只在当前激活的标签下搜索）
  const searchList = (list: any[]) => {
    if (!currentKeyword) return list;
    return list.filter(item => item.title.toLowerCase().includes(currentKeyword.toLowerCase()));
  };

  const finalList = searchList(getCurrentList());

  const typeMap = {
    all: { name: "🔥 最新资源", icon: "🔥", color: "#ff6b6b" },
    app: { name: "📱 破解版app", icon: "📱", color: "#3b82f6" },
    ai: { name: "🤖 AI教程", icon: "🤖", color: "#8b5cf6" },
    side: { name: "💰 副业项目", icon: "💰", color: "#10b981" },
  };

  const getMoreResources = (type: string) => {
    switch (type) {
      case 'all': return allResources;
      case 'app': return appList;
      case 'ai': return aiList;
      case 'side': return sideList;
      default: return [];
    }
  };

  // 获取资源对应的图标和背景色
  const getResourceStyle = (type: string) => {
    switch (type) {
      case 'app': return { icon: "📱", bg: "rgba(59, 130, 246, 0.15)" };
      case 'ai': return { icon: "🤖", bg: "rgba(139, 92, 246, 0.15)" };
      case 'side': return { icon: "💰", bg: "rgba(16, 185, 129, 0.15)" };
      default: return { icon: "📦", bg: "rgba(107, 114, 128, 0.15)" };
    }
  };

  // 渲染闪链同款图标卡片网格
  const renderResourceGrid = (list: any[]) => (
    <div className="resource-grid">
      {list.map((item, index) => {
        const style = getResourceStyle(item.type);
        return (
          <div 
            key={index} 
            className={`icon-card ${item.top ? 'card-top' : ''}`} 
            onClick={() => setSelectedItem(item)}
          >
            {item.top && <div className="top-badge">置顶</div>}
            <div className="card-icon" style={{ background: style.bg }}>
              <span className="icon-text">{style.icon}</span>
            </div>
            <div className="card-name">{item.title}</div>
            <div className="card-meta">
              <span className="meta-time">{item.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="all">
      <div className="container">
        <div className="title">
          <h1>格道资源站</h1>
          <p>破解版app | AI教程 | 副业项目</p>
        </div>
        
        {/* 滚动公告栏 */}
        <div className="notice-bar">
          <div className="notice-content">
            本站资源完全免费分享，如果你觉得不错，不妨转发给身边的朋友；资源每日更新明细请关注公众号【格道黑科技】。
          </div>
        </div>

        {/* 搜索框 */}
        <div className="search">
          <input
            value={currentKeyword}
            onChange={(e) => setCurrentKeyword(e.target.value)}
            placeholder="🔍 搜索资源..."
          />
        </div>

        {/* 标签切换栏 */}
        <div className="tabs-container">
          <div className="tabs-wrapper">
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'all' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                🔥 最新资源
              </button>
              <span className="tab-divider">丨</span>
              <button 
                className={`tab-btn ${activeTab === 'app' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('app')}
              >
                📱 破解版app
              </button>
              <span className="tab-divider">丨</span>
              <button 
                className={`tab-btn ${activeTab === 'ai' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('ai')}
              >
                🤖 AI教程
              </button>
              <span className="tab-divider">丨</span>
              <button 
                className={`tab-btn ${activeTab === 'side' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('side')}
              >
                💰 副业项目
              </button>
            </div>
          </div>
          <button 
            className="more-btn" 
            onClick={() => setShowMoreModal({ type: activeTab, show: true })}
          >
            查看更多 →
          </button>
        </div>

        {/* 资源展示区域 */}
        <div className="section">
          {renderResourceGrid(finalList)}
        </div>
      </div>

      {/* 资源详情弹窗 */}
      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedItem(null)}>&times;</span>
            <h1 className="modal-title">{selectedItem.title}</h1>
            <div className="modal-info">
              <span>{typeMap[selectedItem.type as keyof typeof typeMap]?.name || typeMap.all.name}</span>
              <span>更新时间：{selectedItem.time}</span>
            </div>
            <div className="modal-desc">{selectedItem.desc}</div>
            <a href={selectedItem.linkUrl} className="modal-btn" target="_blank" rel="noopener noreferrer">🔗 立即转存 / 下载</a>
          </div>
        </div>
      )}

      {/* 查看更多弹窗 */}
      {showMoreModal.show && (
        <div className="modal" onClick={() => setShowMoreModal({ type: null, show: false })}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowMoreModal({ type: null, show: false })}>&times;</span>
            <h1 className="modal-title">{typeMap[showMoreModal.type as keyof typeof typeMap]?.name || "全部资源"}</h1>
            {renderResourceGrid(getMoreResources(showMoreModal.type as string))}
          </div>
        </div>
      )}

      {/* AI交流群邀请弹窗 */}
      {showInviteModal && (
        <div className="invite-modal-overlay">
          <div className="invite-modal">
            <div className="invite-modal-header">
              <h2 className="invite-modal-title">✨ 邀请函：加入AI研学交流群</h2>
            </div>
            <div className="invite-modal-content">
              <p>你好呀👋</p>
              <p>在你逛资源的同时，别错过这波AI红利！</p>
              <p>AI时代已经来临，它不再是“懂不懂都行”的加分项，而是像开车、用手机一样，未来人人必备的生存技能。<br/>别人已经用AI提效、搞副业、抢机会，观望的你，只会被信息差越拉越远。</p>
              <p>我们的免费交流群，为你提供：<br/>✅ 实用AI工具分享与使用技巧<br/>✅ 新手入门教程与避坑指南<br/>✅ 同频伙伴交流、互相答疑</p>
              <p style={{marginTop:"15px", fontWeight:"bold"}}>早学会，早受益。<br/>邀请你一起，跟上AI时代的脚步！</p>
            </div>

            <div className="invite-modal-buttons">
              <button className="join-btn" onClick={handleJoinGroup}>✅ 同意加入交流群</button>
              <button className="skip-btn" onClick={handleSkip}>⏭️ 下次再说</button>
            </div>
          </div>
        </div>
      )}

      {/* 全局样式 - 闪链同款毛玻璃卡片 */}
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
        .container{max-width:1400px;margin:0 auto}
        
        .title{text-align:center;margin-bottom:20px}
        .title h1{
          font-size:38px;
          font-weight:bold;
          background:linear-gradient(90deg,#4f46e5,#7c3aed,#8b5cf6);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          margin-bottom:8px;
        }
        .title p{font-size:18px;color:#fff;text-shadow:0 2px 5px rgba(0,0,0,0.5)}

        .notice-bar{
          background:rgba(255,255,255,0.85) !important;
          backdrop-filter: blur(10px);
          border-radius:12px;
          padding:12px 0;
          margin-bottom:25px;
          overflow:hidden;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
        }
        .notice-content{
          display:inline-block;
          white-space:nowrap;
          color:#000 !important;
          font-size:15px;
          font-weight:500;
          animation:scrollNotice 30s linear infinite;
        }
        @keyframes scrollNotice{
          0%{transform:translateX(100%)}
          100%{transform:translateX(-100%)}
        }
        
        .search{text-align:center;margin-bottom:30px}
        .search input{
          width:90%;max-width:500px;padding:14px 20px;
          border-radius:30px;border:none;outline:none;
          background:rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          font-size:16px;
        }

        /* 标签栏样式 */
        .tabs-container{
          display:flex;
          justify-content:space-between;
          align-items:center;
          background:rgba(255,255,255,0.85) !important;
          backdrop-filter: blur(10px);
          border-radius:16px 16px 0 0;
          padding:18px 22px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
          border-bottom:1px solid rgba(255,255,255,0.2);
          gap:15px;
        }
        .tabs-wrapper{
          width:100%;
          overflow-x:auto;
          -webkit-overflow-scrolling:touch;
          scrollbar-width:none;
        }
        .tabs-wrapper::-webkit-scrollbar{
          display:none;
        }
        .tabs{
          display:flex;
          align-items:center;
          gap:10px;
          white-space:nowrap;
          min-width:max-content;
        }
        .tab-btn{
          background:none;
          border:none;
          font-size:18px;
          font-weight:bold;
          color:#666;
          cursor:pointer;
          padding:8px 12px;
          border-radius:8px;
          transition:all 0.2s ease;
          flex-shrink:0;
        }
        .tab-btn:hover{
          color:#4f46e5;
          background:rgba(79, 70, 229, 0.1);
        }
        .tab-active{
          color:#4f46e5 !important;
          background:rgba(79, 70, 229, 0.15) !important;
        }
        .tab-divider{
          color:#ccc;
          font-size:18px;
          flex-shrink:0;
        }
        .more-btn{
          font-size:14px;color:#4f46e5;font-weight:bold;
          background:none;border:none;cursor:pointer;
          flex-shrink:0;
          white-space:nowrap;
        }
        .more-btn:hover{text-decoration:underline;}

        .section{
          background:rgba(255,255,255,0.75) !important;
          backdrop-filter: blur(15px);
          border-radius:0 0 16px 16px;
          padding:22px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
          margin-bottom:35px;
        }

        /* 核心：闪链同款图标卡片网格 */
        .resource-grid{
          display:grid;
          grid-template-columns:repeat(8, 1fr);
          gap:15px;
        }
        @media(max-width:1400px){.resource-grid{grid-template-columns:repeat(6, 1fr)}}
        @media(max-width:1000px){.resource-grid{grid-template-columns:repeat(5, 1fr)}}
        @media(max-width:768px){.resource-grid{grid-template-columns:repeat(4, 1fr);gap:12px;}}
        @media(max-width:480px){.resource-grid{grid-template-columns:repeat(4, 1fr);gap:10px;}}

        .icon-card{
          background:rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          border-radius:12px;
          padding:15px 10px;
          cursor:pointer;
          position:relative;
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
          transition:all 0.2s ease;
          border:1px solid rgba(255,255,255,0.3);
        }
        .icon-card:hover{
          transform:translateY(-3px);
          box-shadow:0 8px 20px rgba(0,0,0,0.15);
          background:rgba(255,255,255,0.8);
        }
        .card-top{
          border:2px solid #ff6b6b !important;
          background:rgba(255, 107, 107, 0.1) !important;
        }
        .top-badge{
          position:absolute;
          top:-8px;
          right:-8px;
          background:#ff6b6b;
          color:#fff;
          font-size:11px;
          padding:2px 6px;
          border-radius:10px;
          font-weight:bold;
        }
        .card-icon{
          width:50px;
          height:50px;
          border-radius:12px;
          display:flex;
          align-items:center;
          justify-content:center;
          margin-bottom:10px;
        }
        .icon-text{
          font-size:28px;
        }
        .card-name{
          font-size:13px;
          font-weight:500;
          color:#222;
          line-height:1.4;
          height:36px;
          overflow:hidden;
          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          margin-bottom:5px;
        }
        .card-meta{
          font-size:11px;
          color:#666;
        }

        .modal{
          position:fixed;top:0;left:0;width:100%;height:100%;
          background:rgba(0,0,0,0.7);z-index:999;
          display:flex;justify-content:center;align-items:center;
          padding:20px;
        }
        .modal-content{
          background:#fff;border-radius:20px;padding:30px;
          max-width:700px;width:100%;position:relative;
          max-height:85vh;overflow-y:auto;
        }
        .modal-large{max-width:1200px !important;}
        .close-btn{
          position:absolute;top:15px;right:15px;font-size:24px;
          cursor:pointer;color:#666;
        }
        .modal-title{
          font-size:28px;font-weight:bold;
          background:linear-gradient(90deg,#4f46e5,#7c3aed,#8b5cf6);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          margin-bottom:20px;
        }
        .modal-info{
          display:flex;gap:15px;margin-bottom:20px;color:#666;font-size:14px;flex-wrap:wrap;
        }
        .modal-desc{
          line-height:1.7;color:#333;margin-bottom:25px
        }
        .modal-btn{
          display:block;background:linear-gradient(135deg,#4f46e5,#7c3aed);
          color:#fff;text-align:center;padding:15px;border-radius:12px;
          text-decoration:none;font-weight:bold;font-size:16px;
        }
        .invite-modal-overlay{
          position:fixed;top:0;left:0;width:100%;height:100%;
          background:rgba(0,0,0,0.8);z-index:1000;
          display:flex;justify-content:center;align-items:center;
          padding:15px;
        }
        .invite-modal{
          background:linear-gradient(135deg,#e0f2fe,#bfdbfe);
          border-radius:20px;
          max-width:420px;
          width:100%;
          padding:25px;
          text-align:center;
          box-shadow:0 10px 40px rgba(0,0,0,0.3);
        }
        .invite-modal-title{
          font-size:20px;color:#1e40af;margin-bottom:18px;
        }
        .invite-modal-content{
          text-align:left;
          color:#1e3a8a;line-height:1.7;
          font-size:14px;
          margin-bottom:20px;
        }
        .invite-modal-buttons{
          display:flex;flex-direction:column;gap:10px;
        }
        .join-btn{
          background:#2563eb;color:#fff;
          border:none;border-radius:12px;padding:12px 0;
          font-size:15px;font-weight:bold;cursor:pointer;
        }
        .skip-btn{
          background:#e2e8f0;color:#374151;
          border:none;border-radius:12px;padding:12px 0;
          font-size:15px;font-weight:bold;cursor:pointer;
        }
      `}</style>
    </div>
  );
}
