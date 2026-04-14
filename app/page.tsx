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
    
    /* 排序按钮 */
    .sort{display:flex;justify-content:center;gap:10px;margin-bottom:25px}
    .sort button{
      padding:10px 18px;border-radius:20px;border:none;
      background:rgba(255,255,255,0.9);cursor:pointer;
      font-size:14px;font-weight:bold;
    }
    .sort button.active{background:#4f46e5;color:#fff}
    
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
    
    <!-- 排序按钮 -->
    <div class="sort">
      <button id="sortTime" class="active">最新</button>
      <button id="sortName">名称</button>
    </div>
    
    <!-- 三列布局 -->
    <div class="columns">
      <!-- 第一列：破解软件 -->
      <div class="col">
        <h2 class="col-title">📱 破解软件</h2>
        <div id="appList">
          <a href="#" class="card">
            <div class="card-title">抖音破解版无水印</div>
            <div class="card-info">
              <span class="tag tag-app">软件工具</span>
              <span>2026-04-14</span>
            </div>
            <div class="card-btn">查看详情</div>
          </a>
          <a href="#" class="card">
            <div class="card-title">PS 2025 永久激活版</div>
            <div class="card-info">
              <span class="tag tag-app">软件工具</span>
              <span>2026-04-11</span>
            </div>
            <div class="card-btn">查看详情</div>
          </a>
        </div>
      </div>
      
      <!-- 第二列：AI教程 -->
      <div class="col">
        <h2 class="col-title">🤖 AI教程</h2>
        <div id="aiList">
          <a href="#" class="card">
            <div class="card-title">2026AI私教实战课：从AI原理到全场景实操</div>
            <div class="card-info">
              <span class="tag tag-ai">AI教程</span>
              <span>2026-04-15</span>
            </div>
            <div class="card-btn">查看详情</div>
          </a>
          <a href="#" class="card">
            <div class="card-title">ChatGPT 4o 使用教程</div>
            <div class="card-info">
              <span class="tag tag-ai">AI教程</span>
              <span>2026-04-13</span>
            </div>
            <div class="card-btn">查看详情</div>
          </a>
        </div>
      </div>
      
      <!-- 第三列：副业项目 -->
      <div class="col">
        <h2 class="col-title">💰 副业项目</h2>
        <div id="sideList">
          <a href="#" class="card">
            <div class="card-title">小红书副业变现课</div>
            <div class="card-info">
              <span class="tag tag-side">副业项目</span>
              <span>2026-04-12</span>
            </div>
            <div class="card-btn">查看详情</div>
          </a>
          <a href="#" class="card">
            <div class="card-title">闲鱼无货源赚钱课</div>
            <div class="card-info">
              <span class="tag tag-side">副业项目</span>
              <span>2026-04-09</span>
            </div>
            <div class="card-btn">查看详情</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- 原生JS：搜索+排序功能 -->
  <script>
    // 资源数据
    const resources = [
      {title:"2026AI私教实战课：从AI原理到全场景实操",type:"ai",time:"2026-04-15"},
      {title:"抖音破解版无水印",type:"app",time:"2026-04-14"},
      {title:"ChatGPT 4o 使用教程",type:"ai",time:"2026-04-13"},
      {title:"小红书副业变现课",type:"side",time:"2026-04-12"},
      {title:"PS 2025 永久激活版",type:"app",time:"2026-04-11"},
      {title:"闲鱼无货源赚钱课",type:"side",time:"2026-04-09"},
    ];

    // 渲染函数
    function renderList(list, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = list.map(item => `
        <a href="#" class="card">
          <div class="card-title">${item.title}</div>
          <div class="card-info">
            <span class="tag tag-${item.type}">${item.type === 'app' ? '软件工具' : item.type === 'ai' ? 'AI教程' : '副业项目'}</span>
            <span>${item.time}</span>
          </div>
          <div class="card-btn">查看详情</div>
        </a>
      `).join('');
    }

    // 排序功能
    let currentSort = 'time';
    document.getElementById('sortTime').addEventListener('click', () => {
      currentSort = 'time';
      document.getElementById('sortTime').classList.add('active');
      document.getElementById('sortName').classList.remove('active');
      updateAllLists();
    });
    document.getElementById('sortName').addEventListener('click', () => {
      currentSort = 'name';
      document.getElementById('sortName').classList.add('active');
      document.getElementById('sortTime').classList.remove('active');
      updateAllLists();
    });

    // 搜索功能
    document.getElementById('searchInput').addEventListener('input', (e) => {
      const keyword = e.target.value;
      updateAllLists(keyword);
    });

    // 更新所有列表
    function updateAllLists(keyword = '') {
      // 筛选+排序
      const filtered = resources.filter(item => 
        item.title.includes(keyword)
      );
      const sorted = [...filtered].sort((a, b) => {
        if (currentSort === 'time') {
          return new Date(b.time).getTime() - new Date(a.time).getTime();
        } else {
          return a.title.localeCompare(b.title, 'zh-CN');
        }
      });

      // 分类渲染
      const appList = sorted.filter(item => item.type === 'app');
      const aiList = sorted.filter(item => item.type === 'ai');
      const sideList = sorted.filter(item => item.type === 'side');

      renderList(appList, 'appList');
      renderList(aiList, 'aiList');
      renderList(sideList, 'sideList');
    }

    // 初始渲染
    updateAllLists();
  </script>
</body>
</html>
