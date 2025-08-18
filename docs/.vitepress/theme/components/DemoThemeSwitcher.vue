<template>
  <div class="demo-surface">
    <div class="demo-toolbar">
      <strong>Live demo:</strong>
      <label class="ctrl">
        Theme:
        <select v-model="selected" class="vp-select">
          <option value="default">Default</option>
          <option value="dark">Dark</option>
          <option value="modern">Modern</option>
        </select>
      </label>
      <button class="vp-button" @click="start">Start Tour</button>
      <button class="vp-button" @click="end">End</button>
    </div>

    <div class="demo-hero" ref="hero">
      <h3>Hero Section</h3>
      <p>This area shows tooltip styling differences between themes.</p>
    </div>

    <div class="demo-footer" ref="footer">
      <p>Footer area. Try switching themes, then start the tour.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef, watch } from 'vue'

const hero = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)
const tour = shallowRef<any | null>(null)
const selected = ref<'default' | 'dark' | 'modern'>('default')

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

onMounted(async () => {
  try {
    const BW = await waitForBoardwalk()
    const { Tour, setTheme } = BW
    setTheme?.(selected.value)

    tour.value = new Tour({
      id: 'demo-theme-switcher',
      title: 'Theme Switcher',
    })

    tour.value.addSteps([
      { target: hero.value!, content: 'This tooltip reflects the active theme.' },
      { target: footer.value!, content: 'Switch themes to compare colors and spacing.' },
    ])

    watch(selected, (val) => {
      try { setTheme?.(val) } catch {}
    })
  } catch (e) {
    console.error('[DemoThemeSwitcher] init failed', e)
  }
})

function start() { tour.value?.start() }
function end() { try { tour.value?.end(true) } catch {} }

onBeforeUnmount(() => { try { tour.value?.end(true) } catch {} })
</script>

<style scoped>
.demo-surface { border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg-soft); padding: 12px; margin: 16px 0; }
.demo-toolbar { display: flex; gap: 8px; align-items: center; margin-bottom: 12px; flex-wrap: wrap; }
.ctrl { display: inline-flex; align-items: center; gap: 6px; }
.demo-hero { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--vp-c-divider); }
.demo-footer { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; border: 1px solid var(--vp-c-divider); }
.vp-button, .vp-select { font: inherit; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); cursor: pointer; }
.vp-button:hover, .vp-select:hover { filter: brightness(0.98); }
</style>
