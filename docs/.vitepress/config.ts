import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Boardwalk",
  description: "Interactive product tour library for websites",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Guides', link: '/guides/tour-basics' },
      { text: 'Styling', link: '/styling/theming' },
      { text: 'API', link: '/api/tour' },
      { text: 'Testing', link: '/testing/playwright' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Tour Basics', link: '/guides/tour-basics' },
          { text: 'Auto Progress', link: '/guides/auto-progress' },
          { text: 'Click to Continue', link: '/guides/click-to-continue' },
          { text: 'Keyboard & Focus', link: '/guides/keyboard-and-focus' },
          { text: 'Accessibility', link: '/guides/accessibility' }
        ]
      },
      {
        text: 'Styling',
        items: [
          { text: 'Theming', link: '/styling/theming' },
          { text: 'CSS Variables', link: '/styling/css-variables' },
          { text: 'Overrides', link: '/styling/overrides' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Tour', link: '/api/tour' },
          { text: 'Step', link: '/api/step' },
          { text: 'Theme', link: '/api/theme' },
          { text: 'Keyboard', link: '/api/keyboard' },
          { text: 'Accessibility', link: '/api/accessibility' },
          { text: 'Types', link: '/api/types' }
        ]
      },
      {
        text: 'Testing',
        items: [
          { text: 'Playwright E2E', link: '/testing/playwright' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
