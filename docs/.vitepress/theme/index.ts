import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// @ts-ignore - Vue SFC types are handled by VitePress, not root tsconfig
import DemoTourBasics from './components/DemoTourBasics.vue'
// @ts-ignore - Vue SFC types are handled by VitePress, not root tsconfig
import DemoAutoProgress from './components/DemoAutoProgress.vue'
// @ts-ignore - Vue SFC types are handled by VitePress, not root tsconfig
import DemoClickToContinue from './components/DemoClickToContinue.vue'
// @ts-ignore - Vue SFC types are handled by VitePress, not root tsconfig
import DemoKeyboard from './components/DemoKeyboard.vue'
// @ts-ignore - Vue SFC types are handled by VitePress, not root tsconfig
import DemoThemeSwitcher from './components/DemoThemeSwitcher.vue'
// @ts-ignore - Vue SFC types are handled by VitePress, not root tsconfig
import DemoThemeCustomizer from './components/DemoThemeCustomizer.vue'
// @ts-ignore - Vue SFC types are handled by VitePress, not root tsconfig
import DemoCreateTheme from './components/DemoCreateTheme.vue'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components for markdown usage
    app.component('DemoTourBasics', DemoTourBasics)
    app.component('DemoAutoProgress', DemoAutoProgress)
    app.component('DemoClickToContinue', DemoClickToContinue)
    app.component('DemoKeyboard', DemoKeyboard)
    app.component('DemoThemeSwitcher', DemoThemeSwitcher)
    app.component('DemoThemeCustomizer', DemoThemeCustomizer)
    app.component('DemoCreateTheme', DemoCreateTheme)
  }
}

export default theme
