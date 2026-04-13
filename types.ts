export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'cracked-app' | 'ai-tutorial' | 'side-hustle';
  downloadUrl: string;
  imageUrl?: string;
  createdAt: string;
}

export type Category = 'cracked-app' | 'ai-tutorial' | 'side-hustle';

export const categories = {
  'cracked-app': { name: '破解版APP资源', color: '#ff6b6b', icon: '📱' },
  'ai-tutorial': { name: 'AI学习教程', color: '#4ecdc4', icon: '🤖' },
  'side-hustle': { name: '副业资源', color: '#45b7d1', icon: '💰' }
};
