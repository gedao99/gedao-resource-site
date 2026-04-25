'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showMoreModal, setShowMoreModal] = useState<{ type: string | null; show: boolean }>({ type: null, show: false });
  const [showInviteModal, setShowInviteModal] = useState(false);

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
      title: "爱影视(爱电影) 永久可用",
      type: "app",
      time: "2026-04-15",
      linkUrl: "https://pan.quark.cn/s/22a54c2c672b",
      desc: "已优化最新版本，无广告",
      top:false ,
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
  title: "MyComic(多源漫画小说)",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/d0ae558ab84e",
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
  title: "23影视4K",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/8ee4a586c44a",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
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
  title: "喵趣(原轻漫岛)",
  type: "app",
  time: "2026-04-20",
  linkUrl: "https://pan.quark.cn/s/67e3d98979d2",
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
      title: "爱电影",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/d6b052f6da40",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "豆丁视频4K",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/af3e669daed8",
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
      title: "红果免费短剧",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/8411fc695654",
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
      title: "漫星海",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/4d7f1c29d1a6",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "七猫免费小说",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/34abf50efc9a",
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
      title: "追番达人",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/e7a237bfbb18",
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
      title: "追忆影视",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/cf98a2fff7ea",
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
      top: true,
    },
  ];

  const sortResources = (list: any[]) => {
    return [...list].sort((a, b) => {
      if (a.top && !b.top) return -1;
      if (!a.top && b.top) return 1;
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    });
  };

  const appList = sortResources(initialResources.filter(item => item.type === 'app'));
  const aiList = sortResources(initialResources.filter(item => item.type === 'ai'));
  const sideList = sortResources(initialResources.filter(item => item.type === 'side'));

  const searchList = (list: any[]) => {
    if (!currentKeyword) return list.slice(0, 3);
    return list.filter(item => item.title.toLowerCase().includes(currentKeyword.toLowerCase()));
  };

  const finalApp = searchList(appList);
  const finalAi = searchList(aiList);
  const finalSide = searchList(sideList);

  const typeMap = {
    app: { name: "📱 软件工具" },
    ai: { name: "🤖 AI教程" },
    side: { name: "💰 副业项目" },
  };

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

        {/* 三列资源布局 */}
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

      {/* 资源详情弹窗 */}
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
        @media(max-width:900px){.columns{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}
