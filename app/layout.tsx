import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Claude Code - AI-Powered Coding Assistant',
  description: 'Anthropic의 공식 CLI 도구인 Claude Code를 소개합니다. AI와 함께 더 효율적으로 코딩하세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
