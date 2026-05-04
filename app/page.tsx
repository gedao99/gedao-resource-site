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

  // 资源数据
  const initialResources = [
    {
      title: "顾我追剧",
      type: "video",
      cate: "破解APP",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/e643c5741ac8",
      desc: "全网影视免费看，无广告纯净版",
      top: false,
    },
    {
      title: "爱电影",
      type: "video",
      cate: "破解APP",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/8ea054442ecc",
      desc: "4K高清影视聚合播放器",
      top: false,
    },
    {
      title: "百度贴吧 破解版",
      type: "tool",
      cate: "破解APP",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/a6da0c4efd09",
      desc: "去广告、精简纯净版本",
      top: false,
    },
    {
      title: "喵趣(原轻漫岛)",
      type: "comic",
      cate: "破解APP",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/ef4f26138407",
      desc: "漫画小说合集阅读软件",
      top: false,
    },
    {
      title: "鸭趣听书",
      type: "music",
      cate: "破解APP",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/6c13ed9ceed9",
      desc: "全网有声书、小说听书神器",
      top: false,
    },
    {
      title: "AI编程第三期实战课",
      type: "ai",
      cate: "AI教程",
      time: "2026-04-19",
      linkUrl: "https://pan.baidu.com/s/1NnyHkqwvufyye-utHVInPA?pwd=uyhp",
      desc: "零基础AI编程、项目开发教学",
      top: false,
    },
    {
      title: "AI真人短剧训练营",
      type: "side",
      cate: "副业项目",
      time: "2026-04-19",
      linkUrl: "https://pan.baidu.com/s/1fBt69UXFJycWB2H0MKQUgg?pwd=uyhp",
      desc: "AI短剧制作、批量变现玩法",
      top: false,
    },
    {
      title: "2026AI私教实战课",
      type: "ai",
      cate: "AI教程",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/897dc90bed96",
      desc: "AI全域实操+个人轻创业课程",
      top: true,
    },
    {
      title: "Ai漫剧制作全流程",
      type: "side",
      cate: "副业项目",
      time: "2026-05-02",
      linkUrl: "https://pan.quark.cn/s/f6ddc7055054",
      desc: "零基础AI漫剧批量制作变现",
      top: true,
    },
  ];

  // 图标匹配
  const getTypeIcon = (t:string) => {
    switch(t){
      case 'video': return '🎬 影视';
      case 'music': return '🎵 音乐';
      case 'comic': return '📖 小说漫画';
      case 'tool': return '🛠️ 工具';
      case 'ai': return '🤖 AI教程';
      case 'side': return '💸 副业项目';
      default: return '📁 资源';
    }
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
  const appList = sortResources(initialResources.filter(item => ['video','music','comic','tool'].includes(item.type)));
  const aiList = sortResources(initialResources.filter(item => item.type === 'ai'));
  const sideList = sortResources(initialResources.filter(item => item.type === 'side'));
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
    return list.filter(item => item.title.includes(currentKeyword));
  };

  const finalList = searchList(getCurrentList());

  const typeMap = {
    all: "🔥 最新资源",
    app: "📱 破解版app",
    ai: "🤖 AI教程",
    side: "💰 副业项目",
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

  // 长条列表布局
  const renderList = (list: any[]) => (
    <div className="res-list">
      {list.map((item, idx) => (
        <div key={idx} className="list-item" onClick={()=>setSelectedItem(item)}>
          {item.top && <span className="top-tag">置顶</span>}
          <div className="item-icon">{getTypeIcon(item.type)}</div>
          <div className="item-title">{item.title}</div>
          <div className="item-desc">{item.desc}</div>
          <div className="item-time">{item.time}</div>
          <button className="item-btn">详情</button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="wrap">
      <div className="container">
        <div className="head-title">
          <h1>格道资源站</h1>
          <p>最新资源丨破解版app丨AI教程丨副业项目</p>
        </div>

        <div className="notice">
          本站全部免费分享，每日持续更新，喜欢可以收藏本站！
        </div>

        <div className="search-box">
          <input
            value={currentKeyword}
            onChange={(e)=>setCurrentKeyword(e.target.value)}
            placeholder="搜索资源名称..."
          />
        </div>

        {/* 顶部分类导航 */}
        <div className="nav-tab">
          <button className={activeTab==='all'?'active':''} onClick={()=>setActiveTab('all')}>🔥 最新资源</button>
          <span>丨</span>
          <button className={activeTab==='app'?'active':''} onClick={()=>setActiveTab('app')}>📱 破解版app</button>
          <span>丨</span>
          <button className={activeTab==='ai'?'active':''} onClick={()=>setActiveTab('ai')}>🤖 AI教程</button>
          <span>丨</span>
          <button className={activeTab==='side'?'active':''} onClick={()=>setActiveTab('side')}>💰 副业项目</button>
          <div className="more-btn" onClick={()=>setShowMoreModal({type:activeTab,show:true})}>查看更多</div>
        </div>

        <div className="content-box">
          {renderList(finalList)}
        </div>
      </div>

      {/* 详情弹窗 */}
      {selectedItem && (
        <div className="modal" onClick={()=>setSelectedItem(null)}>
          <div className="modal-box" onClick={e=>e.stopPropagation()}>
            <h3>{selectedItem.title}</h3>
            <p className="md-cate">{getTypeIcon(selectedItem.type)} · {selectedItem.time}</p>
            <p className="md-desc">{selectedItem.desc}</p>
            <a href={selectedItem.linkUrl} target="_blank" rel="noopener noreferrer" className="md-link">立即下载/转存</a>
            <span className="close" onClick={()=>setSelectedItem(null)}>×</span>
          </div>
        </div>
      )}

      {/* 更多弹窗 */}
      {showMoreModal.show && (
        <div className="modal" onClick={()=>setShowMoreModal({type:null,show:false})}>
          <div className="modal-box big-md" onClick={e=>e.stopPropagation()}>
            <h3>{typeMap[showMoreModal.type as keyof typeof typeMap]}</h3>
            {renderList(getMoreResources(showMoreModal.type as string))}
            <span className="close" onClick={()=>setShowMoreModal({type:null,show:false})}>×</span>
          </div>
        </div>
      )}

      {/* 邀请弹窗 */}
      {showInviteModal && (
        <div className="invite-modal">
          <div className="invite-box">
            <h3>✨ AI研学交流群</h3>
            <p>免费AI工具、副业干货、新手答疑</p>
            <div className="invite-btns">
              <button onClick={handleJoinGroup} className="ok-btn">同意加入</button>
              <button onClick={handleSkip} className="no-btn">下次再说</button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:"微软雅黑",sans-serif;}
        body{background:#f5f7fa;color:#333;}
        .wrap{padding:20px 12px;}
        .container{max-width:1100px;margin:0 auto;}

        .head-title{text-align:center;margin-bottom:15px;}
        .head-title h1{font-size:28px;color:#222;margin-bottom:5px;}
        .head-title p{color:#666;font-size:15px;}

        .notice{background:#fff;padding:10px 16px;border-radius:8px;margin-bottom:20px;text-align:center;font-size:14px;color:#555;box-shadow:0 1px 3px #eee;}

        .search-box{margin-bottom:20px;text-align:center;}
        .search-box input{width:95%;max-width:500px;padding:12px 16px;border-radius:25px;border:1px solid #ddd;outline:none;font-size:15px;}

        /* 分类导航 */
        .nav-tab{
          display:flex;
          align-items:center;
          gap:8px;
          background:#fff;
          padding:14px 20px;
          border-radius:10px 10px 0 0;
          box-shadow:0 1px 4px #eee;
          flex-wrap:wrap;
        }
        .nav-tab button{
          background:none;border:none;font-size:15px;padding:4px 8px;cursor:pointer;border-radius:4px;
        }
        .nav-tab button.active{background:#2563eb;color:#fff;}
        .nav-tab span{color:#ccc;}
        .more-btn{margin-left:auto;color:#2563eb;font-size:14px;cursor:pointer;}

        /* 主体内容白色容器 */
        .content-box{
          background:#fff;
          padding:15px 20px;
          border-radius:0 0 10px 10px;
          box-shadow:0 1px 4px #eee;
        }

        /* 单行列表布局 核心 */
        .res-list{display:flex;flex-direction:column;gap:12px;}
        .list-item{
          display:grid;
          grid-template-columns:130px 1fr 200px 100px 70px;
          align-items:center;
          gap:10px;
          padding:14px 12px;
          border-bottom:1px solid #f2f2f2;
          transition:0.2s;
          cursor:pointer;
        }
        .list-item:hover{background:#f9fafc;}
        .list-item:last-child{border:none;}

        .top-tag{
          position:absolute;
          background:#f56c6c;color:#fff;font-size:12px;padding:2px 6px;border-radius:4px;
          margin-left:-8px;margin-top:-10px;
        }
        .item-icon{font-size:14px;color:#666;}
        .item-title{font-weight:500;color:#222;}
        .item-desc{font-size:13px;color:#777;}
        .item-time{font-size:13px;color:#999;text-align:center;}
        .item-btn{border:none;background:#2563eb;color:#fff;padding:6px 0;border-radius:6px;cursor:pointer;}

        /* 手机自适应 自动变成竖向排版 */
        @media (max-width:768px){
          .list-item{
            grid-template-columns:1fr;
            gap:6px;
            padding:16px 10px;
          }
          .item-time{text-align:left;}
        }

        /* 弹窗 */
        .modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:999; padding:15px;}
        .modal-box{background:#fff;border-radius:12px;padding:25px;max-width:550px;width:100%;position:relative;}
        .big-md{max-width:900px;max-height:85vh;overflow-y:auto;}
        .close{position:absolute;top:15px;right:20px;font-size:22px;color:#999;cursor:pointer;}
        .md-cate{color:#888;font-size:14px;margin:10px 0;}
        .md-desc{line-height:1.7;color:#555;margin:15px 0;}
        .md-link{display:block;background:#2563eb;color:#fff;text-align:center;padding:12px;border-radius:8px;text-decoration:none;margin-top:10px;}

        .invite-modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:1000;}
        .invite-box{background:#fff;border-radius:12px;padding:25px;width:90%;max-width:360px;text-align:center;}
        .invite-btns{display:flex;gap:10px;margin-top:20px;}
        .ok-btn{flex:1;background:#2563eb;color:#fff;border:none;padding:10px;border-radius:8px;}
        .no-btn{flex:1;background:#eee;border:none;padding:10px;border-radius:8px;}
      `}</style>
    </div>
  );
}
