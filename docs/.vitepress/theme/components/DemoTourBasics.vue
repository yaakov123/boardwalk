<template>
  <div class="demo-surface">
    <div class="demo-toolbar">
      <strong>Live demo:</strong>
      <button class="vp-button" @click="start">Start Tour</button>
      <button class="vp-button" @click="prev">Prev</button>
      <button class="vp-button" @click="next">Next</button>
      <button class="vp-button" @click="end">End</button>
    </div>

    <div class="demo-layout">
      <div ref="nav" class="demo-nav">Navigation</div>

      <div class="demo-main">
        <div ref="sidebar" class="demo-sidebar">
          <h4>Sidebar</h4>
          <ul>
            <li>Dashboard</li>
            <li>Projects</li>
            <li>Settings</li>
          </ul>
        </div>

        <div ref="editor" class="demo-editor">
          <h4>Editor</h4>
          <p>Write and preview content here.</p>
          <button ref="cta" class="vp-button">Primary Action</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { useData } from 'vitepress'

const nav = ref<HTMLElement | null>(null)
const sidebar = ref<HTMLElement | null>(null)
const editor = ref<HTMLElement | null>(null)
const cta = ref<HTMLElement | null>(null)

const tour = shallowRef<any | null>(null)
const { isDark } = useData()

function waitForBoardwalk(): Promise<any> {
  return new Promise((resolve, reject) => {
    let tries = 0
    const max = 80
    const timer = setInterval(() => {
      const BW = (window as any).Boardwalk
      if (BW) {
        clearInterval(timer)
        resolve(BW)
      } else if (++tries >= max) {
        clearInterval(timer)
        reject(new Error('Boardwalk not loaded'))
      }
    }, 50)
  })
}

onMounted(async () => {
  try {
    const BW = await waitForBoardwalk()
    const { Tour, setTheme } = BW
    // Sync BW theme with docs dark mode
    setTheme?.(isDark.value ? 'dark' : 'default')

    tour.value = new Tour({
      id: 'demo-basics',
      title: 'Tour Basics',
      showProgress: true,
      showStepNumbers: true,
    })

    tour.value.addSteps([
      { target: nav.value!, title: 'Navigation', content: 'Use the nav to explore.' },
      { target: sidebar.value!, title: 'Sidebar', content: 'Find key tools here.' },
      { target: editor.value!, title: 'Editor', content: 'Write and preview here.', position: 'right' },
      { target: cta.value!, title: 'Action', content: 'This is the primary call to action.' },
    ])
    // react to docs theme toggle
    watch(isDark, (val) => { try { setTheme?.(val ? 'dark' : 'default') } catch {} })
  } catch (e) {
    console.error('[DemoTourBasics] init failed', e)
  }
})

function start() { tour.value?.start() }
function next() { tour.value?.nextStep() }
function prev() { tour.value?.prevStep() }
function end() { try { tour.value?.end(true) } catch {}
}

onBeforeUnmount(() => { try { tour.value?.end(true) } catch {} })
</script>

<style scoped>
.demo-surface {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  padding: 12px;
  margin: 16px 0;
}
.demo-toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
}
.demo-layout {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 12px;
}
.demo-nav {
  background: var(--vp-c-bg-soft);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  font-weight: 600;
}
.demo-main { display: grid; grid-template-columns: 200px 1fr; gap: 12px; }
.demo-sidebar {
  background: var(--vp-c-bg-soft);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}
.demo-editor {
  background: var(--vp-c-bg-soft);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  min-height: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.vp-button {
  font: inherit;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}
.vp-button:hover { filter: brightness(0.98); }
</style>
