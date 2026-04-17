'use client';
import { useState } from 'react';
export default function Home() {
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showMoreModal, setShowMoreModal] = useState<{ type: string | null; show: boolean }>({ type: null, show: false });
  // ====================== 资源列表（可置顶） ======================
  const initialResources = [
    // ============== 置顶资源 ==============
    {
      title: "【置顶】爱影视(爱电影) 永久可用",
      type: "app",
      time: "2026-04-15",
      linkUrl: "https://pan.quark.cn/s/22a54c2c672b",
      desc: "已优化最新版本，无广告",
      top: true, // ✅ 加这个就是置顶
    },
    // ============== 普通资源 ==============
    {
      title: "2026AI私教实战课：从AI原理到全场景实操",
      type: "ai",
      time: "2026-04-15",
      linkUrl: "https://pan.quark.cn/s/3dedc19b4aa6",
      desc: "零基础学会AI提效、单人创业、全流程教程。",
      top: false,
    },
    {
      title: "抖音破解版无水印",
      type: "app",
      time: "2026-04-14",
      linkUrl: "https://你的链接",
      desc: "无水印下载、去广告、高清解析。",
      top: false,
    },
    {
      title: "ChatGPT 4o 使用教程",
      type: "ai",
      time: "2026-04-13",
      linkUrl: "https://你的链接",
      desc: "最新4o模型使用技巧、提示词模板。",
      top: false,
    },
    {
      title: "小红书副业变现课",
      type: "side",
      time: "2026-04-12",
      linkUrl: "https://你的链接",
      desc: "0粉起号、选品、文案、变现全流程。",
      top: false,
    },
    {
      title: "PS 2025 永久激活版",
      type: "app",
      time: "2026-04-11",
      linkUrl: "https://你的链接",
      desc: "完整插件、无广告、永久使用。",
      top: false,
    },
    {
      title: "闲鱼无货源赚钱课",
      type: "side",
      time: "2026-04-09",
      linkUrl: "https://你的链接",
      desc: "不用囤货，一部手机就能做。",
      top: false,
    },
  ];
  // ====================== 排序规则：置顶永远在最上面 ======================
  const sortResources = (list: any[]) => {
    return [...list].sort((a, b) => {
      if (a.top && !b.top) return -1;
      if (!a.top && b.top) return 1;
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    });
  };
  // 分类数据
  const appList = sortResources(initialResources.filter(item => item.type === 'app'));
  const aiList = sortResources(initialResources.filter(item => item.type === 'ai'));
  const sideList = sortResources(initialResources.filter(item => item.type === 'side'));

  // ====================== 搜索逻辑（仅修改这里，实现关键词全量匹配） ======================
  const searchList = (list: any[]) => {
    // 无关键词：返回前3条（保持原布局）
    if (!currentKeyword) return list.slice(0, 3);
    // 有关键词：返回所有匹配结果（不限制数量）
    return list.filter(item => 
      item.title.toLowerCase().includes(currentKeyword.toLowerCase())
    );
  };

  // 直接基于全量分类列表做搜索过滤
  const finalApp = searchList(appList);
  const finalAi = searchList(aiList);
  const finalSide = searchList(sideList);

  const typeMap = {
    app: { name: "📱 软件工具" },
    ai: { name: "🤖 AI教程" },
    side: { name: "💰 副业项目" },
  };
  // 获取查看更多的全部资源
  const getMoreResources = (type: string) => {
    switch (type) {
      case 'app': return appList;
      case 'ai': return aiList;
      case 'side': return sideList;
      default: return [];
    }
  };
  return (
    <div className="all">
      <div className="container">
        <div className="title">
          <h1>格道资源站</h1>
          <p>精品软件 | AI教程 | 副业项目</p>
        </div>
        
        {/* ====================== 新增：滚动公告栏（仅添加此处） ====================== */}
        <div className="notice-bar">
          <div className="notice-content">
            本站资源完全免费分享，如果你也觉得还不错，请帮我转发给有需要的朋友；资源每日更新明细请关注公众号【格道黑科技】。
          </div>
        </div>

        <div className="search">
          <input
            value={currentKeyword}
            onChange={(e) => setCurrentKeyword(e.target.value)}
            placeholder="🔍 搜索资源..."
          />
        </div>
        <div className="columns">
          {/* 软件 */}
          <div className="col">
            <div className="col-header">
              <h2 className="col-title">📱 破解软件</h2>
              <button className="more-btn" onClick={() => setShowMoreModal({ type: 'app', show: true })}>查看更多 →</button>
            </div>
            <div className="list">
              {finalApp.map((item, index) => (
                <div key={index} className={`card ${item.top ? 'card-top' : ''}`} onClick={() => setSelectedItem(item)}>
                  {item.top && <div className="top-tag">置顶</div>}
                  <div className="card-title">{item.title}</div>
                  <div className="card-info">
                    <span className={`tag tag-${item.type}`}>{typeMap[item.type as keyof typeof typeMap].name}</span>
                    <span>{item.time}</span>
                  </div>
                  <div className="card-btn">查看详情</div>
                </div>
              ))}
            </div>
          </div>
          {/* AI */}
          <div className="col">
            <div className="col-header">
              <h2 className="col-title">🤖 AI教程</h2>
              <button className="more-btn" onClick={() => setShowMoreModal({ type: 'ai', show: true })}>查看更多 →</button>
            </div>
            <div className="list">
              {finalAi.map((item, index) => (
                <div key={index} className={`card ${item.top ? 'card-top' : ''}`} onClick={() => setSelectedItem(item)}>
                  {item.top && <div className="top-tag">置顶</div>}
                  <div className="card-title">{item.title}</div>
                  <div className="card-info">
                    <span className={`tag tag-${item.type}`}>{typeMap[item.type as keyof typeof typeMap].name}</span>
                    <span>{item.time}</span>
                  </div>
                  <div className="card-btn">查看详情</div>
                </div>
              ))}
            </div>
          </div>
          {/* 副业 */}
          <div className="col">
            <div className="col-header">
              <h2 className="col-title">💰 副业项目</h2>
              <button className="more-btn" onClick={() => setShowMoreModal({ type: 'side', show: true })}>查看更多 →</button>
            </div>
            <div className="list">
              {finalSide.map((item, index) => (
                <div key={index} className={`card ${item.top ? 'card-top' : ''}`} onClick={() => setSelectedItem(item)}>
                  {item.top && <div className="top-tag">置顶</div>}
                  <div className="card-title">{item.title}</div>
                  <div className="card-info">
                    <span className={`tag tag-${item.type}`}>{typeMap[item.type as keyof typeof typeMap].name}</span>
                    <span>{item.time}</span>
                  </div>
                  <div className="card-btn">查看详情</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 详情弹窗 */}
      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedItem(null)}>&times;</span>
            <h1 className="modal-title">{selectedItem.title}</h1>
            <div className="modal-info">
              <span>{typeMap[selectedItem.type as keyof typeof typeMap].name}</span>
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowMoreModal({ type: null, show: false })}>&times;</span>
            <h1 className="modal-title">{typeMap[showMoreModal.type as keyof typeof typeMap]?.name || "全部资源"}</h1>
            <div className="list">
              {getMoreResources(showMoreModal.type as string).map((item, index) => (
                <div key={index} className={`card ${item.top ? 'card-top' : ''}`} onClick={() => { setSelectedItem(item); setShowMoreModal({ type: null, show: false }); }}>
                  {item.top && <div className="top-tag">置顶</div>}
                  <div className="card-title">{item.title}</div>
                  <div className="card-info">
                    <span className={`tag tag-${item.type}`}>{typeMap[item.type as keyof typeof typeMap].name}</span>
                    <span>{item.time}</span>
                  </div>
                  <div className="card-btn">查看详情</div>
                </div>
              ))}
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
        .container{max-width:1200px;margin:0 auto}
        
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

        /* ====================== 新增：滚动公告栏样式 ====================== */
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
        
        .search{text-align:center;margin-bottom:25px}
        .search input{
          width:90%;max-width:500px;padding:14px 20px;
          border-radius:30px;border:none;outline:none;
          background:rgba(255,255,255,0.95);
        }
        .columns{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}
        .col{
          background:#ffffff !important;
          border-radius:16px;padding:22px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
        }
        .col-header{
          display:flex;justify-content:space-between;align-items:center;
          margin-bottom:18px;
        }
        .col-title{
          font-size:18px;font-weight:bold;color:#222;
        }
        .more-btn{
          font-size:14px;color:#4f46e5;font-weight:bold;
          background:none;border:none;cursor:pointer;
        }
        .more-btn:hover{text-decoration:underline;}
        /* 置顶卡片样式 */
        .card{
          background:#f9fafb;
          border-radius:12px;padding:16px;
          margin-bottom:10px;cursor:pointer;
          position:relative;
        }
        .card-top{
          border:2px solid #ff6b6b !important;
          background:#fff5f5 !important;
        }
        .top-tag{
          position:absolute;top:8px;right:8px;
          background:#ff6b6b;color:#fff;
          font-size:12px;padding:2px 6px;border-radius:4px;
        }
        .card-title{font-weight:bold;margin-bottom:8px}
        .card-info{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#666;margin-bottom:10px}
        
        .tag{padding:4px 10px;border-radius:8px;color:#fff;font-size:12px;font-weight:bold}
        .tag-app{background:#3b82f6}
        .tag-ai{background:#8b5cf6}
        .tag-side{background:#10b981}
        
        .card-btn{
          background:#4f46e5;color:#fff;
          text-align:center;padding:8px;border-radius:8px;font-size:13px;font-weight:bold;
        }
        /* 弹窗 */
        .modal{
          position:fixed;top:0;left:0;width:100%;height:100%;
          background:rgba(0,0,0,0.7);z-index:999;
          display:flex;justify-content:center;align-items:center;
        }
        .modal-content{
          background:#fff;border-radius:20px;padding:30px;
          max-width:700px;width:90%;position:relative;
          max-height:80vh;overflow-y:auto;
        }
        .close-btn{
          position:absolute;top:15px;right:15px;font-size:24px;
          cursor:pointer;color:#666;
        }
        .modal-title{
          font-size:28px;font-weight:bold;
          background:linear-gradient(90deg,#4f46e5,#7c3aed,#8b5cf6);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          margin-bottom:15px;
        }
        .modal-info{
          display:flex;gap:15px;margin-bottom:20px;color:#666;font-size:14px
        }
        .modal-desc{
          line-height:1.7;color:#333;margin-bottom:25px
        }
        .modal-btn{
          display:block;background:linear-gradient(135deg,#4f46e5,#7c3aed);
          color:#fff;text-align:center;padding:15px;border-radius:12px;
          text-decoration:none;font-weight:bold;font-size:16px;
        }
        @media(max-width:900px){.columns{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}
