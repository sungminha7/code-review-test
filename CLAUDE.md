# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 14** landing page showcasing Claude Code, built with the App Router architecture, TypeScript, and Tailwind CSS. It's a single-page application with Korean localization featuring hero sections, feature cards, and installation instructions.

## Architecture

### Next.js App Router Structure
- **App Directory**: Uses Next.js 14 App Router (not Pages Router)
- **File-based Routing**: Each route is defined by folders in `app/`
- **Server Components by Default**: All components are React Server Components unless explicitly marked with `"use client"`
- **Root Layout**: `app/layout.tsx` wraps all pages with shared metadata and HTML structure
- **Korean Language**: Site is localized in Korean (`lang="ko"`)

### Styling Architecture
- **Tailwind CSS**: Utility-first CSS framework with dark mode support via `dark:` prefix
- **CSS Variables**: Root-level CSS variables in `app/globals.css` for theming (`--background`, `--foreground`)
- **Responsive Design**: Mobile-first with `md:` breakpoints for tablet/desktop
- **Dark Mode**: System preference-based dark mode (`prefers-color-scheme: dark`)

### Path Aliasing
- `@/*` maps to project root (configured in `tsconfig.json`)
- Example: `import Component from '@/components/Component'`

## Development Commands

### Running the Development Server
```bash
npm run dev          # Starts Next.js dev server on http://localhost:3000
```

### Building and Production
```bash
npm run build        # Creates optimized production build
npm run start        # Runs production server (requires build first)
```

### Code Quality
```bash
npm run lint         # Runs ESLint with Next.js config
```

### Testing with Playwright
```bash
npm test                 # Run all E2E tests in headless mode (3 browsers)
npm run test:headed      # Run tests with visible browser windows
npm run test:ui          # Interactive UI mode for test development
npm run test:report      # View HTML test report from last run
```

#### Running Specific Tests
```bash
npx playwright test home.spec.ts                    # Run single test file
npx playwright test --grep "Hero 섹션"              # Run tests matching pattern
npx playwright test --project=chromium              # Run only Chromium tests
npx playwright test --debug                         # Debug mode with Playwright Inspector
```

## Testing Architecture

### Playwright Configuration
- **Multi-Browser Testing**: Chromium, Firefox, and Webkit (Safari)
- **Auto Dev Server**: Playwright automatically starts `npm run dev` before tests
- **Test Location**: All E2E tests in `tests/` directory
- **Parallel Execution**: Tests run in parallel with 6 workers locally
- **Visual Regression**: Screenshots captured on failure only

### Test Coverage Areas
The existing test suite (`tests/home.spec.ts`) covers:
- Page metadata and SEO
- Hero section and CTAs
- Feature cards and content
- Responsive layouts (mobile/tablet)
- External link security attributes
- Dark mode CSS classes
- Scroll behavior and viewport checks

### Adding New Tests
1. Create `*.spec.ts` files in `tests/` directory
2. Use Korean text for test descriptions to match UI language
3. Follow existing patterns: `test.describe` → `test.beforeEach` → `test` blocks
4. Use locators: `page.getByRole()`, `page.getByText()`, `page.locator()`

## Key Implementation Patterns

### Component Development
- All components in this project are Server Components (no client-side interactivity)
- Use semantic HTML: `<main>`, `<footer>`, headings hierarchy
- Responsive classes: mobile-first → `md:` for tablet → `lg:` for desktop
- Accessibility: proper heading levels, external links with `rel="noopener noreferrer"`

### Styling Patterns
- Gradient backgrounds: `bg-gradient-to-b from-{color}-{shade} to-{color}`
- Dark mode: Add `dark:{utility}` classes alongside base utilities
- Card styling: `bg-white dark:bg-gray-800 rounded-xl shadow-lg`
- Container pattern: `container mx-auto px-4` for content width

### External Links
All external links must include:
```tsx
target="_blank"
rel="noopener noreferrer"
```

## Configuration Files

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path alias `@/*` available
- JSX preserve mode for Next.js

### Tailwind (`tailwind.config.js`)
- Content scans: `pages/**`, `components/**`, `app/**`
- No custom theme extensions currently

### Playwright (`playwright.config.ts`)
- Base URL: `http://localhost:3000`
- Test directory: `./tests`
- Reporter: HTML (view with `npm run test:report`)
- Automatic dev server startup before tests
