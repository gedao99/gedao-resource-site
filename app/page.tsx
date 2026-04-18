'use client';
import { useState, useEffect } from 'react';
export default function Home() {
  const [currentKeyword, setCurrentKeyword] = useState('');
// 给 selectedItem 加 any 类型（适配资源对象）
const [selectedItem, setSelectedItem] = useState<any>(null);
// 给 showMoreModal 加类型注解，明确 type 可以是字符串或 null
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

  // 资源列表
  const initialResources = [
    {
      title: "【置顶】爱影视(爱电影) 永久可用",
      type: "app",
      time: "2026-04-15",
      linkUrl: "https://pan.quark.cn/s/22a54c2c672b",
      desc: "已优化最新版本，无广告",
      top: true,
    },
    {
  title: "4K剧下饭(原剧下饭、剧永久)",
  type: "app",
  time: "2026-04-19",
  linkUrl: "https://pan.quark.cn/s/123d92d3e60d",
  desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
  top: false,
},
{
  title: "23影视4K",
  type: "app",
  time: "2026-04-19",
  linkUrl: "https://pan.quark.cn/s/89bdaa32c499",
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
  title: "番茄免费小说",
  type: "app",
  time: "2026-04-19",
  linkUrl: "https://pan.quark.cn/s/8ec9f0b3660d",
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
  title: "囧漫漫画",
  type: "app",
  time: "2026-04-19",
  linkUrl: "https://pan.quark.cn/s/6abe6f67f5a9",
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
  title: "喵趣(原轻漫岛)",
  type: "app",
  time: "2026-04-19",
  linkUrl: "https://pan.quark.cn/s/b1f20b964c82",
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
  title: "轻漫岛",
  type: "app",
  time: "2026-04-19",
  linkUrl: "https://pan.quark.cn/s/0c03fc42af24",
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
  type: "ai",
  time: "2026-04-19",
  linkUrl: "https://pan.baidu.com/s/1fBt69UXFJycWB2H0MKQUgg?pwd=uyhp",
  desc: "21天AI真人短剧全流程实战，从剧本→分镜→生成→剪辑，小白也能做出电影感短剧！",
  top: false,
},
{
  title: "Ai漫剧制作全流程",
  type: "ai",
  time: "2026-04-19",
  linkUrl: "https://pan.quark.cn/s/f6ddc7055054",
  desc: "AI漫剧制作全流程实战教学，零基础快速成片，高效批量产出高质量漫剧内容！",
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
      title: "抖音破解版无水印",
      type: "app",
      time: "2026-04-16",
      linkUrl: "",
      desc: "",
      top: false,
    },
    {
      title: "壁纸多多",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/e3e35ac4b538",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "伴奏大师",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/8fb05718a7f9",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "壁纸酷酷",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/7971af8c9d7c",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "暴走P图",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/fd6a7f9f3dc5",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "不做手机控",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/1bb208c7fde6",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "壁纸秀秀",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/b4baaac0139c",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "八爪鱼遥控",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/0ee65d87921e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "标志制造商(logo制作)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/4e6781e92785",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "CAD",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/2340aee6bb11",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "CAD看图大师",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/1a3c239b77e9",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "CAD看图王(国际版)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/e8f1c3f0642e",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "CAD手机看图",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/24ee75565a4b",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "CC加速器",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/93fad008d99a",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "常读免费小说",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/da0087652e76",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "词根单词",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/9300baaa90fc",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "橙光视频",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/ae7dd40aa3c2",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Chat Smith",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/1ff29ddbb219",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "ChatAI AI Chatbot(AI聊天支持gpt4o，AI绘图)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/e465d06ec572",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Chatbot 4.o AI(AI聊天)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/ad1cc3a703bd",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Chatbot AI(AI聊天支持GPT4o)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/6458ff5c096d",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "ChatOn(AI聊天)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/5ba33ea564ac",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Chic相机",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/2c47bf62b49b",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "彩虹视频",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/3467c65a4945",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Cimoc(内置多源漫画)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/690dc08b632f",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "测距测量仪",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/ee48557403c5",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "超级单词表",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/d0b4d5c7c0f7",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "超级格式转换工厂",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/410e149910f2",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "超级计算器 (多功能计算器+记账)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/f457dee85b29",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "超级截图录屏大师",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/4058432f51e4",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "超级录音机",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/3313d0203c2d",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "超级音乐编辑器",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/76dc159dd01f",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "ClevNote(笔记)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/db3cd89a913f",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "CliCli动漫",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/180f4be9a45b",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "车来了",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/e2859cc80770",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Clone App(小X分身国际版)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/eb21178b1ccd",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "测亩宝",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/9012c5c713be",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "朝暮计划",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/8c76a2858d19",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "创漫客(酷漫熊新版)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/1e39ffdc26c9",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "Coffee4K(咖啡4k)",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/60715e081108",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
    {
      title: "COLA漫画",
      type: "app",
      time: "2026-04-19",
      linkUrl: "https://pan.quark.cn/s/138db592eaed",
      desc: "已优化最新版本；关注公众号【格道黑科技】，及时获取每日更新信息！",
      top: false,
    },
  ];

  const sortResources = (list) => {
    return [...list].sort((a, b) => {
      if (a.top && !b.top) return -1;
      if (!a.top && b.top) return 1;
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    });
  };

  const appList = sortResources(initialResources.filter(item => item.type === 'app'));
  const aiList = sortResources(initialResources.filter(item => item.type === 'ai'));
  const sideList = sortResources(initialResources.filter(item => item.type === 'side'));

  const searchList = (list) => {
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

  const getMoreResources = (type) => {
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
            本站资源完全免费分享，如果你也觉得还不错，不妨将本网站转发给有需要的朋友；资源每日更新明细请关注公众号【格道黑科技】。
          </div>
        </div>

        {/* 搜索框 */}
        <div className="search">
          <input
            value={currentKeyword}
            onChange={(e) => setCurrentKeyword(e.value)}
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
                    <span className={`tag tag-${item.type}`}>{typeMap[item.type].name}</span>
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
                    <span className={`tag tag-${item.type}`}>{typeMap[item.type].name}</span>
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
                    <span className={`tag tag-${item.type}`}>{typeMap[item.type].name}</span>
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
              <span>{typeMap[selectedItem.type].name}</span>
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
            <h1 className="modal-title">{typeMap[showMoreModal.type]?.name || "全部资源"}</h1>
            <div className="list">
              {getMoreResources(showMoreModal.type).map((item, index) => (
                <div key={index} className={`card ${item.top ? 'card-top' : ''}`} onClick={() => { setSelectedItem(item); setShowMoreModal({ type: null, show: false }); }}>
                  {item.top && <div className="top-tag">置顶</div>}
                  <div className="card-title">{item.title}</div>
                  <div className="card-info">
                    <span className={`tag tag-${item.type}`}>{typeMap[item.type].name}</span>
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
