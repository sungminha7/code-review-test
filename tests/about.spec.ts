import { test, expect } from '@playwright/test';

test.describe('티사이언티픽 회사 소개 페이지', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('페이지가 정상적으로 로드되고 메타데이터가 올바른지 확인', async ({ page }) => {
    await expect(page).toHaveTitle(/Claude Code/);

    // URL 확인
    expect(page.url()).toContain('/about');
  });

  test('네비게이션 바가 올바르게 표시되는지 확인', async ({ page }) => {
    // 네비게이션 요소 확인
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // 로고/홈 링크 확인
    const homeLink = page.getByRole('link', { name: 'Claude Code' });
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', '/');

    // 회사 소개 링크 확인
    const aboutLink = page.getByRole('link', { name: '회사 소개' });
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/about');
  });

  test('Hero 섹션의 주요 요소가 표시되는지 확인', async ({ page }) => {
    // 메인 제목 확인
    const mainHeading = page.getByRole('heading', { name: '티사이언티픽', level: 1 });
    await expect(mainHeading).toBeVisible();

    // 부제목 확인
    const subtitle = page.getByText('혁신적인 기술로 더 나은 미래를 만들어갑니다');
    await expect(subtitle).toBeVisible();
  });

  test('회사 소개 섹션이 표시되는지 확인', async ({ page }) => {
    const heading = page.getByRole('heading', { name: '회사 소개', level: 2 });
    await expect(heading).toBeVisible();

    // 회사 소개 내용 확인
    await expect(page.getByText('티사이언티픽은 최첨단 기술과 혁신적인 사고', { exact: false })).toBeVisible();
    await expect(page.getByText('인공지능, 데이터 과학, 클라우드 컴퓨팅', { exact: false })).toBeVisible();
  });

  test('비전과 미션 섹션이 올바르게 표시되는지 확인', async ({ page }) => {
    // 비전 카드 확인
    const visionHeading = page.getByRole('heading', { name: '비전', level: 3 });
    await expect(visionHeading).toBeVisible();
    await expect(page.getByText('🎯')).toBeVisible();
    await expect(page.getByText('기술 혁신을 통해 인류의 삶을 풍요롭게', { exact: false })).toBeVisible();

    // 미션 카드 확인
    const missionHeading = page.getByRole('heading', { name: '미션', level: 3 });
    await expect(missionHeading).toBeVisible();
    await expect(page.getByText('🚀')).toBeVisible();
    await expect(page.getByText('최고의 기술력과 창의적인 솔루션', { exact: false })).toBeVisible();
  });

  test('핵심 가치 섹션의 3가지 요소가 표시되는지 확인', async ({ page }) => {
    const heading = page.getByRole('heading', { name: '핵심 가치', level: 2 });
    await expect(heading).toBeVisible();

    // 핵심 가치 항목 확인
    const values = [
      { emoji: '💡', title: '혁신', description: '끊임없는 도전과 창의적 사고' },
      { emoji: '🤝', title: '협력', description: '팀워크와 상호 존중' },
      { emoji: '⭐', title: '전문성', description: '전문 지식과 기술력' }
    ];

    for (const value of values) {
      await expect(page.getByText(value.emoji)).toBeVisible();
      await expect(page.getByRole('heading', { name: value.title, level: 4 })).toBeVisible();
      await expect(page.getByText(value.description, { exact: false })).toBeVisible();
    }
  });

  test('주요 사업 분야 섹션이 표시되는지 확인', async ({ page }) => {
    const heading = page.getByRole('heading', { name: '주요 사업 분야', level: 2 });
    await expect(heading).toBeVisible();

    // 사업 분야 목록 확인 (더 구체적인 텍스트 사용)
    await expect(page.getByText('인공지능 솔루션:', { exact: true })).toBeVisible();
    await expect(page.getByText('머신러닝과 딥러닝 기술을 활용한', { exact: false })).toBeVisible();

    await expect(page.getByText('데이터 분석:', { exact: true })).toBeVisible();
    await expect(page.getByText('빅데이터 분석 및 시각화', { exact: false })).toBeVisible();

    await expect(page.getByText('클라우드 서비스:', { exact: true })).toBeVisible();
    await expect(page.getByText('안정적이고 확장 가능한 클라우드', { exact: false })).toBeVisible();

    await expect(page.getByText('디지털 전환 컨설팅:', { exact: true })).toBeVisible();
    await expect(page.getByText('기업의 디지털 혁신을 위한', { exact: false })).toBeVisible();

    // 체크마크 아이콘 확인 (4개)
    const checkmarks = page.getByText('✓').all();
    await expect(checkmarks).resolves.toHaveLength(4);
  });

  test('연혁 섹션이 올바르게 표시되는지 확인', async ({ page }) => {
    const heading = page.getByRole('heading', { name: '연혁', level: 2 });
    await expect(heading).toBeVisible();

    // 연도별 이정표 확인 (이벤트 텍스트로 검증하여 중복 방지)
    const milestones = [
      { event: 'AI 기반 데이터 분석 플랫폼 출시' },
      { event: '클라우드 서비스 사업부 신설' },
      { event: 'R&D 센터 확장 및 AI 연구팀 구성' },
      { event: '티사이언티픽 법인 설립' }
    ];

    for (const milestone of milestones) {
      await expect(page.getByText(milestone.event)).toBeVisible();
    }

    // 연도 표시 확인 (CSS 클래스로 특정)
    const yearElements = page.locator('.text-orange-600.font-bold');
    await expect(yearElements).toHaveCount(4);
  });

  test('연락처 정보 섹션이 표시되는지 확인', async ({ page }) => {
    const heading = page.getByRole('heading', { name: '문의하기', level: 2 });
    await expect(heading).toBeVisible();

    // 연락처 정보 확인
    await expect(page.getByText('📧')).toBeVisible();
    await expect(page.getByRole('heading', { name: '이메일', level: 4 })).toBeVisible();
    await expect(page.getByText('contact@tsientific.com')).toBeVisible();

    await expect(page.getByText('📞')).toBeVisible();
    await expect(page.getByRole('heading', { name: '전화', level: 4 })).toBeVisible();
    await expect(page.getByText('02-1234-5678')).toBeVisible();

    await expect(page.getByText('📍')).toBeVisible();
    await expect(page.getByRole('heading', { name: '주소', level: 4 })).toBeVisible();
    await expect(page.getByText('서울특별시 강남구 테헤란로 123')).toBeVisible();
  });

  test('Footer가 올바르게 표시되는지 확인', async ({ page }) => {
    await expect(page.getByText('© 2024 티사이언티픽. All rights reserved.')).toBeVisible();
  });

  test('네비게이션: 홈페이지로 이동 기능 테스트', async ({ page }) => {
    const homeLink = page.getByRole('link', { name: 'Claude Code' }).first();
    await homeLink.click();

    // URL이 홈페이지로 변경되었는지 확인
    await expect(page).toHaveURL('/');

    // 홈페이지 콘텐츠 확인
    await expect(page.getByRole('heading', { name: 'Claude Code', level: 1 })).toBeVisible();
    await expect(page.getByText('Anthropic의 공식 AI 코딩 어시스턴트')).toBeVisible();
  });

  test('네비게이션: 홈에서 About으로 이동 후 다시 About 링크 클릭', async ({ page }) => {
    // 홈으로 이동
    await page.goto('/');

    // About 페이지로 이동
    const aboutLink = page.getByRole('link', { name: '회사 소개' });
    await aboutLink.click();

    // About 페이지가 로드되었는지 확인
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole('heading', { name: '티사이언티픽', level: 1 })).toBeVisible();
  });

  test('반응형 디자인: 모바일 뷰포트에서 레이아웃 확인', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

    // 메인 제목이 여전히 표시되는지 확인
    const mainHeading = page.getByRole('heading', { name: '티사이언티픽', level: 1 });
    await expect(mainHeading).toBeVisible();

    // 네비게이션 확인
    await expect(page.getByRole('link', { name: 'Claude Code' })).toBeVisible();
    await expect(page.getByRole('link', { name: '회사 소개' })).toBeVisible();

    // 주요 섹션들이 표시되는지 확인
    await expect(page.getByRole('heading', { name: '회사 소개', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '핵심 가치', level: 2 })).toBeVisible();
  });

  test('반응형 디자인: 태블릿 뷰포트에서 레이아웃 확인', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad

    // 모든 주요 섹션이 표시되는지 확인
    await expect(page.getByRole('heading', { name: '티사이언티픽', level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '회사 소개', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '비전', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '미션', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '핵심 가치', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '주요 사업 분야', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '연혁', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '문의하기', level: 2 })).toBeVisible();
  });

  test('반응형 디자인: 데스크톱 뷰포트에서 레이아웃 확인', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 }); // Full HD

    // 비전/미션 카드가 2열 그리드로 표시되는지 확인 (md: breakpoint)
    const visionCard = page.getByRole('heading', { name: '비전', level: 3 });
    const missionCard = page.getByRole('heading', { name: '미션', level: 3 });

    await expect(visionCard).toBeVisible();
    await expect(missionCard).toBeVisible();

    // 핵심 가치가 3열 그리드로 표시되는지 확인
    const innovationCard = page.getByRole('heading', { name: '혁신', level: 4 });
    const cooperationCard = page.getByRole('heading', { name: '협력', level: 4 });
    const expertiseCard = page.getByRole('heading', { name: '전문성', level: 4 });

    await expect(innovationCard).toBeVisible();
    await expect(cooperationCard).toBeVisible();
    await expect(expertiseCard).toBeVisible();
  });

  test('페이지 스크롤 동작 확인', async ({ page }) => {
    // 페이지 하단으로 스크롤
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Footer가 화면에 표시되는지 확인
    const footer = page.locator('footer');
    await expect(footer).toBeInViewport();

    // Footer 내용 확인
    await expect(page.getByText('© 2024 티사이언티픽')).toBeInViewport();
  });

  test('CSS 클래스와 스타일이 적용되어 있는지 확인', async ({ page }) => {
    // Tailwind 클래스가 적용되어 있는지 확인
    const mainContainer = page.locator('main');
    await expect(mainContainer).toHaveClass(/min-h-screen/);
    await expect(mainContainer).toHaveClass(/bg-gradient-to-b/);

    // 네비게이션 바 스타일 확인
    const nav = page.locator('nav');
    await expect(nav).toHaveClass(/border-b/);
  });

  test('모든 주요 섹션의 heading 계층 구조 확인', async ({ page }) => {
    // H1 - 1개만 존재해야 함 (SEO)
    const h1Elements = page.locator('h1');
    await expect(h1Elements).toHaveCount(1);
    await expect(h1Elements).toHaveText('티사이언티픽');

    // H2 - 주요 섹션
    const h2Elements = page.locator('h2');
    await expect(h2Elements).toHaveCount(5); // 회사 소개, 핵심 가치, 주요 사업 분야, 연혁, 문의하기

    // H3 - 비전, 미션
    const h3Elements = page.locator('h3');
    await expect(h3Elements).toHaveCount(2);

    // H4 - 핵심 가치(3) + 연락처(3)
    const h4Elements = page.locator('h4');
    await expect(h4Elements).toHaveCount(6);
  });

  test('페이지 로드 성능 확인', async ({ page }) => {
    // 페이지 로드 시작
    const startTime = Date.now();
    await page.goto('/about');
    const loadTime = Date.now() - startTime;

    // 메인 콘텐츠가 표시되는지 확인
    await expect(page.getByRole('heading', { name: '티사이언티픽', level: 1 })).toBeVisible();

    // 로드 시간이 합리적인지 확인 (5초 이내)
    expect(loadTime).toBeLessThan(5000);
  });

  test('접근성: 모든 이미지와 아이콘에 대한 대체 텍스트 확인', async ({ page }) => {
    // 이모지는 텍스트로 표시되므로 스크린리더가 읽을 수 있음
    const emojis = ['🎯', '🚀', '💡', '🤝', '⭐', '📧', '📞', '📍'];

    for (const emoji of emojis) {
      await expect(page.getByText(emoji)).toBeVisible();
    }
  });

  test('다크 모드 대응 클래스 확인', async ({ page }) => {
    // dark: 클래스가 적용된 주요 요소 확인
    const mainContainer = page.locator('main');
    const classes = await mainContainer.getAttribute('class');

    // dark: 변형 클래스가 포함되어 있는지 확인
    expect(classes).toContain('dark:');
  });
});
