'use client';
import { useState, useMemo } from 'react';

export default function Home() {
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showMoreModal, setShowMoreModal] = useState<{ type: string | null; show: boolean }>({ type: null, show: false });

  // ====================== 资源列表（可置顶）======================
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
    }
    // 👇 你要加的新资源，就按上面的格式，放在这里！
    // 注意：最后一个资源后面，绝对不能加逗号！
  ];

  // ====================== 搜索过滤逻辑 ======================
  const resources = useMemo(() => {
    if (!currentKeyword) return initialResources;
    const keyword = currentKeyword.toLowerCase();
    return initialResources.filter(item => 
      item.title.toLowerCase().includes(keyword) || 
      item.desc.toLowerCase().includes(keyword)
    );
  }, [currentKeyword]);

  // ====================== 分类统计 ======================
  const categoryCount = useMemo(() => {
    const count: Record<string, number> = {};
    initialResources.forEach(item => {
      count[item.type] = (count[item.type] || 0) + 1;
    });
    return count;
  }, []);

  // ====================== 页面渲染 ======================
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* 头部 */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            格道黑科技资源站
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            每日更新优质软件、教程、工具，关注公众号【格道黑科技】获取更多
          </p>
        </header>

        {/* 搜索框 */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="🔍 搜索资源（输入软件名/关键词）..."
              value={currentKeyword}
              onChange={(e) => setCurrentKeyword(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-gray-800/80 backdrop-blur border border-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            {currentKeyword && (
              <button
                onClick={() => setCurrentKeyword('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 分类统计 */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {Object.entries(categoryCount).map(([type, count]) => (
            <div
              key={type}
              className="px-6 py-3 rounded-xl bg-gray-800/60 backdrop-blur border border-gray-700 text-white"
            >
              <span className="font-bold text-blue-400">{type}</span>
              <span className="ml-2 text-gray-300">({count})</span>
            </div>
          ))}
        </div>

        {/* 资源列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border ${
                item.top 
                  ? 'bg-gradient-to-r from-yellow-900/80 to-orange-900/80 border-yellow-500/50' 
                  : 'bg-gray-800/60 backdrop-blur border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {item.top && (
                    <span className="px-2 py-1 bg-yellow-500 text-xs font-bold rounded text-black">
                      置顶
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                    {item.type}
                  </span>
                </div>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                <span>点击查看详情</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态 */}
        {resources.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">未找到相关资源</h3>
            <p className="text-gray-400">试试其他关键词吧~</p>
          </div>
        )}

        {/* 详情弹窗 */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="bg-gray-800 rounded-2xl p-6 md:p-8 max-w-2xl w-full border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {selectedItem.top && (
                      <span className="px-2 py-1 bg-yellow-500 text-xs font-bold rounded text-black">
                        置顶
                      </span>
                    )}
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                      {selectedItem.type}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedItem.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">更新时间</p>
                  <p className="text-white">{selectedItem.time}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">资源描述</p>
                  <p className="text-white whitespace-pre-line">{selectedItem.desc}</p>
                </div>
              </div>

              <a
                href={selectedItem.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                🚀 立即获取（夸克网盘）
              </a>
            </div>
          </div>
        )}

        {/* 底部 */}
        <footer className="text-center mt-12 text-gray-400 text-sm">
          <p>© 2026 格道黑科技 | 关注公众号【格道黑科技】获取每日更新</p>
          <p className="mt-2">本网站仅做资源分享，请勿用于商业用途</p>
        </footer>
      </div>
    </div>
  );
}
