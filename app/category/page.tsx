'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// 资源数据（和首页完全一致，直接复制）
const resources = [
  {title: "2026AI私教实战课：从AI原理到全场景实操",type: "ai",time: "2026-04-15"},
  {title: "抖音破解版无水印",type: "app",time: "2026-04-14"},
  {title: "ChatGPT 4o 使用教程",type: "ai",time: "2026-04-13"},
  {title: "小红书副业变现课",type: "side",time: "2026-04-12"},
  {title: "PS 2025 永久激活版",type: "app",time: "2026-04-11"},
  {title: "闲鱼无货源赚钱课",type: "side",time: "2026-04-09"},
];

export default function CategoryPage() {
  const search = useSearchParams();
  const type = search.get('type');
  const list = resources.filter(r => r.type === type);

  const typeInfo = {
    app: {name: "📱 破解软件 全部资源", color: "#3b82f6"},
    ai: {name: "🤖 AI教程 全部资源", color: "#8b5cf6"},
    side: {name: "💰 副业项目 全部资源", color: "#10b981"}
  }[type || ''];

  if (!typeInfo) {
    return (
      <div className="page">
        <div className="box">
          <Link href="/" className="back">← 返回首页</Link>
          <h1>分类不存在</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="box">
        <Link href="/" className="back">← 返回首页</Link>
        <h1 className="title">{typeInfo.name}</h1>
        <div className="list">
          {list.map(item => (
            <Link href={`/detail?title=${encodeURIComponent(item.title)}`} key={item.title} className="item">
              <div className="item-title">{item.title}</div>
              <div className="item-time">{item.time}</div>
            </Link>
          ))}
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
          padding:30px 15px;
        }
        .box{
          max-width:800px;margin:0 auto;background:#fff;border-radius:20px;padding:30px;
          box-shadow:0 8px 32px rgba(0,0,0,0.1);
        }
        .back{display:inline-block;margin-bottom:20px;color:#4f46e5;text-decoration:none;font-weight:bold}
        .title{
          font-size:28px;margin-bottom:25px;
          background:linear-gradient(90deg,#4f46e5,#7c3aed,#8b5cf6);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        .item{
          display:flex;justify-content:space-between;align-items:center;
          padding:15px;border-bottom:1px solid #eee;text-decoration:none;color:#333;
        }
        .item-title{font-weight:bold}
        .item-time{color:#666;font-size:14px}
      `}</style>
    </div>
  );
}
