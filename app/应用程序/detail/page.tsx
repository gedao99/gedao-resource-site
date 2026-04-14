'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// 资源数据（和首页完全一致，直接复制）
const resources = [
  {
    title: "2026AI私教实战课：从AI原理到全场景实操",
    type: "ai",
    time: "2026-04-15",
    linkUrl: "https://pan.quark.cn/s/3dedc19b4aa6",
    desc: "零基础从AI原理到全场景实操，学会用AI提效+单人创业，包含全套工具+案例+变现方法，新手可直接上手。"
  },
  {
    title: "抖音破解版无水印",
    type: "app",
    time: "2026-04-14",
    linkUrl: "https://你的链接",
    desc: "去广告、无水印下载、支持高清解析、自动跳过限制，安卓/iOS双端可用，永久更新。"
  },
  {
    title: "ChatGPT 4o 使用教程",
    type: "ai",
    time: "2026-04-13",
    linkUrl: "https://你的链接",
    desc: "最新4o模型使用技巧、提示词模板、多模态用法、常见问题解决，从入门到精通一站式教程。"
  },
  {
    title: "小红书副业变现课",
    type: "side",
    time: "2026-04-12",
    linkUrl: "https://你的链接",
    desc: "0粉起号、选品、文案、流量、接单变现全流程，新手可直接复制，7天起号，月入5000+。"
  },
  {
    title: "PS 2025 永久激活版",
    type: "app",
    time: "2026-04-11",
    linkUrl: "https://你的链接",
    desc: "完整插件、无广告、永久使用，支持Win/Mac，一键安装，终身免费更新。"
  },
  {
    title: "闲鱼无货源赚钱课",
    type: "side",
    time: "2026-04-09",
    linkUrl: "https://你的链接",
    desc: "不用囤货，一部手机就能做，选品、上架、出单全流程，小白零成本创业。"
  },
];

export default function DetailPage() {
  const search = useSearchParams();
  const title = search.get('title');
  const item = resources.find(r => r.title === title);

  if (!item) {
    return (
      <div className="page">
        <div className="box">
          <Link href="/" className="back">← 返回首页</Link>
          <h1>资源不存在</h1>
        </div>
      </div>
    );
  }

  const typeName = {
    app: "📱 破解软件",
    ai: "🤖 AI教程",
    side: "💰 副业项目"
  }[item.type];

  return (
    <div className="page">
      <div className="box">
        <Link href="/" className="back">← 返回首页</Link>
        <h1 className="title">{item.title}</h1>
        <div className="info">
          <span className="type">{typeName}</span>
          <span className="time">更新时间：{item.time}</span>
        </div>
        <div className="desc">
          <h3>资源介绍</h3>
          <p>{item.desc}</p>
        </div>
        <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="btn">
          🔗 立即转存 / 下载
        </a>
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
          padding:30px 15px;
        }
        .box{
          max-width:700px;margin:0 auto;background:#fff;border-radius:20px;padding:30px;
          box-shadow:0 8px 32px rgba(0,0,0,0.1);
        }
        .back{display:inline-block;margin-bottom:20px;color:#4f46e5;text-decoration:none;font-weight:bold}
        .title{
          font-size:28px;margin-bottom:15px;
          background:linear-gradient(90deg,#4f46e5,#7c3aed,#8b5cf6);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        .info{display:flex;gap:15px;margin-bottom:20px;color:#666;font-size:14px}
        .type{padding:4px 10px;border-radius:8px;color:#fff;font-weight:bold}
        .type.app{background:#3b82f6}
        .type.ai{background:#8b5cf6}
        .type.side{background:#10b981}
        .desc{margin:25px 0}
        .desc h3{margin-bottom:10px;color:#333}
        .desc p{line-height:1.7;color:#666}
        .btn{
          display:block;background:linear-gradient(135deg,#4f46e5,#7c3aed);
          color:#fff;text-align:center;padding:15px;border-radius:12px;
          text-decoration:none;font-weight:bold;font-size:16px;
        }
      `}</style>
    </div>
  );
}
