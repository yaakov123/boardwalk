<template>
  <div class="demo-surface">
    <div class="demo-toolbar">
      <strong>Live demo:</strong>
      <button class="vp-button" @click="start">Start Auto Tour</button>
      <button class="vp-button" @click="end">End</button>
      <label class="demo-inline">
        Delay (ms):
        <input type="number" v-model.number="delay" min="500" step="500" style="width: 100px" />
      </label>
    </div>

    <div class="demo-layout">
      <div ref="one" class="demo-card">First area</div>
      <div ref="two" class="demo-card">Second area</div>
      <div ref="three" class="demo-card">Third area</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { useData } from 'vitepress'

const one = ref<HTMLElement | null>(null)
const two = ref<HTMLElement | null>(null)
const three = ref<HTMLElement | null>(null)
const delay = ref(1500)

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
    setTheme?.(isDark.value ? 'dark' : 'default')

    tour.value = new Tour({
      id: 'demo-auto',
      title: 'Auto Progress',
      interactionPattern: 'auto-progress',
      autoProgressDelay: delay.value,
    })

    tour.value.addSteps([
      { target: one.value!, content: 'First step will auto-advance' },
      { target: two.value!, content: 'Watch it move to the next step automatically' },
      { target: three.value!, content: 'Last step ends the tour' },
    ])

    // react to docs theme toggle
    watch(isDark, (val) => { try { setTheme?.(val ? 'dark' : 'default') } catch {} })
  } catch (e) {
    console.error('[DemoAutoProgress] init failed', e)
  }
})

watch(delay, (ms) => {
  if (tour.value) tour.value.setAutoProgressDelay(ms)
})

function start() { tour.value?.start() }
function end() { try { tour.value?.end(true) } catch {} }

onBeforeUnmount(() => { try { tour.value?.end(true) } catch {} })
</script>

<style scoped>
.demo-surface { border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg-soft); padding: 12px; margin: 16px 0; }
.demo-toolbar { display: flex; gap: 8px; align-items: center; margin-bottom: 12px; }
.demo-inline { display: inline-flex; gap: 6px; align-items: center; }
.demo-layout { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.demo-card { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; text-align: center; border: 1px solid var(--vp-c-divider); }
.vp-button { font: inherit; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); cursor: pointer; }
.vp-button:hover { filter: brightness(0.98); }
</style>
