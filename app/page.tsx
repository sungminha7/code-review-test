export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Claude Code
            </a>
            <a
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              회사 소개
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Claude Code
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Anthropic의 공식 AI 코딩 어시스턴트
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://docs.claude.com/en/docs/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              시작하기
            </a>
            <a
              href="https://github.com/anthropics/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              빠른 개발
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI의 도움으로 코드를 더 빠르게 작성하고 디버깅할 수 있습니다.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              스마트한 제안
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              컨텍스트를 이해하고 최적의 코드 솔루션을 제안합니다.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              강력한 도구
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              파일 편집, 코드 분석, 테스트 실행 등 다양한 기능을 지원합니다.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            주요 기능
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <span>코드 생성 및 수정: 자연어로 요청하면 AI가 코드를 작성하고 수정합니다</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <span>버그 수정: 에러 메시지를 분석하고 해결 방법을 제안합니다</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <span>코드 리뷰: 코드 품질을 분석하고 개선 사항을 제안합니다</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <span>테스트 작성: 자동으로 단위 테스트와 통합 테스트를 생성합니다</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <span>리팩토링: 코드 구조를 개선하고 최적화합니다</span>
            </li>
          </ul>
        </div>

        {/* Getting Started */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            설치 방법
          </h2>
          <div className="bg-gray-900 dark:bg-black rounded-lg p-6 mb-4">
            <code className="text-green-400 font-mono">
              npm install -g @anthropic-ai/claude-code
            </code>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            또는 npx로 바로 실행:
          </p>
          <div className="bg-gray-900 dark:bg-black rounded-lg p-6">
            <code className="text-green-400 font-mono">
              npx @anthropic-ai/claude-code
            </code>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>
            Made with Claude Code |{' '}
            <a
              href="https://www.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              Anthropic
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
