<template>
  <div class="demo-surface">
    <div class="demo-toolbar">
      <strong>Live demo:</strong>
      <button class="vp-button" @click="start">Start Click-to-Continue Tour</button>
      <button class="vp-button" @click="end">End</button>
      <span class="hint">Tip: Click anywhere outside interactive elements to advance</span>
    </div>

    <div class="demo-hero" ref="hero">
      <h3>Hero Section</h3>
      <p>Clicking on this area will advance the tour.</p>
      <button class="vp-button">A real button (won't advance)</button>
    </div>

    <div class="demo-footer" ref="footer">
      <p>Footer area. Links and inputs remain interactive.</p>
      <a href="#" @click.prevent>Example link</a>
      <input placeholder="Type here" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { useData } from 'vitepress'

const hero = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)
const tour = shallowRef<any | null>(null)
const { isDark } = useData()

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
    setTheme?.(isDark.value ? 'dark' : 'default')

    tour.value = new Tour({
      id: 'demo-ctc',
      title: 'Click to Continue',
      interactionPattern: 'click-to-continue',
    })

    tour.value.addSteps([
      { target: hero.value!, content: 'Click anywhere here (except the button) to advance.' },
      { target: footer.value!, content: 'Interactive elements like links and inputs are ignored.' },
    ])
    watch(isDark, (val) => { try { setTheme?.(val ? 'dark' : 'default') } catch {} })
  } catch (e) {
    console.error('[DemoClickToContinue] init failed', e)
  }
})

function start() { tour.value?.start() }
function end() { try { tour.value?.end(true) } catch {} }

onBeforeUnmount(() => { try { tour.value?.end(true) } catch {} })
</script>

<style scoped>
.demo-surface { border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg-soft); padding: 12px; margin: 16px 0; }
.demo-toolbar { display: flex; gap: 8px; align-items: center; margin-bottom: 12px; }
.hint { color: var(--vp-c-text-2); font-size: 12px; margin-left: 4px; }
.demo-hero { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--vp-c-divider); }
.demo-footer { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; display: flex; gap: 10px; align-items: center; border: 1px solid var(--vp-c-divider); }
.vp-button { font: inherit; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); cursor: pointer; }
.vp-button:hover { filter: brightness(0.98); }
</style>
