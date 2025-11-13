export default function About() {
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
            티사이언티픽
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            혁신적인 기술로 더 나은 미래를 만들어갑니다
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            회사 소개
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            티사이언티픽은 최첨단 기술과 혁신적인 사고를 바탕으로 다양한 산업 분야에서 가치를 창출하는 기업입니다.
            우리는 인공지능, 데이터 과학, 클라우드 컴퓨팅 등의 기술을 활용하여 고객의 비즈니스 성장을 지원합니다.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            지속 가능한 성장과 사회적 가치 창출을 목표로 하며, 끊임없는 연구개발을 통해
            업계를 선도하는 기술 기업으로 자리매김하고 있습니다.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              비전
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              기술 혁신을 통해 인류의 삶을 풍요롭게 하고,
              지속 가능한 미래를 만드는 글로벌 기술 리더가 되겠습니다.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              미션
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              최고의 기술력과 창의적인 솔루션으로 고객의 성공을 실현하고,
              사회에 긍정적인 영향을 미치는 혁신을 지속적으로 추구합니다.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            핵심 가치
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                혁신
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                끊임없는 도전과 창의적 사고로 새로운 가치를 창출합니다
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                협력
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                팀워크와 상호 존중을 바탕으로 함께 성장합니다
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                전문성
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                전문 지식과 기술력으로 최고의 결과를 제공합니다
              </p>
            </div>
          </div>
        </div>

        {/* Business Areas */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            주요 사업 분야
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <div>
                <strong>인공지능 솔루션:</strong> 머신러닝과 딥러닝 기술을 활용한 맞춤형 AI 솔루션 개발
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <div>
                <strong>데이터 분석:</strong> 빅데이터 분석 및 시각화를 통한 비즈니스 인사이트 제공
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <div>
                <strong>클라우드 서비스:</strong> 안정적이고 확장 가능한 클라우드 인프라 구축 및 운영
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-xl">✓</span>
              <div>
                <strong>디지털 전환 컨설팅:</strong> 기업의 디지털 혁신을 위한 전략 수립 및 실행 지원
              </div>
            </li>
          </ul>
        </div>

        {/* History */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            연혁
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-600 pl-4">
              <div className="text-orange-600 font-bold mb-1">2024</div>
              <p className="text-gray-700 dark:text-gray-300">
                AI 기반 데이터 분석 플랫폼 출시
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <div className="text-orange-600 font-bold mb-1">2023</div>
              <p className="text-gray-700 dark:text-gray-300">
                클라우드 서비스 사업부 신설
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <div className="text-orange-600 font-bold mb-1">2022</div>
              <p className="text-gray-700 dark:text-gray-300">
                R&D 센터 확장 및 AI 연구팀 구성
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <div className="text-orange-600 font-bold mb-1">2021</div>
              <p className="text-gray-700 dark:text-gray-300">
                티사이언티픽 법인 설립
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            문의하기
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📧</div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">이메일</h4>
              <p className="text-gray-600 dark:text-gray-400">
                contact@tsientific.com
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">전화</h4>
              <p className="text-gray-600 dark:text-gray-400">
                02-1234-5678
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">주소</h4>
              <p className="text-gray-600 dark:text-gray-400">
                서울특별시 강남구 테헤란로 123
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>
            © 2024 티사이언티픽. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
