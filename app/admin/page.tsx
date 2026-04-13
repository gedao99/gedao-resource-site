'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Resource, categories, Category } from '@/types';

const ADMIN_PASSWORD = 'gedao2024'; // 管理密码，你可以修改

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [resources, setResources] = useState<Resource[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'cracked-app' as Category,
    downloadUrl: '',
    imageUrl: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      fetchResources();
    }
  }, [isLoggedIn]);

  const fetchResources = async () => {
    try {
      const response = await fetch('/api/resources');
      const data = await response.json();
      setResources(data.resources || []);
    } catch (error) {
      console.error('获取资源失败:', error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('密码错误，请重试');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage('✅ 资源添加成功！');
        setFormData({
          title: '',
          description: '',
          category: 'cracked-app',
          downloadUrl: '',
          imageUrl: ''
        });
        fetchResources();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('❌ 添加失败，请重试');
      }
    } catch (error) {
      setMessage('❌ 网络错误，请重试');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个资源吗？')) return;

    try {
      const response = await fetch(`/api/resources?id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchResources();
      }
    } catch (error) {
      console.error('删除失败:', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-form">
        <h2>🔐 管理员登录</h2>
        {loginError && <p className="error-msg">{loginError}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>管理密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入管理密码"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            登录
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '0.9rem' }}>
          <Link href="/" style={{ color: '#667eea' }}>← 返回首页</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <Link href="/" className="back-link">← 返回首页</Link>

      <div className="admin-box">
        <h2 className="admin-title">📝 添加新资源</h2>

        {message && <p style={{ textAlign: 'center', marginBottom: '20px', color: message.includes('✅') ? '#4caf50' : '#ff6b6b' }}>{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>资源标题 *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="例如：Photoshop 2024 破解版"
              required
            />
          </div>

          <div className="form-group">
            <label>资源分类 *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value as Category})}
              required
            >
              <option value="cracked-app">📱 破解版APP资源</option>
              <option value="ai-tutorial">🤖 AI学习教程</option>
              <option value="side-hustle">💰 副业资源</option>
            </select>
          </div>

          <div className="form-group">
            <label>资源描述 *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="详细描述这个资源的内容、版本、使用方法等..."
              required
            />
          </div>

          <div className="form-group">
            <label>网盘链接 *</label>
            <input
              type="url"
              value={formData.downloadUrl}
              onChange={(e) => setFormData({...formData, downloadUrl: e.target.value})}
              placeholder="https://pan.baidu.com/s/xxxxx 或 https://pan.quark.cn/xxxxx"
              required
            />
          </div>

          <div className="form-group">
            <label>图片链接（可选）</label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
              placeholder="https://example.com/image.jpg（没有则留空）"
            />
          </div>

          <button type="submit" className="submit-btn">
            ➕ 添加资源
          </button>
        </form>

        <div className="resource-list">
          <h3>📋 现有资源列表（{resources.length}个）</h3>
          {resources.map((resource) => (
            <div key={resource.id} className="resource-item">
              <div className="resource-item-info">
                <h4>{resource.title}</h4>
                <span>{categories[resource.category]?.name} | {new Date(resource.createdAt).toLocaleDateString()}</span>
              </div>
              <button 
                className="delete-btn"
                onClick={() => handleDelete(resource.id)}
              >
                删除
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
