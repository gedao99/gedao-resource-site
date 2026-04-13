import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '格道资源站',
  description: '分享破解版APP、AI教程、副业资源',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
