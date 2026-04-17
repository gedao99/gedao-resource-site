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
  title: "小说加写作训练营，带你分析如何在当下脱颖而出，开启你的职业创作之路",
  type: "side",
  time: "2026-04-16",
  linkUrl: "https://pan.baidu.com/s/17OJC5vE9QqWbJr0xVfyIkA?pwd=h2tk",
  desc: "【课程介绍】当下小说创作赛道竞争激烈，海量作品扎堆，想脱颖而出、实现从爱好到职业的跨越，仅凭一腔热情远远不够。我们的小说写作训练营，专为渴望深耕创作、打造个人IP的创作者量身打造，带你跳出盲目写作的误区，精准掌握职业创作的核心逻辑。在这里，我们不堆砌空洞理论，而是聚焦当下读者喜好与市场需求，拆解爆款小说的叙事技巧、人物塑造、节奏把控，从选题立意到情节打磨，从语言润色到投稿变现，每一个环节都有专业导师手把手指导。无论你是零基础小白，还是有一定基础却陷入瓶颈的写作者，都能在这里找到精准定位，突破创作瓶颈，学会用专业方法打造有记忆点、有传播力的作品。训练营更提供专属资源对接、作品打磨反馈、同行交流社群，助力你打通职业创作的每一步，从提笔写作到实现变现，真正开启属于你的职业创作之路，在千军万马的创作浪潮中抢占先机、脱颖而出。",
  top: false,
},
{
  title: "TikTok 多平台 APP 拉新，完整流程教学，新手也能上手",
  type: "side",
  time: "2026-04-16",
  linkUrl: "https://pan.baidu.com/s/19qeBr7P7mbgO8UPqpHgEMg?pwd=h2tk",
  desc: "【项目介绍】你有没有发现：国内互联网已经卷成红海，刷视频、做副业、抢流量，累死累活赚点辛苦钱；而海外，尤其TikTok生态，还在野蛮生长、遍地是机会。不用露脸、不用直播、不用囤货、不用外语很好。会套模板、会加字幕、会挂锚点，就能干。很多人看不起“拉新”，觉得low、觉得不长久。但真相是：稳定、合法、官方结算、不扣量、长期有单的项目，才是普通人最该抓的。你以为的高大上，大多是割韭菜；你看不起的小项目，别人悄悄日入几千。别再内耗：想赚钱，就别纠结面子、别害怕新手、别等“准备好”。环境搭好、账号养好、模板套好、文案写好、发出去——干就完了，数据会说话。海外的钱，真的很好赚：用户好奇、平台宽容、佣金高、竞争小。你在国内刷抖音消磨时间，别人在TikTok发同款视频赚美金。认知差，就是最大的信息差；行动差，就是最大的贫富差。不用羡慕别人日入几千。你缺的不是能力，不是资源，不是运气——你缺的是一次跳出舒适区、看懂海外流量、立刻动手的勇气。从今天起：关掉无效社交，少刷无用视频。花一周把TK拉新流程跑通、账号跑顺。下个月，你会感谢现在果断的自己。海外TK，不内耗、不将就、只搞钱。愿你抓住这波红利，把时间换成美金，把流量变成收入。",
  top: false,
},
{
  title: "抖音10W粉丝的AI脱口秀教学，普通人也能上手的AI短视频项目，5分钟学会，撸伙伴计划收益",
  type: "side",
  time: "2026-04-16",
  linkUrl: "https://pan.baidu.com/s/1-bUQWuW1gQmEn65ClfHc1A?pwd=h2tk",
  desc: "【项目介绍】很多人以为做短视频，难在不会拍、不会剪、不会出镜。但这个项目，刚好把这3个问题都绕开了。你不用真人出镜，不用复杂拍摄，一台电脑，3个工具就够：豆包、即梦、剪映。而且这类内容为什么容易起量？因为它天然符合平台喜欢的东西：有情绪，有观点，有节奏，还有评论区互动感。所以它的本质，不是“AI整活”。而是：把高互动内容，做成一条可以批量复制的流水线。这个项目为什么值得看？我先讲结论：这类项目最适合普通人的地方，不是暴利，而是低门槛、可复制、容易批量。很多项目听起来很賺钱，但你一看流程就知道，不适合大多数人。要么要真人出镜，要么要强表达能力，要么要团队配合。但AI脱口秀不一样。它把内容拆成了几个模块：文案、配音、画面、剪辑。每一步都可以用工具完成。也就是说，你做的不是传统创作，而是在搭一条内容生产线。这就很重要。因为真正能賺钱的项目，拼的从来不是你偶尔做出一个爆款。而是：你能不能把一个有效动作，重复做100次。",
  top: false,
},
{
  title: "AI爆火古风养生赛道，日收益1000+ 单条作品点赞破万+，可矩阵多号操作",
  type: "side",
  time: "2026-04-16",
  linkUrl: "https://pan.baidu.com/s/1-AuDYyt69z_UyUslxybsqg?pwd=h2tk",
  desc: "【项目介绍】当下养生赛道迎来全新风口——AI+古风吐槽式养生，打破传统养生内容的枯燥说教，以“老祖宗的智慧+年轻人的吐槽”模式，快速引爆流量，轻松实现日收益1000+，单条作品点赞破万+，零门槛适配小白，可批量创作、矩阵多号放大收益，新手也能快速起号变现。精准直击当代年轻人核心痛点：生活压力、工作内耗叠加，熬夜、暴饮暴食、久坐不动成为常态，脱发、气血不足、颈椎不适、内分泌紊乱等问题频发，年轻人既焦虑又渴望简单有效的养生方式，却抵触生硬的健康说教。而我们的项目，正是抓住这一核心需求，用另类吐槽的呈现形式，搭配古风元素，戳中年轻人的情绪共鸣点，让养生内容不再枯燥，自带流量属性。",
  top: false,
},
        {
  title: "AnyPlay(万能视频音频播放器)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/5fb3836b94e0",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AppLock PRO(应用锁)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/6fa0eba99ccb",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱其意(影视)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/de5657beabf6",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "傲软抠图",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d4823ccb6962",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AR拍照翻译器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/ae5f973dc718",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "傲软投屏",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/a27c0679c150",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Ask AI(支持GPT4o、claude、GeminiPro)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/b2a44c022be8",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱扫描",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/3e4b85fb823d",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱听书",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/22115eb95d21",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Audio Editor(专业音频编辑)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/289127f01784",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AutoCMD+",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/47f5321920f2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "安心计件",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/8e77b3343391",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "安心记加班",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/311a2a58f1b7",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱影视(爱电影)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/5466218ca05f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱颜相机",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/60a590d867c9",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AZ Screen Recorder(专业录屏)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/80f170af104a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "安卓清理君",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/2790541e04b6",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "B612咔叽",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/02b9c6fdb7df",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Background Eraser - 抠图软件",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/92c76abe7a5a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "帮帮字幕翻译",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/6ace3cd52886",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "百度贴吧",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/f24f98c0b1ca",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "哔嘀影视",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d1a29ba45655",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "BeautyPlus(美颜相机)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/794152f3db0a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "布谷鸟配音",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/01e9442bdb7b",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "薄荷记账",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/6ff0e5033cde",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "薄荷下载",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/8acfe11d5119",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "biubiu加速器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d30efbc64fd2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "布蕾4K",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/73bea733bdee",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "哔哩哔哩",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/a3c5b0bdc190",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Blurrr(视频剪辑)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/5de30d132c7d",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "贝利自动点击器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/fca0907315a1",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "比目视频",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/10fdaaa1e223",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "比漫熊",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/9f8e2f7da8e3",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Body Editor(美颜修图)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/82a934143965",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "笔趣阁",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/18864908628f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "笔趣书阁(多源小说漫画)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/52ee6557a3a8",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "白蛇影视",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/10a03af7c2d0",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "冰箱",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/a158272c8675",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "冰箱 IceBox：自动冻结・省电神器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/7903e9c4980c",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "边缘视频",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/11e89669fce8",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
    {
  title: "(隐私)计算器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/b9fc3b93509f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "4K剧下饭(原剧下饭、剧永久)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/94b943e94e5e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "15日天气预报",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/1e4d9c565983",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "23影视4K",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/9f86a2771b48",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "30天内练出六块腹肌",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/81cde53f00e4",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "99手游加速器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/5c2937fe058e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "123动漫（原咖啡4k、DUOFUN）",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/c653312f474b",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "123云盘",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/11e82a10ff81",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "365日历",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/46b7290ef1f2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "777影视",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/b2388112d3b6",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱笔思画X",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/fe72e3aa316f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "阿柴记账",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/2336df87bb9a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "A次元(动漫)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/69e4721147f4",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AdGuard(拦截广告神器)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/4bdd03563bab",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Adobe Photoshop Express(PS手机版)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/90a4d9745fc6",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱读小说",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d190d62c65f5",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱电影",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/37550b16a8f0",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AE特效视频片头大师APP",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/aa9626ea684c",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AH视频",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/0e680235067a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI Enhancer(AI图片增强)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/3d14e903faf2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI Photo Enhancer(图片视频画质修复增强)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/54ad4c473840",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI Photo(AI照片生成器)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/c6810fe06da6",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI PPT",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/b7ae9e758369",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI Retouch - 移除杂物(AI抠图绘图画质修复)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/3d580ee1f1a3",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI Video Enhancer(AI视频增强修复)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/c4b6981bb8a9",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI绘画大师",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/f4004228fa7c",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AirBrush(AI修图、图片视频修复)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/3bfe9b53a5b4",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI特效相机",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/c25796b2f29c",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI万能写作",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/831fdc34f369",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI网盘搜索",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/fbb9c4ad27d2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI写作助手",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/4b2683389ab2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI智绘",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/e435cfc35615",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI助手",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/3252e1bf5850",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱剪辑",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/a73ee1d6bae5",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱看剧场",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/711aa86730b3",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱看剧Fax(原追忆影视)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/bb329612fea8",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱看影视",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/44577488cdb7",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Al ChatBot(AI聊天)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d6e1fd1a4303",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Alarm Clock Xtreme(终极闹钟)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/091f637b93f5",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Anti-recall(防撤回)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/1a51bfcf3d78",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
    {
  title: "微商视频助手",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/44d3eea7a33f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "微商侠",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/b4751959e0bc",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "微商助手",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/fc04d3aea67e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "微商作图",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/f273a193efd3",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "无痛单词",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/50866149430c",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "无他相机",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/9a1bb9b02d12",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "哇哇影视",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/79ba605266bd",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万兴喵影",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/776b3fb33257",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万兴PDF",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/0b3829bb9657",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "外星人加速器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/07c21284fcd1",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万象小组件",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/2c4af6ac4608",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "外语翻译官",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/99bc84bf9d22",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "我要做计划",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/da93d11ee237",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "问真八字",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/b073e4ca6ae3",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "文字朗读神器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/7ef853f6a2f4",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "文字提取大师",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/3ac5c283e08f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "文字转语音配音软件",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/7753424d94db",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小6加速器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/52f5f2102157",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小白录屏",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/6185cb4412dc",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "新笔趣阁",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/062b7d15a983",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "雪豹视频",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/3004068fa757",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "新版摘星",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/c8dd5c8f924e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "XCast - 投屏大师",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/6fbea85336e2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "下厨房",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/b1c2c3278556",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小触控",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/285df28a767e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小草视频",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/7339a74fd654",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小豆视界",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/0a137389f99e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "心动视界4K",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/e1501fb10aee",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "西饭短剧",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/720405942302",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "稀饭动漫",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d797b39bca6c",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "喜番免费短剧",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/2c0b1ec65a79",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "讯飞输入法",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/f529e1f8765d",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小肥羊漫画",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/7b6d9cdb7430",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "修改牛水印相机",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/c9f3a3e69018",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "修改水印相机",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/616531b9e39b",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小狐狸(影视)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/92fda71fff01",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "星绘漫",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d852e3ff5a81",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小黑猫漫画",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/289c4a43cf9a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小黄人(影视)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/dded8c0d6885",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小红书",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/7ae47cc00352",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "XRecorder(专业录屏)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/8f25b6219e65",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小时工记账",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/c416e20627eb",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小柿子(影视)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/280e3b42a900",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "醒图",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/0cc4113b720d",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "修图君抠图P图大师",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/30b0e1d579ae",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小歪微商",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/13fa3fca7d0d",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小X分身",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/5df25d2ba027",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小习惯",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/ce3b4dadfbea",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小熊录屏",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/8dfaf948fa17",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小熊猫(影视)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/917b99ddc6cb",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "消息群发",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/dfccdc642dde",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小熊视频FAN",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/a84927137df2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小熊文件工具箱",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/2267c17e6b9a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "西西小屋",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/6c2d1b78b68a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小熊影视",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/6ec3fb538daa",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小小追书",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d934229ff390",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "型影",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/f36537bf96dd",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小影",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/fd1ef3093fa2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小羊4K",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/078fc9fa162f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "咸鱼4K(看世界新版)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/908b23bf7ea0",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万能空调遥控器",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/7932c8b2965f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万年历",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/bb4ef0d295fb",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万年历(2)",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/856e076d4ee1",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万年历黄历",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/67c4f5975192",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万能水印相机打卡",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/41f3340eae22",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万能钥匙",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/3b1bcb4bd76a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "WPS Office",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/9809f4baa431",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "微商大师",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/885c1da74cdf",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "微商管家",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/28f45143db6b",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "微商工具箱",
  type: "app",
  time: "2026-04-16",
  linkUrl: "https://pan.quark.cn/s/d82c4dfd92f5",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
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
    app: { name: "📱 破解版app" },
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
          <p>破解版app | AI教程 | 副业项目</p>
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
