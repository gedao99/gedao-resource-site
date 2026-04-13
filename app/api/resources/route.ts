import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from 'path';
import { Resource } from '@/types';

const DATA_FILE = join(process.cwd(), 'data', 'resources.json');

// 读取资源数据
async function readResources(): Promise<{ resources: Resource[] }> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return { resources: [] };
  }
}

// 写入资源数据
async function writeResources(data: { resources: Resource[] }) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// GET - 获取所有资源
export async function GET() {
  try {
    const data = await readResources();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: '读取失败' }, { status: 500 });
  }
}

// POST - 添加新资源
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, category, downloadUrl, imageUrl } = body;

    if (!title || !description || !category || !downloadUrl) {
      return NextResponse.json({ error: '缺少必填字段' }, { status: 400 });
    }

    const data = await readResources();

    const newResource: Resource = {
      id: Date.now().toString(),
      title,
      description,
      category,
      downloadUrl,
      imageUrl: imageUrl || '',
      createdAt: new Date().toISOString()
    };

    data.resources.unshift(newResource);
    await writeResources(data);

    return NextResponse.json({ success: true, resource: newResource });
  } catch (error) {
    return NextResponse.json({ error: '添加失败' }, { status: 500 });
  }
}

// DELETE - 删除资源
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: '缺少ID' }, { status: 400 });
    }

    const data = await readResources();
    data.resources = data.resources.filter(r => r.id !== id);
    await writeResources(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: '删除失败' }, { status: 500 });
  }
}
