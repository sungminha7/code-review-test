import { test, expect } from '@playwright/test';

test.describe('Claude Code 홈페이지', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('페이지가 정상적으로 로드되고 메타데이터가 올바른지 확인', async ({ page }) => {
    await expect(page).toHaveTitle(/Claude Code/);

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      'content',
      /Anthropic.*Claude Code/
    );
  });

  test('Hero 섹션의 주요 요소가 표시되는지 확인', async ({ page }) => {
    // 메인 제목 확인
    const mainHeading = page.getByRole('heading', { name: 'Claude Code', level: 1 });
    await expect(mainHeading).toBeVisible();

    // 부제목 확인
    const subtitle = page.getByText('Anthropic의 공식 AI 코딩 어시스턴트');
    await expect(subtitle).toBeVisible();

    // CTA 버튼 확인
    const startButton = page.getByRole('link', { name: '시작하기' });
    await expect(startButton).toBeVisible();
    await expect(startButton).toHaveAttribute('href', 'https://docs.claude.com/en/docs/claude-code');

    const githubButton = page.getByRole('link', { name: 'GitHub' });
    await expect(githubButton).toBeVisible();
    await expect(githubButton).toHaveAttribute('href', 'https://github.com/anthropics/claude-code');
  });

  test('3개의 기능 카드가 올바르게 표시되는지 확인', async ({ page }) => {
    // 기능 카드 헤딩 확인
    const featureHeadings = [
      '빠른 개발',
      '스마트한 제안',
      '강력한 도구'
    ];

    for (const heading of featureHeadings) {
      const card = page.getByRole('heading', { name: heading, level: 3 });
      await expect(card).toBeVisible();
    }

    // 이모지 아이콘 확인
    await expect(page.getByText('🚀')).toBeVisible();
    await expect(page.getByText('💡')).toBeVisible();
    await expect(page.getByText('🔧')).toBeVisible();
  });

  test('주요 기능 섹션이 표시되는지 확인', async ({ page }) => {
    const keyFeaturesHeading = page.getByRole('heading', { name: '주요 기능', level: 2 });
    await expect(keyFeaturesHeading).toBeVisible();

    // 주요 기능 목록 확인
    const features = [
      '코드 생성 및 수정',
      '버그 수정',
      '코드 리뷰',
      '테스트 작성',
      '리팩토링'
    ];

    for (const feature of features) {
      await expect(page.getByText(feature, { exact: false })).toBeVisible();
    }
  });

  test('설치 방법 섹션이 표시되는지 확인', async ({ page }) => {
    const installHeading = page.getByRole('heading', { name: '설치 방법', level: 2 });
    await expect(installHeading).toBeVisible();

    // 설치 명령어 확인
    await expect(page.getByText('npm install -g @anthropic-ai/claude-code')).toBeVisible();
    await expect(page.getByText('npx @anthropic-ai/claude-code')).toBeVisible();
  });

  test('Footer가 올바르게 표시되는지 확인', async ({ page }) => {
    await expect(page.getByText('Made with Claude Code')).toBeVisible();

    const anthropicLink = page.getByRole('link', { name: 'Anthropic' });
    await expect(anthropicLink).toBeVisible();
    await expect(anthropicLink).toHaveAttribute('href', 'https://www.anthropic.com');
  });

  test('외부 링크가 새 탭에서 열리도록 설정되어 있는지 확인', async ({ page }) => {
    const externalLinks = [
      page.getByRole('link', { name: '시작하기' }),
      page.getByRole('link', { name: 'GitHub' }),
      page.getByRole('link', { name: 'Anthropic' })
    ];

    for (const link of externalLinks) {
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  test('반응형 디자인: 모바일 뷰포트에서 레이아웃 확인', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

    // 메인 제목이 여전히 표시되는지 확인
    const mainHeading = page.getByRole('heading', { name: 'Claude Code', level: 1 });
    await expect(mainHeading).toBeVisible();

    // CTA 버튼들이 표시되는지 확인
    await expect(page.getByRole('link', { name: '시작하기' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();
  });

  test('반응형 디자인: 태블릿 뷰포트에서 레이아웃 확인', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad

    // 모든 주요 섹션이 표시되는지 확인
    await expect(page.getByRole('heading', { name: 'Claude Code', level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '주요 기능', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '설치 방법', level: 2 })).toBeVisible();
  });

  test('페이지 스크롤 동작 확인', async ({ page }) => {
    // 페이지 하단으로 스크롤
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Footer가 화면에 표시되는지 확인
    const footer = page.locator('footer');
    await expect(footer).toBeInViewport();
  });

  test('CSS 클래스와 스타일이 적용되어 있는지 확인', async ({ page }) => {
    // Tailwind 클래스가 적용되어 있는지 확인
    const mainContainer = page.locator('main');
    await expect(mainContainer).toHaveClass(/min-h-screen/);
    await expect(mainContainer).toHaveClass(/bg-gradient-to-b/);
  });
});
