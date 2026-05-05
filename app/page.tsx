'use client';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showMoreModal, setShowMoreModal] = useState<{ type: string | null; show: boolean }>({ type: null, show: false });
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  // 新增：导航栏滑动引用
  const tabScrollRef = useRef<HTMLDivElement>(null);

  // 点击箭头 → 自动向右滑动导航
  const handleSlideRight = () => {
    if (tabScrollRef.current) {
      tabScrollRef.current.scrollBy({
        left: 220, // 滑动距离（刚好切到下一个导航）
        behavior: 'smooth' // 丝滑滑动
      });
    }
  };

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
      title: "零界绘(酷漫熊漫天星系列)",
      type: "book",
      originType: "app",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/76a8f745c4bb",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "漫屿漫画",
      type: "book",
      originType: "app",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/c453591f5da2",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "双子星动漫",
      type: "book",
      originType: "app",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/81136b1c3bd2",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "追片喵4K",
      type: "video",
      originType: "app",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/3c65be82c0db",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "【推荐】漫小社",
      type: "book",
      originType: "app",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/7f3fcf4093b5",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "AI+电商实战课，1人+N个AI 智能体，把SOP变AI员工，实现降本增效提高利润",
      type: "ai",
      originType: "ai",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/b9980d77515f",
      desc: "为什么很多人天天在用AI，却始终没跑出结果？为什么未来电商标准配置是1个人+N个AI智能体？中台岗位哪些动作已被AI接管？怎么把岗位经验+SOP，拆成AI可执行的能力？",
      top: false,
    },
    {
      title: "AI教育新风口，AI自动生成PPT，月入2W+，无脑赚，告别打工",
      type: "side",
      originType: "side",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/7d6caec02cf7",
      desc: "AI做微课，不用露脸、不用求人，接一单赚一单！啥是微课？就是老师、医生、公务员他们工作需要的教学视频、PPT课件。这些人忙得很，自己没时间做，就花钱找人做。一单起步300-800块，熟练了一天能出两单，比写文章轻松多了。",
      top: false,
    },
    {
      title: "AI+精准控图全流程教学 豆包关键词+PS色块分区+即梦合成搞定电商高级摄影图",
      type: "ai",
      originType: "ai",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/d0ca8f8babde",
      desc: "课程内容简介：本课程完整讲解AI精准控图全流程，手把手教学运用豆包生成画面描述与关键词、PS色块分区分色稿制作、即梦工具合成控图等核心技法。",
      top: false,
    },
    {
      title: "AIGC 电商设计课 教你 C4D 建模 + OC 渲染 + 即梦场景生成 高效搞定精华水设计",
      type: "ai",
      originType: "ai",
      time: "2026-05-06",
      linkUrl: "https://pan.quark.cn/s/eac589476ec9",
      desc: "课程内容简介：本课程是专属 AIGC 电商设计课，以清爽精华水为实操案例，深度拆解 C4D 建模全流程，结合 OC 渲染与即梦工具，教你快速生成电商场景。",
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
      title: "Omofun(动漫)",
      type: "book",
      originType: "app",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/1acfbaa08d84",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "青漫(漫画)",
      type: "book",
      originType: "app",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/b2f7b1523c39",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "学《叙事的科学》= 拍爆款片 + 接大牌客户？26 节课 + AI 助手直接送！",
      type: "side",
      originType: "side",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/acfbfd02fb6f",
      desc: "内容大纲：本课程为您提供一套完整的工具包、即用型模板与分步实操指南，助您打造令人难忘的影像作品，赢得更优质的客户，在竞争激烈的市场中脱颖而出。",
      top: false,
    },
    {
      title: "AI动画电影制作实战：豆包+即梦+Vidu+MINIMAX，从脚本到成片零基础入门(附素材+软件)",
      type: "ai",
      originType: "ai",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/59af643d51fe",
      desc: "课程内容简介：本先导课聚焦AI电影动画全流程入门，联合豆包AI、即梦、Vidu、MINIMAX四大主流AI工具，7节实操课程从脚本到成片层层递进。",
      top: false,
    },
    {
      title: "即梦AI全功能实战课：出图、换背景、照片动起来、唱歌说话，Seedance2.0全教学",
      type: "ai",
      originType: "ai",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/9ce0d9454a9f",
      desc: "课程内容简介：本课程是即梦AI的全流程实操教学，从基础到精通手把手教你用即梦完成各类图像与视频创作。",
      top: false,
    },
    {
      title: "AI编程实战课第三期5月3更新：零基础从创意到变现，覆盖全品类产品开发，把想法变成赚钱项目",
      type: "ai",
      originType: "ai",
      time: "2026-05-04",
      linkUrl: "https://pan.quark.cn/s/7c0cf7c83b14",
      desc: "一、课程内容简介：《AI编程实战课-第三期》是一套从创意到商业变现的全链路AI编程实战课。",
      top: false,
    },
    {
      title: "Lanerc动漫",
      type: "book",
      originType: "app",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/42258a587738",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "萌喵漫画",
      type: "book",
      originType: "app",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/1622ee86021d",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "七猫免费小说",
      type: "book",
      originType: "app",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/ed7b0c21f7b3",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "星绘漫",
      type: "book",
      originType: "app",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/dd01ea9b708e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "告别死工资！从思维认知到高阶玩法，一套课掌握跨界AI技能，轻松开启副业",
      type: "ai",
      originType: "ai",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/21e3e0c4ba03",
      desc: "课程内容简介：本课程专为零基础普通人打造，系统讲解如何利用AI工具开展副业、打造被动收入。",
      top: false,
    },
    {
      title: "付费文章：大数据告诉你：大器晚成是人生常态，AI 时代依然适用的成长规律",
      type: "ai",
      originType: "ai",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/3f92e91ae6e3",
      desc: "课程介绍：今天我们要聊一个让中年人揪心的话题，这就是，在 Al 时代，一个人大器晚成的概率还有多大?",
      top: false,
    },
    {
      title: "2026AI编程商业小程序实战课，工具+部署+框架+改造+发布+闲鱼变现一站式学会",
      type: "ai",
      originType: "ai",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/fb239035964d",
      desc: "课程内容简介：本课程是AI编程商业级小程序7天实战营，从AI编程入门、工具安装、小程序快速搭建，到服务器配置、NiuCloud商用框架部署全流程教学。",
      top: false,
    },
    {
      title: "专业级AI电影MV制作教程，从想法到成片全拆解，宫格镜头+提示词模板+AI工具一站式教学",
      type: "ai",
      originType: "ai",
      time: "2026-05-03",
      linkUrl: "https://pan.quark.cn/s/dc3498441113",
      desc: "课程内容简介：本课程从创意构思、故事脚本、导演级分镜、角色服装设计、多维镜头语言、宫格分镜法、AI生图生视频，到剪辑调色与成片输出，系统讲解电影级MV制作逻辑。",
      top: false,
    },
    {
      title: "豆丁视频4K",
      type: "video",
      originType: "app",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/2cfb8fcda739",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "红果免费短剧",
      type: "video",
      originType: "app",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/5dce4818d5a6",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "落叶楼阅读",
      type: "book",
      originType: "app",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/76ef6b18d33f",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "漫星海",
      type: "book",
      originType: "app",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/38865bb78ddd",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "幕悦时光4k(影视)",
      type: "video",
      originType: "app",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/52ffb7c106c2",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "稀饭动漫",
      type: "book",
      originType: "app",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/1f573887e255",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "追番达人",
      type: "book",
      originType: "app",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/d4c3d63815f0",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "追忆影视",
      type: "video",
      originType: "app",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/35c980a53ab7",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "AI代写教案，一单100-500+，单子做不完，AI写作快速变现，小白可做 超简单！",
      type: "side",
      originType: "side",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/5a3ab2ad1726",
      desc: "想找个正经副业？没特长、没技术、不想求人引流的看过来。",
      top: false,
    },
    {
      title: "AI全流程赋能一人公司：提示词、绘画、视频、数字人、编程，一个人顶一个团队",
      type: "ai",
      originType: "ai",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/240a5bf5cc5e",
      desc: "课程内容简介：本课程是专为低门槛创业者打造的“一人公司”实战全课，以36种起盘赚钱计划为核心，配套100节全流程实操内容。",
      top: false,
    },
    {
      title: "AI漫剧硬核课：巨日禄+豆包+即梦+可灵+Vidu+剪映：一套课玩转国产工具，低成本产出爆款漫剧",
      type: "ai",
      originType: "ai",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/7bea2e3c39dc",
      desc: "课程内容简介：本课程为AI漫剧硬核实战课，覆盖行业认知、核心技能拆解与二次元动态漫案例实战。",
      top: false,
    },
    {
      title: "AI摄影商业视觉Midjourney+Stable Diffusion训练营，教程+软件+模型",
      type: "ai",
      originType: "ai",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/c6d0f7fe4e0f",
      desc: "东健AI摄影商业视觉MJ+SD训练营中文教程",
      top: false,
    },
    {
      title: "黄岛主小红书考题虚拟项目1.0：不用卷K12也能月入过万(价值2988的课程)",
      type: "side",
      originType: "side",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/cfe0a3cc7ac9",
      desc: "主打成人行业资格证考题资料变现，避开内卷K12赛道，多行业可选、需求刚需。",
      top: false,
    },
    {
      title: "黄岛主小红书AI考题项目训练营1.0+2.0：从选品到店铺，一套方法通吃所有行业，单天变现500+",
      type: "side",
      originType: "side",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/d56a87cee354",
      desc: "小红书AI教辅全自动玩法，AI一键出图、原创资料制作，店铺自动发货无需私域。",
      top: false,
    },
    {
      title: "闲鱼无货源项目：如何一部手机月入过万？",
      type: "side",
      originType: "side",
      time: "2026-05-01",
      linkUrl: "https://pan.quark.cn/s/66d6ee5d34ce",
      desc: "课程内容简介：本课程是闲鱼付费社群实战教程，专注无货源闲鱼卖货变现。",
      top: false,
    },
    {
      title: "4K影视",
      type: "video",
      originType: "app",
      time: "2026-04-29",
      linkUrl: "https://pan.quark.cn/s/dc135e344803",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "顶点小说",
      type: "book",
      originType: "app",
      time: "2026-04-29",
      linkUrl: "https://pan.quark.cn/s/ff0664bc9af1",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "小X分身",
      type: "tool",
      originType: "app",
      time: "2026-04-29",
      linkUrl: "https://pan.quark.cn/s/f8d77506285a",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "白嫖 Plus教学，手把手教程，保姆级白嫖一个月PLUS会员",
      type: "side",
      originType: "side",
      time: "2026-04-29",
      linkUrl: "https://pan.baidu.com/s/1-r8pjsAFAbF1Hwt5P4QwdQ?pwd=p4q3",
      desc: "【课程介绍】本来只是想上去试一下新功能，结果误打误撞发现现在居然还能白嫖一个月的ChatGPT Plus。",
      top: false,
    },
    {
      title: "AI制作美女跳舞视频，视频号分成计划流量巨大，7天收益5k",
      type: "side",
      originType: "side",
      time: "2026-04-29",
      linkUrl: "https://pan.baidu.com/s/1EBceWe2Bsz-Z4nAeGR_ZOw?pwd=jbun",
      desc: "【项目介绍】这类美女视频有很高的流量，详细流程全拆解！",
      top: false,
    },
    {
      title: "全方位掌握AIGC动画特训营第三期，从分镜到成片，打造国风爆款动画，抢占AI视觉创作赛道红利",
      type: "ai",
      originType: "ai",
      time: "2026-04-29",
      linkUrl: "https://pan.baidu.com/s/1nyflCDciV_Je3bqhoQzKMw?pwd=gmio",
      desc: "全新升级第三期AIGC影片系统特训营，聚焦国风爆款影片+商业IP动画实战创作。",
      top: false,
    },
    {
      title: "AI邵氏武侠英语风口爆发，单条播放破百万，小白也能复刻",
      type: "side",
      originType: "side",
      time: "2026-04-29",
      linkUrl: "https://pan.baidu.com/s/10BwjtTNR3AmuN5B8mFsiKg?pwd=i279",
      desc: "简介：爆款全新流量风口来袭！AI邵氏武侠英语短视频强势出圈。",
      top: false,
    },
    {
      title: "即梦AI一镜到底终极教程｜小白也能会，AI自动生成无缝丝滑长镜头",
      type: "ai",
      originType: "ai",
      time: "2026-04-29",
      linkUrl: "https://pan.baidu.com/s/1bh82oOOrvxamcjNkAptybg?pwd=xfbu",
      desc: "【课程介绍】即梦AI「智能多帧」功能，彻底解决新手一镜到底拍摄难、剪辑繁琐、镜头断层的痛点。",
      top: false,
    },
    {
      title: "23影视4K",
      type: "video",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/5a5898eb2aab",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "爱电影",
      type: "video",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/2e637bf84ed1",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "爱看影视",
      type: "video",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/6ba97130f8ad",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "河马畅听",
      type: "music",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/9ebeca02679f",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "MicoMico动漫",
      type: "book",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/e8202ed2c6f3",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "MyComic(多源漫画小说)",
      type: "book",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/8a409311bec3",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "微商助手",
      type: "tool",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/a004b1f626ab",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "小柿子(影视)",
      type: "video",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/19fd976e9321",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "星影视频4K",
      type: "video",
      originType: "app",
      time: "2026-04-28",
      linkUrl: "https://pan.quark.cn/s/ae12d6963aac",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "AI今日头条国际军事赛道，单号一周收益921，超暴力",
      type: "side",
      originType: "side",
      time: "2026-04-28",
      linkUrl: "https://pan.baidu.com/s/1Te3yWPu-N7GJNonlGqS6bQ?pwd=90a3",
      desc: "【项目介绍】这个项目主打一个“快”字。利用今日头条对新人的流量扶持和推荐算法，配合AI一键生成高质量爆款文章。",
      top: false,
    },
    {
      title: "即梦AI绘画入门课｜4步法解锁提示词+审美技巧，从入门到精通",
      type: "ai",
      originType: "ai",
      time: "2026-04-28",
      linkUrl: "https://pan.baidu.com/s/15AB9Anfeo4EIBrIT44sjxw?pwd=83l2",
      desc: "想入门AI绘画，却不会用即梦AI、提示词写不好，生成的画面杂乱无章、缺乏高级感？",
      top: false,
    },
    {
      title: "AI叙事魔法4步让静态照片“开口讲故事”，轻松制作高质感回忆短片",
      type: "ai",
      originType: "ai",
      time: "2026-04-28",
      linkUrl: "https://pan.baidu.com/s/1SmNUfy8TJH00UwhBtDKNhg?pwd=j2mv",
      desc: "【课程介绍】想要平平无奇的静态照片，变成有画面、有情绪、有故事的氛围感短片？",
      top: false,
    },
    {
      title: "AI赋能美术教育实战课｜工具·提示词·全实操，零基础轻松解锁美术教学新玩法",
      type: "ai",
      originType: "ai",
      time: "2026-04-28",
      linkUrl: "https://pan.baidu.com/s/1qAuFlxb0RjviKC0DOSn3UQ?pwd=izu2",
      desc: "随着AI技术的快速发展，美术教育也迎来新的升级机遇——用AI赋能教学。",
      top: false,
    },
    {
      title: "AIGC 仿真人短剧创作革新，解锁仙侠爱恋全新呈现，一键出高质场景，零门槛打造爆款剧集",
      type: "ai",
      originType: "ai",
      time: "2026-04-25",
      linkUrl: "https://pan.baidu.com/s/1HwnvT2VeZKqF4gNSWLgrqw?pwd=rzpp",
      desc: "国风修仙AI仿真人短剧教学，手把手教你用AI打造高质量仙侠范本，零门槛做爆款剧集！",
      top: false,
    },
    {
      title: "AI火花宝宝宝宝剧场教学课，图文+视频双形式教程，解锁独家分成玩法，零基础也能快速入局变现",
      type: "ai",
      originType: "ai",
      time: "2026-04-25",
      linkUrl: "https://pan.baidu.com/s/1kLJim-dNdBOpD5gdLdaAtw?pwd=nk1y",
      desc: "AI火花宝宝小剧场教学，图文+视频双教程，解锁独家分成玩法，零基础快速变现！",
      top: false,
    },
    {
      title: "2026年来做AI微课，一单800+，超级简单，风口暴利，告别打工！",
      type: "side",
      originType: "side",
      time: "2026-04-25",
      linkUrl: "https://pan.baidu.com/s/1r1dvpHBk5-kpmpLqlLQtgQ?pwd=3f3o",
      desc: "2026AI微课暴利项目，一单300-800元，无需露脸砸钱，AI搞定视频动画，月入2W起步！",
      top: false,
    },
    {
      title: "抖音AI创作变现课，覆盖豆包/醒图/即梦/小云雀实操，长期更新玩法，高效产出优质内容",
      type: "ai",
      originType: "ai",
      time: "2026-04-25",
      linkUrl: "https://pan.baidu.com/s/1wzAPkgbjWQEOHoz6Q2NUug?pwd=wi5b",
      desc: "抖音AI创作变现实操课，覆盖多款热门AI工具，全流程实战，长期更新高效创作技巧！",
      top: false,
    },
    {
      title: "爱读小说",
      type: "book",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/d5391a8c8e68",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "非凡PPT",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/2458179a5455",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "工程水印相机",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/de35cd3d1fc0",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "今日水印相机",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/a82398d698a2",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "酷安",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/57ab926811d5",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "快影",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/e87c4d0d0b1c",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "乐秀视频剪辑视频编辑",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/9842aec70343",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "木木记账",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/65657f2a5b48",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "七天学堂",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/bebc0f9de987",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "清浊",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/48bbbff29b7e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "万能水印相机打卡",
      type: "tool",
      originType: "app",
      time: "2026-04-25",
      linkUrl: "https://pan.quark.cn/s/6325da1483c7",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "爱剪辑",
      type: "tool",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/e086f19d6957",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "傲软投屏",
      type: "tool",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/8b6759208976",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "biubiu加速器",
      type: "tool",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/7d72c4859a7b",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Cimoc(内置多源漫画)",
      type: "book",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/3a0dc348d916",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "超级单词表",
      type: "tool",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/14543e40f99e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "车来了",
      type: "tool",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/f7e3012008f7",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "倒数日",
      type: "tool",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/f11e8e5b135a",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "番茄免费小说",
      type: "book",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/83d00ead89d6",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "红果免费漫剧",
      type: "video",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/6b09df292b24",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "囧漫漫画",
      type: "book",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/d2269cfb2e4f",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "蓝图影视(小草星空蓝狐地瓜视频系列)",
      type: "video",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/18de63f23ade",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "OldRoll复古胶片相机",
      type: "tool",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/d2269cfb2e5f",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "ProCCD复古胶片相机",
      type: "tool",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/433b09bdd736",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "小说快搜",
      type: "book",
      originType: "app",
      time: "2026-04-23",
      linkUrl: "https://pan.quark.cn/s/232e30f49de9",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Mi动漫",
      type: "book",
      originType: "app",
      time: "2026-04-20",
      linkUrl: "https://pan.quark.cn/s/0d6cdaf026cc",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "听中国听书",
      type: "music",
      originType: "app",
      time: "2026-04-20",
      linkUrl: "https://pan.quark.cn/s/442311c56d58",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "雨鹿阅读",
      type: "book",
      originType: "app",
      time: "2026-04-20",
      linkUrl: "https://pan.quark.cn/s/67cf95cf360f",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "4K剧下饭(原剧下饭、剧永久)",
      type: "video",
      originType: "app",
      time: "2026-04-20",
      linkUrl: "https://pan.quark.cn/s/c17f43e46e38",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "小说挂机自动化玩法，一台电脑30+窗口，单窗口收益50+，核心流程限时泄露【揭秘】",
      type: "side",
      originType: "side",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/1ewdCkfDKl3ExC1DxGIq9gg?pwd=vcsq",
      desc: "小说变现新玩法，单窗口日收益50+，支持多开100窗口，小白当天上手，挂机即可持续出单！",
      top: false,
    },
    {
      title: "全网首发，美团拍照掘金，一分钟一单，一天200+，一部手机即可，无任何门槛【揭秘】",
      type: "side",
      originType: "side",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/1j6rDdzQ0uknD6hCp3PxlJA?pwd=2hp8",
      desc: "美团拍照掘金项目，一分钟一单1.5-27元，一部手机即可操作，无脑式轻松赚钱！",
      top: false,
    },
    {
      title: "AI一键对口型唱歌教程：视频人物自动跟唱+音色转换，零基础轻松做爆款唱歌视频",
      type: "ai",
      originType: "ai",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/12OU0b9Hx8kzXWxtwAcKkAg?pwd=q02c",
      desc: "零基础AI对口型唱歌教程，人物自动跟唱+音色转换，手把手教你做爆款音乐视频！",
      top: false,
    },
    {
      title: "AI生成热门ip冰雕项目，小白也能0基础入门，实操+变现保姆级教程",
      type: "side",
      originType: "side",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/1PEWSE1G5i4anvgjpYfCuNA?pwd=t4kz",
      desc: "AI热门IP冰雕项目，0基础小白可入门，保姆级实操教程，低成本解锁副业新赛道！",
      top: false,
    },
    {
      title: "AI音色克隆全实操视频课｜零基础保姆式教学，人声仿真合成，小白也能快速上手",
      type: "ai",
      originType: "ai",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/1M2H5URI41fAfzbKplHsdEg?pwd=q7ci",
      desc: "零基础AI音色克隆教程，全程实操教学，人声仿真合成，满足配音、爱好等多种需求！",
      top: false,
    },
    {
      title: "自用精品合集app推荐：包含影视音乐小说美图剪映等！！",
      type: "app",
      originType: "app",
      time: "2026-04-20",
      linkUrl: "https://pan.quark.cn/s/ada790ce4ed4",
      desc: "站长自己都在用的软件，墙裂推荐给各位小伙伴们，这些资源都是大厂旗下的，会经常更新最新版本。",
      top: true,
    },
    {
      title: "囧次元",
      type: "book",
      originType: "app",
      time: "2026-04-20",
      linkUrl: "https://pan.quark.cn/s/9f0e255e9944",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "轻漫岛",
      type: "book",
      originType: "app",
      time: "2026-04-20",
      linkUrl: "https://pan.quark.cn/s/bd3f3700a99c",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "2026短视频AI拉新红利项目，0门槛0粉丝，新手月入直接过1W",
      type: "side",
      originType: "side",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/1YwlvAoB-V2aRxdCy6zNRKA?pwd=gnph",
      desc: "抖音AI应用拉新推广项目，零基础0粉丝可做，单条视频最高结算20000元，新手也能轻松上手！",
      top: false,
    },
    {
      title: "AI视频2026全新实战大课：零基础学提示词+智能体+剪映，早教漫剧短剧全项目实战",
      type: "ai",
      originType: "ai",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/1MHoLaImvoYJMVlbRqG9Gkw?pwd=2o4g",
      desc: "零基础AI视频全流程实战课，覆盖提示词、剪映技巧、漫剧短剧全项目，一站式掌握创作变现能力！",
      top: false,
    },
    {
      title: "2026AI全域增长内训课，公域批量出爆款，私域精准做转化，用AI打通1000W净利的方法论",
      type: "ai",
      originType: "ai",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/1rBa7LsT2vXdKwJYiiXS8Ew?pwd=ne7c",
      desc: "AI全域增长内训课，拆解公域爆款、私域转化全链路，教你用AI打造高效获客变现体系！",
      top: false,
    },
    {
      title: "Ai一键文章变视频，多平台分发，一部手机躺赚，1：1复制矩阵玩法",
      type: "side",
      originType: "side",
      time: "2026-04-20",
      linkUrl: "https://pan.baidu.com/s/1rxedhGccqC9LX31fh65CEw?pwd=bnsg",
      desc: "零基础一键文章转视频项目，无需真人出镜、无需电脑，一部手机即可矩阵操作，佣金日结！",
      top: false,
    },
    {
      title: "比目视频",
      type: "video",
      originType: "app",
      time: "2026-04-16",
      linkUrl: "https://pan.quark.cn/s/10fdaaa1e223",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "短剧汪4K",
      type: "video",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/ee4b1ec9efe5",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "电影驿站",
      type: "video",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/4b4cbc48a50e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "剧下饭(4K)",
      type: "video",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/b44f8a6260c3",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "橘汁TV版",
      type: "video",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/2b63223b01ca",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "开发助手",
      type: "tool",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/b0b6b4b5e44c",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "酷漫星",
      type: "book",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/73d080c2b978",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "漫拾光漫画",
      type: "book",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/348165d20554",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "喵呜漫画",
      type: "book",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/ce1700f0a84e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "小豆视界",
      type: "video",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/fd52f3bb2428",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "星空动漫",
      type: "book",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/6262d1b69acb",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "星空影视(原星空动漫)",
      type: "video",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/a60909ada8d6",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "鸭趣听书",
      type: "music",
      originType: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/624bc7b00fa9",
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
      title: "AI编程第三期",
      type: "ai",
      originType: "ai",
      time: "2026-04-19",
      linkUrl: "https://pan.baidu.com/s/1NnyHkqwvufyye-utHVInPA?pwd=uyhp",
      desc: "《AI编程实战课-第三期》零基础全链路AI编程实战，覆盖产品开发到冷启动变现全流程！",
      top: false,
    },
    {
      title: "AI真人短剧训练营",
      type: "side",
      originType: "side",
      time: "2026-04-19",
      linkUrl: "https://pan.baidu.com/s/1fBt69UXFJycWB2H0MKQUgg?pwd=uyhp",
      desc: "21天AI真人短剧全流程实战，从剧本→分镜→生成→剪辑，小白也能做出电影感短剧！",
      top: false,
    },
    {
      title: "2026AI私教实战课：从AI原理到全场景实操，零基础学会用AI提效+单人单干创业",
      type: "ai",
      originType: "ai",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/897dc90bed96",
      desc: "本课程以「AI落地实操+单人单干创业」为双主线，覆盖全场景实战技能，配套98节视频课+专属私教答疑，打造超级个体变现能力！",
      top: true,
    },
    {
      title: "Ai漫剧制作全流程",
      type: "side",
      originType: "side",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/f6ddc7055054",
      desc: "AI漫剧制作全流程实战教学，零基础快速成片，高效批量产出高质量漫剧内容！",
      top: false,
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
    // 修复：搜索时展示全部资源
    if (currentKeyword.trim()) {
      return allResources;
    }
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <div className="container">
        <div className="title">
          <h1>格道资源站</h1>
          <p>破解版app丨AI教程丨副业项目</p>
        </div>
        
        {/* 滚动公告轮播 */}
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

        {/* 导航栏：箭头可点击滑动 */}
        <div className="tabs-container">
          {/* 绑定滚动ref */}
          <div className="tabs-wrapper" ref={tabScrollRef}>
            <div className="tabs">
              <div className="tab-item-wrapper">
                <button 
                  className={`tab-btn ${activeTab === 'all' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  最新资源
                </button>
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
          
          {/* 可点击的右滑箭头 → 点击自动滑到下一个导航 */}
          <div className="slide-tip" onClick={handleSlideRight}>》</div>
        </div>

        {/* 资源区域 */}
        <div className="section">
          {renderResourceList(finalList)}
        </div>
      </div>

      {/* 弹窗 */}
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

        .tabs-container{
          display:flex;
          justify-content:flex-start;
          align-items:center;
          background:#ffffff !important;
          border-radius:16px 16px 0 0;
          padding:15px 20px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
          border-bottom:1px solid #eee;
          position:relative;
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
          align-items:center;
          gap:6px;
          white-space:nowrap;
          min-width:max-content;
        }
        /* 可点击箭头样式 */
        .slide-tip{
          position:absolute;
          right:15px;
          top:50%;
          transform:translateY(-50%);
          font-size:20px;
          color:#4f46e5;
          font-weight:bold;
          pointer-events:auto; /* 允许点击 */
          cursor:pointer;
          z-index:10;
        }
        .slide-tip:hover{opacity:0.8;}

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
