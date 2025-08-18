<template>
  <div class="demo-surface">
    <div class="demo-toolbar">
      <strong>Live demo:</strong>
      <label class="ctrl">
        Name
        <input v-model="themeName" class="vp-input" placeholder="ocean" />
      </label>
      <label class="ctrl">Primary <input type="color" v-model="primary" /></label>
      <label class="ctrl">Secondary <input type="color" v-model="secondary" /></label>
      <label class="ctrl">Text <input type="color" v-model="text" /></label>
      <label class="ctrl">Background <input type="color" v-model="bg" /></label>
      <label class="ctrl">Border <input type="color" v-model="border" /></label>
      <label class="ctrl">
        Overlay α
        <input type="range" min="0" max="1" step="0.05" v-model.number="overlayAlpha" />
        <span class="mono">{{ overlayAlpha.toFixed(2) }}</span>
      </label>
      <button class="vp-button" @click="createAndApply">Create & Apply</button>
      <button class="vp-button" @click="resetToDefault">Reset to Default</button>
      <button class="vp-button" @click="start">Start Tour</button>
      <button class="vp-button" @click="end">End</button>
    </div>

    <div class="demo-hero" ref="hero">
      <h3>Hero Section</h3>
      <p>Create your own named theme and apply it live.</p>
    </div>

    <div class="demo-footer" ref="footer">
      <p>The tooltip will adopt your custom palette and radius.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue'

const hero = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)
const tour = shallowRef<any | null>(null)

const themeName = ref('ocean')
const primary = ref('#0277bd')
const secondary = ref('#e1f5fe')
const text = ref('#263238')
const bg = ref('#ffffff')
const border = ref('#b3e5fc')
const overlayAlpha = ref(0.30)

let BW: any

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

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : null
}

onMounted(async () => {
  try {
    BW = await waitForBoardwalk()
    const { Tour, setTheme } = BW
    setTheme?.('default')

    tour.value = new Tour({ id: 'demo-create-theme', title: 'Create Theme' })
    tour.value.addSteps([
      { target: hero.value!, content: 'Give your theme a name and choose colors.' },
      { target: footer.value!, content: 'Click "Create & Apply" to switch to your theme.' },
    ])
  } catch (e) {
    console.error('[DemoCreateTheme] init failed', e)
  }
})

function createAndApply() {
  try {
    const { createTheme, setTheme } = BW || (window as any).Boardwalk || {}
    const name = (themeName.value || 'custom').trim()

    // Remove old style node for the same theme id to avoid duplicates
    const existing = document.getElementById(`boardwalk-theme-${name}`)
    existing?.parentElement?.removeChild(existing)

    const rgb = hexToRgb(primary.value) || { r: 0, g: 0, b: 0 }
    const overlay = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${overlayAlpha.value})`

    createTheme?.(name, {
      primaryColor: primary.value,
      secondaryColor: secondary.value,
      textColor: text.value,
      backgroundColor: bg.value,
      borderColor: border.value,
      overlayColor: overlay,
      fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
      borderRadius: 6,
    })
    setTheme?.(name)
  } catch {}
}

function resetToDefault() {
  try {
    const { setTheme } = BW || (window as any).Boardwalk || {}
    setTheme?.('default')
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
.vp-input { font: inherit; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); }
.mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 12px; color: var(--vp-c-text-2); }
.demo-hero { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--vp-c-divider); }
.demo-footer { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; border: 1px solid var(--vp-c-divider); }
.vp-button, .vp-select, input[type="color"], input[type="range"] { font: inherit; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); cursor: pointer; }
.vp-button:hover, .vp-select:hover { filter: brightness(0.98); }
input[type="range"] { padding: 0; height: 26px; }
</style>
