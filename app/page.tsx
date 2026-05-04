'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showMoreModal, setShowMoreModal] = useState<{ type: string | null; show: boolean }>({ type: null, show: false });
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

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

  // 资源列表
  const initialResources = [
    {
      title: "顾我追剧",
      type: "video",
      originType: "app",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/e643c5741ac8",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "爱电影",
      type: "video",
      originType: "app",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/8ea054442ecc",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "百度贴吧",
      type: "tool",
      originType: "app",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/a6da0c4efd09",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "喵趣(原轻漫岛)",
      type: "book",
      originType: "app",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/ef4f26138407",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "鸭趣听书",
      type: "music",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/6c13ed9ceed9",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "紫金草视频4K",
      type: "video",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/f4d1111a13c1",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "追片喵4K",
      type: "video",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/3313ff3666ad",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "AI编程第三期",
      type: "ai",
      originType: "ai",
      time: "2026-04-19",
      linkUrl: "https://pan.baidu.com/s/1NnyHkqwvufyye-utHVInPA?pwd=uyhp",
      desc: "《AI编程实战课-第三期》零基础全链路AI编程实战",
      top: false,
    },
    {
      title: "AI真人短剧训练营",
      type: "side",
      originType: "side",
      time: "2026-04-19",
      linkUrl: "https://pan.baidu.com/s/1fBt69UXFJycWB2H0MKQUgg?pwd=uyhp",
      desc: "21天AI真人短剧全流程实战，小白也能上手",
      top: false,
    },
    {
      title: "2026AI私教实战课",
      type: "ai",
      originType: "ai",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/897dc90bed96",
      desc: "AI原理到全场景实操，零基础单人创业玩法",
      top: true,
    },
    {
      title: "Ai漫剧制作全流程",
      type: "side",
      originType: "side",
      time: "2026-05-02",
      linkUrl: "https://pan.quark.cn/s/f6ddc7055054",
      desc: "AI漫剧制作全流程教学，批量变现",
      top: true,
    },
  ];

  // 分类专属图标
  const getTypeIcon = (type: string) => {
    const iconMap: Record<string, string> = {
      video: "🎬 影视软件",
      music: "🎵 音乐听书",
      book: "📚 小说漫画",
      tool: "🔧 实用工具",
      ai: "🤖 AI教程",
      side: "💰 副业项目"
    };
    return iconMap[type] || "📦 资源";
  };

  const sortResources = (list: any[]) => {
    return [...list].sort((a, b) => {
      if (a.top && !b.top) return -1;
      if (!a.top && b.top) return 1;
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    });
  };

  const getRecentAndTopResources = (list: any[]) => {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const recentList = list.filter(item => {
      const itemDate = new Date(item.time);
      return itemDate >= threeDaysAgo || item.top;
    });
    const uniqueMap = new Map();
    recentList.forEach(item => {
      if (!uniqueMap.has(item.title)) uniqueMap.set(item.title, item);
    });
    return sortResources(Array.from(uniqueMap.values()));
  };

  const allResources = sortResources(initialResources);
  const appList = sortResources(initialResources.filter(item => item.originType === 'app'));
  const aiList = sortResources(initialResources.filter(item => item.originType === 'ai'));
  const sideList = sortResources(initialResources.filter(item => item.originType === 'side'));
  const homeList = getRecentAndTopResources(initialResources);

  const getCurrentList = () => {
    switch (activeTab) {
      case 'all': return homeList;
      case 'app': return appList;
      case 'ai': return aiList;
      case 'side': return sideList;
      default: return homeList;
    }
  };

  const searchList = (list: any[]) => {
    if (!currentKeyword) return list;
    return list.filter(item => item.title.toLowerCase().includes(currentKeyword.toLowerCase()));
  };

  const finalList = searchList(getCurrentList());

  const typeMap = {
    all: { name: "最新资源" },
    app: { name: "破解版app" },
    ai: { name: "AI教程" },
    side: { name: "副业项目" },
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

  // 长条单列列表 + 右上角置顶
  const renderResourceList = (list: any[]) => (
    <div className="resource-list">
      {list.map((item, index) => (
        <div key={index} className="list-row" onClick={() => setSelectedItem(item)}>
          {item.top && <span className="row-top-badge">置顶</span>}
          <div className="row-icon">{getTypeIcon(item.type)}</div>
          <div className="row-main">
            <div className="row-title">{item.title}</div>
            <div className="row-desc">{item.desc}</div>
          </div>
          <div className="row-time">{item.time}</div>
          <div className="row-btn">查看详情</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="all">
      <div className="container">
        <div className="title">
          <h1>格道资源站</h1>
          <p>最新资源丨破解版app丨AI教程丨副业项目</p>
        </div>
        
        {/* 滚动公告轮播 完全保留 */}
        <div className="notice-bar">
          <div className="notice-content">
            本站资源完全免费分享，如果你觉得不错，不妨转发给身边的朋友；资源每日更新明细请关注公众号【格道黑科技】。
          </div>
        </div>

        <div className="search">
          <input
            value={currentKeyword}
            onChange={(e) => setCurrentKeyword(e.target.value)}
            placeholder="🔍 搜索资源..."
          />
        </div>

        {/* 导航栏：查看更多放在最新资源正下方 */}
        <div className="tabs-container">
          <div className="tabs-wrapper">
            <div className="tabs">
              {/* 最新资源按钮 + 下方的查看更多 */}
              <div className="tab-item-wrapper">
                <button 
                  className={`tab-btn ${activeTab === 'all' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  最新资源
                </button>
                {/* 仅在选中最新资源时，在其正下方显示查看更多 */}
                {activeTab === 'all' && (
                  <button 
                    className="tab-more-btn" 
                    onClick={() => setShowMoreModal({ type: 'all', show: true })}
                  >
                    查看更多 →
                  </button>
                )}
              </div>
              
              <span className="tab-divider">丨</span>
              
              <button 
                className={`tab-btn ${activeTab === 'app' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('app')}
              >
                破解版app
              </button>
              <span className="tab-divider">丨</span>
              <button 
                className={`tab-btn ${activeTab === 'ai' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('ai')}
              >
                AI教程
              </button>
              <span className="tab-divider">丨</span>
              <button 
                className={`tab-btn ${activeTab === 'side' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('side')}
              >
                副业项目
              </button>
            </div>
          </div>
        </div>

        {/* 资源区域 */}
        <div className="section">
          {renderResourceList(finalList)}
        </div>
      </div>

      {/* 弹窗全部保留原样 */}
      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedItem(null)}>&times;</span>
            <h1 className="modal-title">{selectedItem.title}</h1>
            <div className="modal-info">
              <span>{typeMap[selectedItem.originType as keyof typeof typeMap]?.name || typeMap.all.name}</span>
              <span>更新时间：{selectedItem.time}</span>
            </div>
            <div className="modal-desc">{selectedItem.desc}</div>
            <a href={selectedItem.linkUrl} className="modal-btn" target="_blank" rel="noopener noreferrer">🔗 立即转存 / 下载</a>
          </div>
        </div>
      )}

      {showMoreModal.show && (
        <div className="modal" onClick={() => setShowMoreModal({ type: null, show: false })}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowMoreModal({ type: null, show: false })}>&times;</span>
            <h1 className="modal-title">{typeMap[showMoreModal.type as keyof typeof typeMap]?.name || "全部资源"}</h1>
            {renderResourceList(getMoreResources(showMoreModal.type as string))}
          </div>
        </div>
      )}

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
          background:#fff !important;
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
          background:rgba(255,255,255,0.95);
        }

        /* 导航栏核心布局 */
        .tabs-container{
          display:flex;
          justify-content:flex-start;
          align-items:flex-start;
          background:#ffffff !important;
          border-radius:16px 16px 0 0;
          padding:15px 20px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
          border-bottom:1px solid #eee;
        }
        .tabs-wrapper{
          width:100%;
          overflow-x:auto;
          -webkit-overflow-scrolling:touch;
          scrollbar-width:none;
        }
        .tabs-wrapper::-webkit-scrollbar{display:none;}
        .tabs{
          display:flex;
          align-items:flex-start;
          gap:6px;
          white-space:nowrap;
          min-width:max-content;
        }

        /* 最新资源按钮的包裹容器 */
        .tab-item-wrapper{
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:4px;
        }

        .tab-btn{
          background:none;border:none;
          font-size:17px;font-weight:bold;color:#666;
          cursor:pointer;padding:6px 10px;border-radius:8px;
          transition:all 0.2s ease;flex-shrink:0;
        }
        .tab-btn:hover{color:#4f46e5;background:#f0f4ff;}
        .tab-active{color:#4f46e5 !important;background:#eef2ff !important;}

        /* 查看更多按钮：在最新资源正下方 */
        .tab-more-btn{
          background:none;border:none;
          font-size:13px;color:#4f46e5;font-weight:bold;
          cursor:pointer;
          padding:0;
        }
        .tab-more-btn:hover{text-decoration:underline;}

        .tab-divider{color:#ccc;font-size:17px;flex-shrink:0;align-self:center;}

        .section{
          background:#ffffff !important;
          border-radius:0 0 16px 16px;
          padding:20px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
          margin-bottom:35px;
        }

        /* 资源列表样式 */
        .resource-list{display:flex;flex-direction:column;gap:14px;}
        .list-row{
          position:relative;
          display:grid;
          grid-template-columns:160px 1fr 90px 90px;
          align-items:center;
          gap:16px;
          padding:18px 16px;
          background:#f8f9fb;
          border-radius:10px;
          border:1px solid #eee;
          cursor:pointer;
          transition:0.2s;
        }
        .list-row:hover{background:#f0f4ff;}

        .row-top-badge{
          position:absolute;
          top:12px;
          right:16px;
          background:#ff5555;
          color:#fff;
          font-size:12px;
          padding:2px 8px;
          border-radius:6px;
        }

        .row-icon{font-size:14px;color:#555;font-weight:500;}
        .row-main{display:flex;flex-direction:column;gap:4px;}
        .row-title{font-size:16px;font-weight:bold;color:#222;}
        .row-desc{font-size:13px;color:#777;}
        .row-time{font-size:13px;color:#999;text-align:center;}
        .row-btn{
          background:#4f46e5;color:#fff;
          text-align:center;padding:7px 0;
          border-radius:8px;font-size:13px;
        }

        /* 手机自适应 */
        @media (max-width:768px){
          .list-row{
            grid-template-columns:1fr;
            gap:8px;
            padding:16px 14px;
          }
          .row-time{text-align:left;}
          .tab-btn{font-size:16px;padding:5px 8px;}
          .tab-divider{font-size:16px;}
        }

        /* 弹窗样式 完全保留 */
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
        .modal-desc{line-height:1.7;color:#333;margin-bottom:25px}
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
          max-width:420px;width:100%;padding:25px;
          text-align:center;box-shadow:0 10px 40px rgba(0,0,0,0.3);
        }
        .invite-modal-title{font-size:20px;color:#1e40af;margin-bottom:18px;}
        .invite-modal-content{text-align:left;color:#1e3a8a;line-height:1.7;font-size:14px;margin-bottom:20px;}
        .invite-modal-buttons{display:flex;flex-direction:column;gap:10px;}
        .join-btn{background:#2563eb;color:#fff;border:none;border-radius:12px;padding:12px 0;font-size:15px;font-weight:bold;cursor:pointer;}
        .skip-btn{background:#e2e8f0;color:#374151;border:none;border-radius:12px;padding:12px 0;font-size:15px;font-weight:bold;cursor:pointer;}
      `}</style>
    </div>
  );
}
