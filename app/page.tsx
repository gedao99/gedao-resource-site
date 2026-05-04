'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showMoreModal, setShowMoreModal] = useState<{ type: string | null; show: boolean }>({ type: null, show: false });
  const [showInviteModal, setShowInviteModal] = useState(false);
  // 新增：当前激活的标签，默认显示最新资源
  const [activeTab, setActiveTab] = useState('all');

  // 页面加载判断弹窗逻辑
  useEffect(() => {
    // 1. 如果已经加入群，永久不弹
    const hasJoined = localStorage.getItem('userJoinedAIGroup');
    if (hasJoined) {
      setShowInviteModal(false);
      return;
    }
    // 2. 没加群，判断今天是否点了下次再说
    const today = new Date().toLocaleDateString();
    const closedDate = localStorage.getItem('popupClosedDate');
    if (closedDate !== today) {
      setShowInviteModal(true);
    }
  }, []);

  // 同意加入群：永久不再弹出
  const handleJoinGroup = () => {
    localStorage.setItem('userJoinedAIGroup', 'true');
    window.open("https://qm.qq.com/q/KPkPCBv6MK", "_blank");
    setShowInviteModal(false);
  };

  // 下次再说：今日不弹，次日再弹
  const handleSkip = () => {
    const today = new Date().toLocaleDateString();
    localStorage.setItem('popupClosedDate', today);
    setShowInviteModal(false);
  };

  // 资源列表（已包含你所有新增资源）
  const initialResources = [
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
  title: "Omofun(动漫)",
  type: "app",
  time: "2026-05-04",
  linkUrl: "https://pan.quark.cn/s/1acfbaa08d84",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "青漫(漫画)",
  type: "app",
  time: "2026-05-04",
  linkUrl: "https://pan.quark.cn/s/b2f7b1523c39",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "学《叙事的科学》= 拍爆款片 + 接大牌客户？26 节课 + AI 助手直接送！",
  type: "side",
  time: "2026-05-04",
  linkUrl: "https://pan.quark.cn/s/acfbfd02fb6f",
  desc: "内容大纲：\n本课程为您提供一套完整的工具包、即用型模板与分步实操指南，助您打造令人难忘的影像作品，赢得更优质的客户，在竞争激烈的市场中脱颖而出。\n\n您将深入掌握：\n故事科学体系——发掘引人入胜的角色与冲突，优化创意流程\n高效创作工具——26+视频课程、故事挖掘手册、Canva设计模板及专属AI助手，大幅缩短调研与脚本时间\n专属成长支持——一对一教练辅导与故事优先社群，提供定制化反馈与持续指导\n\n完成学习后，您将具备用故事打动观众、赢得理想客户的能力，成为以叙事见长的影像创作者。\n\n教程语言：双语字幕 / 中 英\n文档语言：英文 / 请自行AI翻译\n安全扫描：无病毒无插件 / 云查杀 Virustotal Virscan\n培训机构：出海王 / IMJMJ.COM\n文件大小：3.3GB\n文件格式：视频 / 文档 / 图文\n压缩软件：7ZIP\n视频播放：完美解码 / potplayer / QQ影音",
  top: false,
},
{
  title: "AI动画电影制作实战：豆包+即梦+Vidu+MINIMAX，从脚本到成片零基础入门(附素材+软件)",
  type: "ai",
  time: "2026-05-04",
  linkUrl: "https://pan.quark.cn/s/59af643d51fe",
  desc: "课程内容简介\n本先导课聚焦AI电影动画全流程入门，联合豆包AI、即梦、Vidu、MINIMAX四大主流AI工具，7节实操课程从脚本到成片层层递进。课程涵盖：AI动画先导认知、AI动画脚本生成、角色概念图设计、AI动画分镜绘制、AI动画视频生成、AI配音口型与音效，以及AI动画剪辑流程。课程主打“入门引导、实操落地、多工具适配”，打破单一工具局限，教你灵活运用不同工具的优势，完成从创意到成片的全流程输出，降低动画制作门槛，零基础也能快速上手。",
  top: false,
},
{
  title: "即梦AI全功能实战课：出图、换背景、照片动起来、唱歌说话，Seedance2.0全教学",
  type: "ai",
  time: "2026-05-04",
  linkUrl: "https://pan.quark.cn/s/9ce0d9454a9f",
  desc: "课程内容简介\n本课程是即梦AI的全流程实操教学，从基础到精通手把手教你用即梦完成各类图像与视频创作。课程涵盖：免费出图、图片修改、换背景换衣服；图片生成与简单一致性控制；让静态照片动起来；首尾帧与智能多帧实现画面自然流动；让图片唱歌说话（会动的角色）；一镜到底AI自动生成无缝镜头；AGENT一键生成动画（AI导演自动完成整部影片）。此外还附赠Seedance 2.0真人视频全流程（从拍摄到AI电影级成片）及SUPER GROK订阅与取消教程。课程零基础友好，帮助学员快速掌握即梦核心功能，实现从图片到动画的全链路创作。",
  top: false,
},
{
  title: "AI编程实战课第三期5月3更新：零基础从创意到变现，覆盖全品类产品开发，把想法变成赚钱项目",
  type: "ai",
  time: "2026-05-04",
  linkUrl: "https://pan.quark.cn/s/7c0cf7c83b14",
  desc: "一、课程内容简介\n《AI编程实战课-第三期》是一套从创意到商业变现的全链路AI编程实战课。课程针对“想法不会做、Demo难落地、产品没人用”三大痛点，覆盖预备篇、起步篇、技术篇、认知篇、内功篇、基础篇等模块，系统教授AI编程底层方法与全品类产品实战（网站、小程序、App、桌面应用等），搭配专属官网、助教答疑与全年航海训练营，教你零基础用AI完成从产品开发到冷启动变现的完整流程，真正把创意变成可盈利的商业项目。",
  top: false,
},
{
  title: "Lanerc动漫",
  type: "app",
  time: "2026-05-03",
  linkUrl: "https://pan.quark.cn/s/42258a587738",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "萌喵漫画",
  type: "app",
  time: "2026-05-03",
  linkUrl: "https://pan.quark.cn/s/1622ee86021d",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "七猫免费小说",
  type: "app",
  time: "2026-05-03",
  linkUrl: "https://pan.quark.cn/s/ed7b0c21f7b3",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "星绘漫",
  type: "app",
  time: "2026-05-03",
  linkUrl: "https://pan.quark.cn/s/dd01ea9b708e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "告别死工资！从思维认知到高阶玩法，一套课掌握跨界AI技能，轻松开启副业",
  type: "ai",
  time: "2026-05-03",
  linkUrl: "https://pan.quark.cn/s/21e3e0c4ba03",
  desc: "课程内容简介\n本课程专为零基础普通人打造，系统讲解如何利用AI工具开展副业、打造被动收入。课程从思维认知与高效做事逻辑入手，帮助学员摆脱“老油条”式低效工作方式，用数据与效率说话。核心实操部分涵盖：低成本掌握跨界技能、AI绘画商业应用实战、商业海报绘制、AI宠物视频制作、万能提示词技巧、数字人全流程（上下两节），以及AI高阶玩法与多种变现路径。全程零基础友好，无需学历、无需功底、无需囤货，帮助学员掌握多项AI实用技能，解锁多条副业增收渠道，轻松搭建睡后收入体系。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "付费文章：大数据告诉你：大器晚成是人生常态，AI 时代依然适用的成长规律",
  type: "ai",
  time: "2026-05-03",
  linkUrl: "https://pan.quark.cn/s/3f92e91ae6e3",
  desc: "课程介绍\n今天我们要聊一个让中年人揪心的话 题，这就是，在 Al 时代，一个人大器 晚成的概率还有多大?\n为什么强调 Al 这个技术背景?主要是 因为，在它的加持下，时代似乎越来 越倾向于“英雄出少年”了。\n比如，OpenA I 的核心团队平均年龄只 有30岁出头。2023 年，全球冒出来 上百家大模型创业公司，创始人大多 是“90后”。还有人专门统计过，在 这 一 轮AI 浪潮中，从技术突破到商业 落地，平均只用了不到3年时间，而 在上一轮互联网浪潮中，这个周期要长得多。\n而且未来， “10后”将是 AI 的原生一 代 ，他们从小浸润在 Al 里，对这个新 技术的适应度只会越来越高，年轻人 成才的概率也会越来越高。\n你看，说到这，我们再看一眼开头那 个问题，Al 时代，一个人大器晚成的 概率还有多大?\n\n咱们先说结论，在多数领域，大器晚 成都是人生常态。没错，是多数领域。这个规律或许也能迁移到Al 时代。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "2026AI编程商业小程序实战课，工具+部署+框架+改造+发布+闲鱼变现一站式学会",
  type: "ai",
  time: "2026-05-03",
  linkUrl: "https://pan.quark.cn/s/fb239035964d",
  desc: "课程内容简介\n本课程是**AI编程商业级小程序7天实战营**，从AI编程入门、工具安装、小程序快速搭建，到服务器配置、NiuCloud商用框架部署、AI界面改造、域名备案与上线发布全流程教学，同步附赠闲鱼AI编程（Excel VBA）接单变现实战方法，配套SOP、作业与直播录播，零基础也能快速掌握AI编程接单与商用小程序开发。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "专业级AI电影MV制作教程，从想法到成片全拆解，宫格镜头+提示词模板+AI工具一站式教学",
  type: "ai",
  time: "2026-05-03",
  linkUrl: "https://pan.quark.cn/s/dc3498441113",
  desc: "课程内容简介\n本课程从创意构思、故事脚本、导演级分镜、角色服装设计、多维镜头语言、宫格分镜法、AI生图生视频，到剪辑调色与成片输出，系统讲解电影级MV制作逻辑，配套大量可直接复制的提示词模板与工具用法，零基础也能做出电影质感的AI音乐MV。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
    {
  title: "豆丁视频4K",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/2cfb8fcda739",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "红果免费短剧",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/5dce4818d5a6",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "落叶楼阅读",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/76ef6b18d33f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "漫星海",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/38865bb78ddd",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "幕悦时光4k(影视)",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/52ffb7c106c2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "稀饭动漫",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/1f573887e255",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "星漫辰(零界绘漫天星漫海系列)",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/1be34e7f044b",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "追番达人",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/d4c3d63815f0",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "追忆影视",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/35c980a53ab7",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "【推荐】漫小社",
  type: "app",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/826fd86356c0",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "AI代写教案，一单100-500+，单子做不完，AI写作快速变现，小白可做 超简单！",
  type: "side",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/5a3ab2ad1726",
  desc: "想找个正经副业？没特长、没技术、不想求人引流的看过来。\n这个项目只需会用电脑，用AI工具就能干。我们直接给你对接好的渠道，不用自己找客户，上线就能接单。\n\n每天抽出2小时，按部就班就能写完。按现在的单量，一天赚几百块是常态，收益绝对比你打工稳。\n\n别整那些虚的，只要你肯花时间去干，结果一定看得见。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "AI全流程赋能一人公司：提示词、绘画、视频、数字人、编程，一个人顶一个团队",
  type: "ai",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/240a5bf5cc5e",
  desc: "课程内容简介\n本课程是专为低门槛创业者打造的“一人公司”实战全课，以36种起盘赚钱计划为核心，配套100节全流程实操内容，涵盖创业基础、AI赋能、流量运营与商业案例拆解四大模块。课程从创业时机判断、18个月现金流规划、个人技能盘点、用户痛点挖掘、定价策略、个人品牌建立，到销售转化与客户留存，系统讲解一人公司从0到1的全过程。AI赋能部分涵盖提示词工程、AI生成商业计划书、AI绘画/音乐/视频创作、数字人、Cursor编程、AI Agent等前沿工具。流量运营覆盖短视频、直播、多平台（抖音/蝴蝶号/小红书）算法与投放、同城流量、账号矩阵、无人直播等。最后通过赵明威、ChatPDF、Cursor等真实案例拆解，帮助学员找到适合自己的赚钱路径，实现一人高效盈利。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "AI漫剧硬核课：巨日禄+豆包+即梦+可灵+Vidu+剪映：一套课玩转国产工具，低成本产出爆款漫剧",
  type: "ai",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/7bea2e3c39dc",
  desc: "课程内容简介\n本课程为AI漫剧硬核实战课，覆盖行业认知、核心技能拆解与二次元动态漫案例实战，整合多款AI工具教学，建立工业化SOP出片流程，解决角色脸盲、动作生硬、画质廉价等痛点，助力学员实现影视级制作与商业变现。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "AI摄影商业视觉Midjourney+Stable Diffusion训练营，教程+软件+模型",
  type: "ai",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/c6d0f7fe4e0f",
  desc: "东健AI摄影商业视觉MJ+SD训练营中文教程\n中文教程|88GB",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "黄岛主小红书考题虚拟项目1.0：不用卷K12也能月入过万(价值2988的课程)",
  type: "side",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/cfe0a3cc7ac9",
  desc: "主打成人行业资格证考题资料变现，避开内卷K12赛道，多行业可选、需求刚需，实操流程完整，短周期快速变现。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "黄岛主小红书AI考题项目训练营1.0+2.0：从选品到店铺，一套方法通吃所有行业，单天变现500+",
  type: "side",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/d56a87cee354",
  desc: "小红书AI教辅全自动玩法，AI一键出图、原创资料制作，店铺自动发货无需私域，长期稳定副业，小白零基础可入门。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
{
  title: "闲鱼无货源项目：如何一部手机月入过万？",
  type: "side",
  time: "2026-05-01",
  linkUrl: "https://pan.quark.cn/s/66d6ee5d34ce",
  desc: "课程内容简介\n本课程是闲鱼付费社群实战教程，专注无货源闲鱼卖货变现，包含新手手册、视频课、货源对接、选品、群内诊断、高级群团队分红等全套服务，教你利用差价与佣金实现一部手机稳定副业增收。",
  top: false,
}, // ✅ 逗号正确，{}位置正确
    {
  title: "4K影视",
  type: "app",
  time: "2026-04-29",
  linkUrl: "https://pan.quark.cn/s/dc135e344803",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "顶点小说",
  type: "app",
  time: "2026-04-29",
  linkUrl: "https://pan.quark.cn/s/ff0664bc9af1",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小X分身",
  type: "app",
  time: "2026-04-29",
  linkUrl: "https://pan.quark.cn/s/f8d77506285a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "白嫖 Plus教学，手把手教程，保姆级白嫖一个月PLUS会员",
  type: "side",
  time: "2026-04-29",
  linkUrl: "https://pan.baidu.com/s/1-r8pjsAFAbF1Hwt5P4QwdQ?pwd=p4q3",
  desc: "【课程介绍】本来只是想上去试一下新功能，结果误打误撞发现现在居然还能白嫖一个月的ChatGPT Plus，一分钱不花，而且是正规路子",
  top: false,
},
{
  title: "AI制作美女跳舞视频，视频号分成计划流量巨大，7天收益5k",
  type: "side",
  time: "2026-04-29",
  linkUrl: "https://pan.baidu.com/s/1EBceWe2Bsz-Z4nAeGR_ZOw?pwd=jbun",
  desc: "【项目介绍】这类美女视频有很高的流量，详细流程全拆解！举一反三！一键生成没有那么多复杂的步骤，新手可以尝试一下！",
  top: false,
},
{
  title: "全方位掌握AIGC动画特训营第三期，从分镜到成片，打造国风爆款动画，抢占AI视觉创作赛道红利",
  type: "ai",
  time: "2026-04-29",
  linkUrl: "https://pan.baidu.com/s/1nyflCDciV_Je3bqhoQzKMw?pwd=gmio",
  desc: "全新升级第三期AIGC影片系统特训营，聚焦国风爆款影片+商业IP动画实战创作，结合Seedance2.0、海螺AI两大主流工具，从项目规范、分镜设计、叙事剪辑、角色IP打造，到口型动画、配音字幕、高清成片输出，全流程手把手教学。零基础友好入门，循序渐进系统化训练，配套开课直播、每周作业点评、全套配套资料，及时纠正创作问题，快速提升画面审美与AI影片制作能力。",
  top: false,
},
{
  title: "AI邵氏武侠英语风口爆发，单条播放破百万，小白也能复刻",
  type: "side",
  time: "2026-04-29",
  linkUrl: "https://pan.baidu.com/s/10BwjtTNR3AmuN5B8mFsiKg?pwd=i279",
  desc: "简介：爆款全新流量风口来袭！AI邵氏武侠英语短视频强势出圈，赛道黑马狂奔，单条轻松斩获百万播放，流量红利全面爆发。复古港式邵氏武侠美学拉满，老胶片质感+经典武运镜，硬核拆解趣味英文俚语、双词短语，国风武侠混搭双语教学，反差感直接拉满。赛道冷门竞争小、吸粉快、变现强，全套分镜脚本、人物提示词一键配齐，零基础小白不用剪辑、不用创作，无脑套用就能批量起号，普通人也能复刻爆款",
  top: false,
},
{
  title: "即梦AI一镜到底终极教程｜小白也能会，AI自动生成无缝丝滑长镜头",
  type: "ai",
  time: "2026-04-29",
  linkUrl: "https://pan.baidu.com/s/1bh82oOOrvxamcjNkAptybg?pwd=xfbu",
  desc: "【课程介绍】即梦AI「智能多帧」功能，彻底解决新手一镜到底拍摄难、剪辑繁琐、镜头断层的痛点，无需专业拍摄设备、不用手动剪辑，上传关键帧就能让AI自动补全过渡动画，生成无缝衔接的丝滑长镜头。本教程聚焦实操落地，从功能入口、关键帧设计、参数设置到提示词技巧，全程拆解，小白10分钟就能上手，实测适配Seedance全版本，覆盖国风、城市漫游、产品展示、剧情短片等多场景。教程核心围绕“简单易操作、镜头零断层”展开，先明确即梦AI一镜到底的核心逻辑——通过智能补帧技术，衔接每一张关键帧，还原自然运镜节奏，无需复杂操作。重点讲解关键帧设计的3个核心原则（同画风、同主体、同光影），规避镜头崩脸、画风割裂的常见坑；搭配专属参数模板和运镜提示词，一键套用就能生成高质量一镜到底视频，不管是自媒体创作、短视频种草还是素材制作，都能高效出片，轻松实现“上传即成片”的便捷体验。",
  top: false,
},
    {
  title: "23影视4K",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/5a5898eb2aab",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱电影",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/2e637bf84ed1",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱看影视",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/6ba97130f8ad",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "河马畅听",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/9ebeca02679f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "MicoMico动漫",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/e8202ed2c6f3",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "MyComic(多源漫画小说)",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/8a409311bec3",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "微商助手",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/a004b1f626ab",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小柿子(影视)",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/19fd976e9321",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "星影视频4K",
  type: "app",
  time: "2026-04-28",
  linkUrl: "https://pan.quark.cn/s/ae12d6963aac",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "AI今日头条国际军事赛道，单号一周收益921，超暴力",
  type: "side",
  time: "2026-04-28",
  linkUrl: "https://pan.baidu.com/s/1Te3yWPu-N7GJNonlGqS6bQ?pwd=90a3",
  desc: "【项目介绍】这个项目主打一个“快”字。利用今日头条对新人的流量扶持和推荐算法，配合AI一键生成高质量爆款文章。不用你有文采，只要选对赛道（如娱乐、情感、热点），AI几秒钟出的文章，0粉丝照样能拿百万曝光。【操作亮点】见效极快：每天只需10分钟投喂AI，实测单号一周提现921米+。低门槛批量：只要会用AI指令，一个人就能运营10个号，收益直接翻倍。保姆级玩法：避开传统写作的坑，通过AI指令调优直接对标热搜，主打一个稳准狠。【项目评价】这是目前最适合普通人入场的AI副业，不用露脸、不用剪辑，靠AI搬运智慧，靠平台賺流量收益，目前仍是红利期！",
  top: false,
},
{
  title: "即梦AI绘画入门课｜4步法解锁提示词+审美技巧，从入门到精通",
  type: "ai",
  time: "2026-04-28",
  linkUrl: "https://pan.baidu.com/s/15AB9Anfeo4EIBrIT44sjxw?pwd=83l2",
  desc: "想入门AI绘画，却不会用即梦AI、提示词写不好，生成的画面杂乱无章、缺乏高级感？不用再为AI绘画难、审美不足而内耗，不用再为找不到系统的入门方法而发愁。这门《AI绘画创作4步法:AI绘画入门和审美提升》，专为AI绘画新手、爱好者量身打造，全程纯实操教学，以4步实战法为核心，从即梦AI入门到审美提升，手把手教你掌握AI绘画核心技巧，轻松做出有高级感、有艺术性的AI绘画作品，快速解锁AI绘画新技能。课程拒绝空洞理论，聚焦“零基础友好、实操性强”，全程围绕即梦AI工具实操与审美提升两大核心，层层递进、步步拆解。先带你夯实AI绘画入门基础，掌握即梦AI5大核心指令，解锁AI绘画万能提示词公式，再通过BRTR框架进阶提示词技巧，让你轻松写出精准、有质感的提示词，告别“AI生成杂乱、无美感”的问题；同时详解即梦4.0模型图像融合、智能画布使用技巧，让你快速上手即梦AI，高效生成优质画面。AI绘画创作4步法:AI绘画入门和审美提升",
  top: false,
},
{
  title: "AI叙事魔法4步让静态照片“开口讲故事”，轻松制作高质感回忆短片",
  type: "ai",
  time: "2026-04-28",
  linkUrl: "https://pan.baidu.com/s/1SmNUfy8TJH00UwhBtDKNhg?pwd=j2mv",
  desc: "【课程介绍】想要平平无奇的静态照片，变成有画面、有情绪、有故事的氛围感短片？这门《AI叙事魔法-4步让静态照片“开口讲故事”》专属零基础学员打造，一站式解锁照片叙事全流程玩法。课程从实际应用出发，带你玩转回忆杀短视频创作；借助AI智能修复工具，一键翻新模糊、破损老照片，留住珍贵旧时光；拆解极简三步动态技法，轻松给静态照片赋予自然动态效果；掌握首尾帧图生视频技巧，完美解决画面卡顿，提升视频流畅度；深耕爆款通用黄金4段式叙事脚本结构，告别内容空洞，让每一张照片都能流畅叙事、自带感染力。全程实操教学，方法简单易上手，无需专业剪辑与设计基础，快速掌握AI修图、照片动效、视频优化、故事文案四大核心技能，轻松制作怀旧回忆短片、情感氛围感视频，解锁短视频全新创作赛道。",
  top: false,
},
{
  title: "AI赋能美术教育实战课｜工具·提示词·全实操，零基础轻松解锁美术教学新玩法",
  type: "ai",
  time: "2026-04-28",
  linkUrl: "https://pan.baidu.com/s/1qAuFlxb0RjviKC0DOSn3UQ?pwd=izu2",
  desc: "随着AI技术的快速发展，美术教育也迎来新的升级机遇——用AI赋能教学，既能降低教学成本，又能丰富教学形式、提升教学效率，但很多美术老师、教育从业者却陷入困境：不懂AI工具、不会筛选适配美术教学的工具，提示词运用生疏，AI生成作品随机性强，无法贴合教学需求，想尝试却不知从何下手。这门《AI赋能美术教育实战课》，专为美术老师、美术教育从业者、零基础想涉足AI美术教育的人群量身打造，以“工具+提示词+实战”为核心，全程手把手实操教学，从入门到精通，轻松解锁AI赋能美术教学的新玩法，开启高效、低成本的教学新体验。课程打破“AI难学、门槛高”的误区，聚焦零基础友好，不管你是否接触过AI工具，都能跟着课程一步步上手。核心围绕三大核心亮点，全方位赋能美术教学：零基础实战教学，拆解每一个操作步骤，避开复杂理论，让你快速掌握AI与美术教育的结合技巧；揭秘实用AI工具免费获取渠道，传授工具筛选与搭配秘籍，教你花小钱办大事，用低成本解锁高效教学工具；深耕提示词核心技巧，教你精准引导AI生成预期作品，告别创作随机性，实现教学素材、作品效果自由，让AI真正成为美术教学的好帮手。课程拒绝空洞理论，全程以实战为导向，将AI工具运用、提示词技巧与美术教学场景深度结合，教你如何用AI快速生成教学素材、辅助课堂教学、丰富教学形式，既节省备课时间，又能提升教学质量，让美术教学更高效、更具趣味性，轻松跟上美术教育升级的步伐。",
  top: false,
},
    {
  title: "AIGC 仿真人短剧创作革新，解锁仙侠爱恋全新呈现，一键出高质场景，零门槛打造爆款剧集",
  type: "ai",
  time: "2026-04-25",
  linkUrl: "https://pan.baidu.com/s/1HwnvT2VeZKqF4gNSWLgrqw?pwd=rzpp",
  desc: "国风修仙AI仿真人短剧教学，手把手教你用AI打造高质量仙侠范本，零门槛做爆款剧集！",
  top: false,
},
{
  title: "AI火花宝宝宝宝剧场教学课，图文+视频双形式教程，解锁独家分成玩法，零基础也能快速入局变现",
  type: "ai",
  time: "2026-04-25",
  linkUrl: "https://pan.baidu.com/s/1kLJim-dNdBOpD5gdLdaAtw?pwd=nk1y",
  desc: "AI火花宝宝小剧场教学，图文+视频双教程，解锁独家分成玩法，零基础快速变现！",
  top: false,
},
{
  title: "2026年来做AI微课，一单800+，超级简单，风口暴利，告别打工！",
  type: "side",
  time: "2026-04-25",
  linkUrl: "https://pan.baidu.com/s/1r1dvpHBk5-kpmpLqlLQtgQ?pwd=3f3o",
  desc: "2026AI微课暴利项目，一单300-800元，无需露脸砸钱，AI搞定视频动画，月入2W起步！",
  top: false,
},
{
  title: "抖音AI创作变现课，覆盖豆包/醒图/即梦/小云雀实操，长期更新玩法，高效产出优质内容",
  type: "ai",
  time: "2026-04-25",
  linkUrl: "https://pan.baidu.com/s/1wzAPkgbjWQEOHoz6Q2NUug?pwd=wi5b",
  desc: "抖音AI创作变现实操课，覆盖多款热门AI工具，全流程实战，长期更新高效创作技巧！",
  top: false,
},
    {
  title: "爱读小说",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/d5391a8c8e68",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
    {
  title: "非凡PPT",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/2458179a5455",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "工程水印相机",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/de35cd3d1fc0",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "今日水印相机",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/a82398d698a2",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "酷安",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/57ab926811d5",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "快影",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/e87c4d0d0b1c",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "乐秀视频剪辑视频编辑",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/9842aec70343",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "木木记账",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/65657f2a5b48",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "七天学堂",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/bebc0f9de987",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "清浊",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/48bbbff29b7e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "万能水印相机打卡",
  type: "app",
  time: "2026-04-25",
  linkUrl: "https://pan.quark.cn/s/6325da1483c7",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "爱剪辑",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/e086f19d6957",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "傲软投屏",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/8b6759208976",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "biubiu加速器",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/7d72c4859a7b",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "Cimoc(内置多源漫画)",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/3a0dc348d916",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "超级单词表",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/14543e40f99e",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "车来了",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/f7e3012008f7",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "倒数日",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/f11e8e5b135a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "番茄免费小说",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/83d00ead89d6",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "红果免费漫剧",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/6b09df292b24",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "囧漫漫画",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/d2269cfb2e4f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "蓝图影视(小草星空蓝狐地瓜视频系列)",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/18de63f23ade",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "OldRoll复古胶片相机",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/d2269cfb2e5f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "ProCCD复古胶片相机",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/433b09bdd736",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小说快搜",
  type: "app",
  time: "2026-04-23",
  linkUrl: "https://pan.quark.cn/s/232e30f49de9",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
   {
  title: "Mi动漫",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/0d6cdaf026cc",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "听中国听书",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/442311c56d58",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "雨鹿阅读",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/67cf95cf360f",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "4K剧下饭(原剧下饭、剧永久)",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/c17f43e46e38",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "小说挂机自动化玩法，一台电脑30+窗口，单窗口收益50+，核心流程限时泄露【揭秘】",
  type: "side",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/1ewdCkfDKl3ExC1DxGIq9gg?pwd=vcsq",
  desc: "小说变现新玩法，单窗口日收益50+，支持多开100窗口，小白当天上手，挂机即可持续出单！",
  top: false,
},
{
  title: "全网首发，美团拍照掘金，一分钟一单，一天200+，一部手机即可，无任何门槛【揭秘】",
  type: "side",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/1j6rDdzQ0uknD6hCp3PxlJA?pwd=2hp8",
  desc: "美团拍照掘金项目，一分钟一单1.5-27元，一部手机即可操作，无脑式轻松赚钱！",
  top: false,
},
{
  title: "AI一键对口型唱歌教程：视频人物自动跟唱+音色转换，零基础轻松做爆款唱歌视频",
  type: "ai",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/12OU0b9Hx8kzXWxtwAcKkAg?pwd=q02c",
  desc: "零基础AI对口型唱歌教程，人物自动跟唱+音色转换，手把手教你做爆款音乐视频！",
  top: false,
},
{
  title: "AI生成热门ip冰雕项目，小白也能0基础入门，实操+变现保姆级教程",
  type: "side",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/1PEWSE1G5i4anvgjpYfCuNA?pwd=t4kz",
  desc: "AI热门IP冰雕项目，0基础小白可入门，保姆级实操教程，低成本解锁副业新赛道！",
  top: false,
},
{
  title: "AI音色克隆全实操视频课｜零基础保姆式教学，人声仿真合成，小白也能快速上手",
  type: "ai",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/1M2H5URI41fAfzbKplHsdEg?pwd=q7ci",
  desc: "零基础AI音色克隆教程，全程实操教学，人声仿真合成，满足配音、爱好等多种需求！",
  top: false,
}, 
    {
  title: "自用精品合集app推荐：包含影视音乐小说美图剪映等！！",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/ada790ce4ed4",
  desc: "站长自己都在用的软件，墙裂推荐给各位小伙伴们，这些资源都是大厂旗下的，会经常更新最新版本，更新信息记得持续关注公众号【格道黑科技】",
  top: true,
},
{
  title: "囧次元",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/9f0e255e9944",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "轻漫岛",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/bd3f3700a99c",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "2026短视频AI拉新红利项目，0门槛0粉丝，新手月入直接过1W",
  type: "side",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/1YwlvAoB-V2aRxdCy6zNRKA?pwd=gnph",
  desc: "抖音AI应用拉新推广项目，零基础0粉丝可做，单条视频最高结算20000元，新手也能轻松上手！",
  top: false,
},
{
  title: "AI视频2026全新实战大课：零基础学提示词+智能体+剪映，早教漫剧短剧全项目实战",
  type: "ai",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/1MHoLaImvoYJMVlbRqG9Gkw?pwd=2o4g",
  desc: "零基础AI视频全流程实战课，覆盖提示词、剪映技巧、漫剧短剧全项目，一站式掌握创作变现能力！",
  top: false,
},
{
  title: "2026AI全域增长内训课，公域批量出爆款，私域精准做转化，用AI打通1000W净利的方法论",
  type: "ai",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/1rBa7LsT2vXdKwJYiiXS8Ew?pwd=ne7c",
  desc: "AI全域增长内训课，拆解公域爆款、私域转化全链路，教你用AI打造高效获客变现体系！",
  top: false,
},
{
  title: "Ai一键文章变视频，多平台分发，一部手机躺赚，1：1复制矩阵玩法",
  type: "side",
  time: "2026-04-20",
  linkUrl: "https://pan.baidu.com/s/1rxedhGccqC9LX31fh65CEw?pwd=bnsg",
  desc: "零基础一键文章转视频项目，无需真人出镜、无需电脑，一部手机即可矩阵操作，佣金日结！",
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
      title: "短剧汪4K",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/ee4b1ec9efe5",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "电影驿站",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/4b4cbc48a50e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "剧下饭(4K)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/b44f8a6260c3",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "橘汁TV版",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/2b63223b01ca",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "开发助手",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/b0b6b4b5e44c",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "酷漫星",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/73d080c2b978",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "漫拾光漫画",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/348165d20554",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "喵呜漫画",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/ce1700f0a84e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "小豆视界",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/fd52f3bb2428",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "星空动漫",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/6262d1b69acb",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "星空影视(原星空动漫)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/a60909ada8d6",
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
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/f6ddc7055054",
      desc: "AI漫剧制作全流程实战教学，零基础快速成片，高效批量产出高质量漫剧内容！",
      top: false,
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
    
    // 去重（防止置顶资源同时也是最近3天资源重复显示）
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
    all: { name: "🔥 最新资源" },
    app: { name: "📱 破解版app" },
    ai: { name: "🤖 AI教程" },
    side: { name: "💰 副业项目" },
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

  // 渲染资源卡片网格
  const renderResourceGrid = (list: any[]) => (
    <div className="resource-grid">
      {list.map((item, index) => (
        <div key={index} className={`card ${item.top ? 'card-top' : ''}`} onClick={() => setSelectedItem(item)}>
          {item.top && <div className="top-tag">置顶</div>}
          <div className="card-title">{item.title}</div>
          <div className="card-info">
            <span className={`tag tag-${item.type}`}>{typeMap[item.type as keyof typeof typeMap]?.name || typeMap.all.name}</span>
            <span>{item.time}</span>
          </div>
          <div className="card-btn">查看详情</div>
        </div>
      ))}
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
          <button 
            className="more-btn" 
            onClick={() => setShowMoreModal({ type: activeTab, show: true })}
          >
            查看更多 →
          </button>
        </div>

        {/* 资源展示区域（根据标签动态切换） */}
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

      {/* 全局样式 */}
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

        /* 标签栏样式 */
        .tabs-container{
          display:flex;
          justify-content:space-between;
          align-items:center;
          background:#ffffff !important;
          border-radius:16px 16px 0 0;
          padding:18px 22px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
          border-bottom:1px solid #eee;
        }
        .tabs{
          display:flex;
          align-items:center;
          gap:10px;
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
        }
        .tab-btn:hover{
          color:#4f46e5;
          background:#f0f4ff;
        }
        .tab-active{
          color:#4f46e5 !important;
          background:#eef2ff !important;
        }
        .tab-divider{
          color:#ccc;
          font-size:18px;
        }
        .more-btn{
          font-size:14px;color:#4f46e5;font-weight:bold;
          background:none;border:none;cursor:pointer;
        }
        .more-btn:hover{text-decoration:underline;}

        .section{
          background:#ffffff !important;
          border-radius:0 0 16px 16px;
          padding:22px;
          box-shadow:0 4px 15px rgba(0,0,0,0.1);
          margin-bottom:35px;
        }

        /* 核心网格布局：电脑端4个，手机端2个 */
        .resource-grid{
          display:grid;
          grid-template-columns:repeat(4, 1fr);
          gap:15px;
        }
        @media(max-width:1200px){.resource-grid{grid-template-columns:repeat(3, 1fr)}}
        @media(max-width:900px){.resource-grid{grid-template-columns:repeat(2, 1fr)}}
        @media(max-width:600px){
          .resource-grid{grid-template-columns:repeat(2, 1fr)}
          .tabs-container{
            flex-direction:column;
            gap:15px;
            align-items:flex-start;
          }
          .tabs{
            flex-wrap:wrap;
            gap:5px;
          }
          .tab-btn{
            font-size:16px;
            padding:6px 10px;
          }
          .tab-divider{
            display:none;
          }
        }

        .card{
          background:#f9fafb;
          border-radius:12px;padding:16px;
          cursor:pointer;
          position:relative;
          display:flex;
          flex-direction:column;
          height:100%;
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
        .card-title{font-weight:bold;margin-bottom:8px;flex:1}
        .card-info{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#666;margin-bottom:10px}
        
        .tag{padding:4px 10px;border-radius:8px;color:#fff;font-size:12px;font-weight:bold}
        .tag-app{background:#3b82f6}
        .tag-ai{background:#8b5cf6}
        .tag-side{background:#10b981}
        
        .card-btn{
          background:#4f46e5;color:#fff;
          text-align:center;padding:8px;border-radius:8px;font-size:13px;font-weight:bold;
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
