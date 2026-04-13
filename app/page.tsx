'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Resource, categories, Category } from '@/types';

export default function Home() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch('/api/resources');
      const data = await response.json();
      setResources(data.resources || []);
    } catch (error) {
      console.error('获取资源失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  const getCategoryStyle = (category: string) => {
    const cat = categories[category as Category];
    return { backgroundColor: cat?.color || '#999' };
  };

  const getCategoryName = (category: string) => {
    return categories[category as Category]?.name || category;
  };

  const getCategoryIcon = (category: string) => {
    return categories[category as Category]?.icon || '📦';
  };

  return (
    <main>
      <Link href="/admin" className="admin-link">
        🔐 管理后台
      </Link>

      <div className="header">
        <h1>🎯 格道资源站</h1>
        <p>分享破解版APP、AI教程、副业资源</p>
      </div>

      <div className="container">
        <div className="category-filter">
          <button 
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            📋 全部资源
          </button>
          {Object.entries(categories).map(([key, value]) => (
            <button 
              key={key}
              className={`category-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key as Category)}
              style={{ borderLeft: `4px solid ${value.color}` }}
            >
              {value.icon} {value.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="empty-state">
            <h3>⏳ 加载中...</h3>
          </div>
        ) : filteredResources.length === 0 ? (
          <div className="empty-state">
            <h3>📭 暂无资源</h3>
            <p>管理员正在整理资源，请稍后再来~</p>
          </div>
        ) : (
          <div className="resources-grid">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="resource-card">
                {resource.imageUrl ? (
                  <img 
                    src={resource.imageUrl} 
                    alt={resource.title}
                    className="resource-image"
                  />
                ) : (
                  <div className="resource-image-placeholder">
                    {getCategoryIcon(resource.category)}
                  </div>
                )}
                <div className="resource-content">
                  <span 
                    className="resource-category"
                    style={getCategoryStyle(resource.category)}
                  >
                    {getCategoryName(resource.category)}
                  </span>
                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-desc">{resource.description}</p>
                  <a 
                    href={resource.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    📥 立即获取
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
