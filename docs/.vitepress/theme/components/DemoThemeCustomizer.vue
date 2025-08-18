<template>
  <div class="demo-surface">
    <div class="demo-toolbar">
      <strong>Live demo:</strong>
      <label class="ctrl">
        Primary
        <input type="color" v-model="primary" />
      </label>
      <label class="ctrl">
        Background
        <input type="color" v-model="bg" />
      </label>
      <label class="ctrl">
        Border radius
        <input type="range" min="0" max="18" v-model.number="radius" />
        <span class="mono">{{ radius }}px</span>
      </label>
      <label class="ctrl">
        Font
        <select v-model="font" class="vp-select">
          <option value="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">System</option>
          <option value="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">Inter</option>
          <option value="Georgia, Cambria, 'Times New Roman', Times, serif">Serif</option>
          <option value="Monaco, 'Courier New', Courier, monospace">Mono</option>
        </select>
      </label>
      <button class="vp-button" @click="apply">Apply</button>
      <button class="vp-button" @click="reset">Reset</button>
      <button class="vp-button" @click="start">Start Tour</button>
      <button class="vp-button" @click="end">End</button>
    </div>

    <div class="demo-hero" ref="hero">
      <h3>Hero Section</h3>
      <p>Use the controls to customize theme variables, then start the tour.</p>
    </div>

    <div class="demo-footer" ref="footer">
      <p>Changes apply live via CSS variables.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue'
import { useData } from 'vitepress'

const hero = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)
const tour = shallowRef<any | null>(null)
const { isDark } = useData()

const primary = ref('#4a90e2')
const bg = ref('#ffffff')
const radius = ref(6)
const font = ref("system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif")

function waitForBoardwalk(): Promise<any> {
  return new Promise((resolve, reject) => {
    let tries = 0
    const max = 80
    const timer = setInterval(() => {
      const BW = (window as any).Boardwalk
      if (BW) { clearInterval(timer); resolve(BW) }
      else if (++tries >= max) { clearInterval(timer); reject(new Error('Boardwalk not loaded')) }
    }, 50)
  })
}

let BW: any

onMounted(async () => {
  try {
    BW = await waitForBoardwalk()
    const { Tour, setTheme } = BW
    setTheme?.(isDark.value ? 'dark' : 'default')

    tour.value = new Tour({ id: 'demo-theme-customizer', title: 'Theme Customizer' })
    tour.value.addSteps([
      { target: hero.value!, content: 'Primary color affects buttons and accents.' },
      { target: footer.value!, content: 'Background and radius adjust tooltip surfaces.' },
    ])
  } catch (e) {
    console.error('[DemoThemeCustomizer] init failed', e)
  }
})

function apply() {
  try {
    const { customizeTheme } = BW || (window as any).Boardwalk || {}
    customizeTheme?.({
      primaryColor: primary.value,
      backgroundColor: bg.value,
      borderRadius: radius.value,
      fontFamily: font.value,
    })
  } catch {}
}

function reset() {
  try {
    const { resetTheme } = BW || (window as any).Boardwalk || {}
    resetTheme?.()
  } catch {}
}

function start() { tour.value?.start() }
function end() { try { tour.value?.end(true) } catch {} }

onBeforeUnmount(() => { try { tour.value?.end(true) } catch {} })
</script>

<style scoped>
.demo-surface { border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg-soft); padding: 12px; margin: 16px 0; }
.demo-toolbar { display: flex; gap: 8px; align-items: center; margin-bottom: 12px; flex-wrap: wrap; }
.ctrl { display: inline-flex; align-items: center; gap: 6px; }
.mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 12px; color: var(--vp-c-text-2); }
.demo-hero { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--vp-c-divider); }
.demo-footer { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; border: 1px solid var(--vp-c-divider); }
.vp-button, .vp-select, input[type="color"], input[type="range"] { font: inherit; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); cursor: pointer; }
.vp-button:hover, .vp-select:hover { filter: brightness(0.98); }
input[type="range"] { padding: 0; height: 26px; }
</style>
