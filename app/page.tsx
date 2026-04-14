<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>格道资源站</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box;font-family:Microsoft Yahei}
    body{
      background:url('https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/cd457466542c42bab2095994e3f29e02.jpeg~tplv-a9rns2rl98-image_dld_watermark_1_6b.png?lk3s=8e244e95&rcl=20260415045342E70F294401205B79CB5A&rrcfp=e875b5a5&x-expires=2091560024&x-signature=W1W6iw%2Balw6D%2F1rhf306nPtxvC0%3D') no-repeat center center fixed;
      background-size:cover;
      min-height:100vh;
      padding:30px 15px;
    }
    .container{max-width:1200px;margin:0 auto}
    
    /* 标题：AI渐变，无图标 */
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
    
    /* 搜索框 */
    .search{text-align:center;margin-bottom:25px}
    .search input{
      width:90%;max-width:500px;padding:14px 20px;
      border-radius:30px;border:none;outline:none;
      background:rgba(255,255,255,0.95);
      font-size:16px;
    }
    
    /* 三列布局：纯白色背景 */
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
    
    /* 资源卡片 */
    .card{
      background:#f9fafb;
      border-radius:12px;padding:16px;
      margin-bottom:10px;display:block;text-decoration:none;color:#222;
      cursor:pointer;
    }
    .card-title{font-weight:bold;margin-bottom:8px;font-size:16px}
    .card-info{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#666;margin-bottom:10px}
    
    /* 分类标签：对应你要的图标风格 */
    .tag{padding:4px 10px;border-radius:8px;color:#fff;font-size:12px;font-weight:bold}
    .tag-app{background:#3b82f6} /* 软件：蓝色 */
    .tag-ai{background:#8b5cf6}  /* AI：紫色 */
    .tag-side{background:#10b981} /* 副业：绿色 */
    
    .card-btn{
      background:#4f46e5;color:#fff;
      text-align:center;padding:8px;border-radius:8px;font-size:13px;font-weight:bold;
    }
    
    /* 详情页样式（点击卡片弹出） */
    .modal{
      display:none;
      position:fixed;
      top:0;left:0;
      width:100%;height:100%;
      background:rgba(0,0,0,0.7);
      z-index:999;
      justify-content:center;
      align-items:center;
    }
    .modal-content{
      background:#fff;
      border-radius:20px;
      padding:30px;
      max-width:700px;
      width:90%;
      position:relative;
    }
    .close-btn{
      position:absolute;
      top:15px;right:15px;
      font-size:24px;
      cursor:pointer;
      color:#666;
    }
    .modal-title{
      font-size:28px;
      font-weight:bold;
      background:linear-gradient(90deg,#4f46e5,#7c3aed,#8b5cf6);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
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

    /* 响应式：手机端变单列 */
    @media(max-width:900px){.columns{grid-template-columns:1fr}}
  </style>
</head>
<body>
  <div class="container">
    <!-- 标题 -->
    <div class="title">
      <h1>格道资源站</h1>
      <p>精品软件 | AI教程 | 副业项目</p>
    </div>
    
    <!-- 搜索框 -->
    <div class="search">
      <input type="text" id="searchInput" placeholder="🔍 搜索资源...">
    </div>
    
    <!-- 三列布局 -->
    <div class="columns">
      <!-- 第一列：破解软件 -->
      <div class="col">
        <h2 class="col-title">📱 破解软件</h2>
        <div id="appList">
          <div class="card" data-id="0">
            <div class="card-title">抖音破解版无水印</div>
            <div class="card-info">
              <span class="tag tag-app">软件工具</span>
              <span>2026-04-14</span>
            </div>
            <div class="card-btn">查看详情</div>
          </div>
          <div class="card" data-id="1">
            <div class="card-title">PS 2025 永久激活版</div>
            <div class="card-info">
              <span class="tag tag-app">软件工具</span>
              <span>2026-04-11</span>
            </div>
            <div class="card-btn">查看详情</div>
          </div>
        </div>
      </div>
      
      <!-- 第二列：AI教程 -->
      <div class="col">
        <h2 class="col-title">🤖 AI教程</h2>
        <div id="aiList">
          <div class="card" data-id="2">
            <div class="card-title">2026AI私教实战课：从AI原理到全场景实操</div>
            <div class="card-info">
              <span class="tag tag-ai">AI教程</span>
              <span>2026-04-15</span>
            </div>
            <div class="card-btn">查看详情</div>
          </div>
          <div class="card" data-id="3">
            <div class="card-title">ChatGPT 4o 使用教程</div>
            <div class="card-info">
              <span class="tag tag-ai">AI教程</span>
              <span>2026-04-13</span>
            </div>
            <div class="card-btn">查看详情</div>
          </div>
        </div>
      </div>
      
      <!-- 第三列：副业项目 -->
      <div class="col">
        <h2 class="col-title">💰 副业项目</h2>
        <div id="sideList">
          <div class="card" data-id="4">
            <div class="card-title">小红书副业变现课</div>
            <div class="card-info">
              <span class="tag tag-side">副业项目</span>
              <span>2026-04-12</span>
            </div>
            <div class="card-btn">查看详情</div>
          </div>
          <div class="card" data-id="5">
            <div class="card-title">闲鱼无货源赚钱课</div>
            <div class="card-info">
              <span class="tag tag-side">副业项目</span>
              <span>2026-04-09</span>
            </div>
            <div class="card-btn">查看详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 详情弹窗 -->
  <div class="modal" id="detailModal">
    <div class="modal-content">
      <span class="close-btn" id="closeModal">&times;</span>
      <h1 class="modal-title" id="modalTitle"></h1>
      <div class="modal-info">
        <span id="modalType"></span>
        <span id="modalTime"></span>
      </div>
      <div class="modal-desc" id="modalDesc"></div>
      <a href="#" class="modal-btn" id="modalLink" target="_blank">🔗 立即转存 / 下载</a>
    </div>
  </div>

  <!-- 原生JS：搜索+详情弹窗功能 -->
  <script>
    // 资源数据（和首页完全一致）
    const resources = [
      {
        title: "抖音破解版无水印",
        type: "app",
        time: "2026-04-14",
        linkUrl: "https://你的链接",
        desc: "去广告、无水印下载、支持高清解析、自动跳过限制，安卓/iOS双端可用，永久更新。"
      },
      {
        title: "PS 2025 永久激活版",
        type: "app",
        time: "2026-04-11",
        linkUrl: "https://你的链接",
        desc: "完整插件、无广告、永久使用，支持Win/Mac，一键安装，终身免费更新。"
      },
      {
        title: "2026AI私教实战课：从AI原理到全场景实操",
        type: "ai",
        time: "2026-04-15",
        linkUrl: "https://pan.quark.cn/s/3dedc19b4aa6",
        desc: "零基础从AI原理到全场景实操，学会用AI提效+单人创业，包含全套工具+案例+变现方法，新手可直接上手。"
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
        title: "闲鱼无货源赚钱课",
        type: "side",
        time: "2026-04-09",
        linkUrl: "https://你的链接",
        desc: "不用囤货，一部手机就能做，选品、上架、出单全流程，小白零成本创业。"
      },
    ];

    // 分类类型映射
    const typeMap = {
      app: "📱 软件工具",
      ai: "🤖 AI教程",
      side: "💰 副业项目"
    };

    // 弹窗元素
    const modal = document.getElementById('detailModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalType = document.getElementById('modalType');
    const modalTime = document.getElementById('modalTime');
    const modalDesc = document.getElementById('modalDesc');
    const modalLink = document.getElementById('modalLink');

    // 打开详情弹窗
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const item = resources[id];
        modalTitle.textContent = item.title;
        modalType.textContent = typeMap[item.type];
        modalTime.textContent = `更新时间：${item.time}`;
        modalDesc.textContent = item.desc;
        modalLink.href = item.linkUrl;
        modal.style.display = 'flex';
      });
    });

    // 关闭弹窗
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });

    // 搜索功能
    document.getElementById('searchInput').addEventListener('input', (e) => {
      const keyword = e.target.value.toLowerCase();
      document.querySelectorAll('.card').forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        card.style.display = title.includes(keyword) ? 'block' : 'none';
      });
    });
  </script>
</body>
</html>
