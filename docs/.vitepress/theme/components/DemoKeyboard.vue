<template>
  <div class="demo-surface">
    <div class="demo-toolbar">
      <strong>Live demo:</strong>
      <button class="vp-button" @click="start">Start Tour</button>
      <button class="vp-button" @click="end">End</button>
      <button class="vp-button" @click="toggleKb">{{ kbEnabled ? 'Disable' : 'Enable' }} Keyboard</button>
      <button class="vp-button" @click="useDefaultBindings">Use Default Keys</button>
      <button class="vp-button" @click="useCustomBindings">Use Custom Keys</button>
      <span class="hint">Try: → / ← / Esc. Custom: n / p / q. Help: ?</span>
    </div>

    <div class="demo-layout">
      <div ref="a" class="demo-card">Area A</div>
      <div ref="b" class="demo-card">Area B</div>
      <div ref="c" class="demo-card">Area C</div>
    </div>

    <transition name="fade">
      <div v-if="helpVisible" class="help-pop">
        <strong>Help</strong>
        <p>Custom key action triggered by <kbd>?</kbd></p>
      </div>
    </transition>

    <div class="bindings">
      <div><strong>Bindings:</strong></div>
      <div>Next: {{ bindings.next.join(', ') }}</div>
      <div>Previous: {{ bindings.previous.join(', ') }}</div>
      <div>Close: {{ bindings.close.join(', ') }}</div>
      <div v-if="bindings.help && bindings.help.length">Help: {{ bindings.help.join(', ') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, reactive, ref, shallowRef, watch } from 'vue'
import { useData } from 'vitepress'

const a = ref<HTMLElement | null>(null)
const b = ref<HTMLElement | null>(null)
const c = ref<HTMLElement | null>(null)

const tour = shallowRef<any | null>(null)
const kbEnabled = ref(true)
const helpVisible = ref(false)
const { isDark } = useData()

const bindings = reactive<{ [k: string]: string[] }>({
  next: ['ArrowRight', 'Space', 'Enter'],
  previous: ['ArrowLeft'],
  close: ['Escape']
})

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
    const { Tour, setTheme, DEFAULT_KEY_BINDINGS } = BW
    setTheme?.(isDark.value ? 'dark' : 'default')

    // initialize from library defaults if available
    if (DEFAULT_KEY_BINDINGS) {
      Object.assign(bindings, DEFAULT_KEY_BINDINGS)
    }

    tour.value = new Tour({
      id: 'demo-kbd',
      title: 'Keyboard & Focus',
      enableKeyboardNavigation: kbEnabled.value,
      onKeyAction: (action: string) => {
        if (action === 'help') {
          helpVisible.value = true
          setTimeout(() => (helpVisible.value = false), 1500)
        }
      }
    })

    tour.value.addSteps([
      { target: a.value!, content: 'Use keyboard to navigate the tour.' },
      { target: b.value!, content: 'Try ArrowRight/Left or Space/Enter.' },
      { target: c.value!, content: 'Press Escape to end. Press ? for help (custom).' },
    ])
    watch(isDark, (val) => { try { setTheme?.(val ? 'dark' : 'default') } catch {} })
  } catch (e) {
    console.error('[DemoKeyboard] init failed', e)
  }
})

function start() { tour.value?.start() }
function end() { try { tour.value?.end(true) } catch {} }
function toggleKb() {
  kbEnabled.value = !kbEnabled.value
  tour.value?.enableKeyboardNavigation(kbEnabled.value)
}
function useDefaultBindings() {
  // Defaults
  bindings.next = ['ArrowRight', 'Space', 'Enter']
  bindings.previous = ['ArrowLeft']
  bindings.close = ['Escape']
  delete bindings.help
  tour.value?.setKeyBindings({ next: bindings.next, previous: bindings.previous, close: bindings.close })
}
function useCustomBindings() {
  bindings.next = ['n']
  bindings.previous = ['p']
  bindings.close = ['q']
  bindings.help = ['?']
  tour.value?.setKeyBindings({ next: bindings.next, previous: bindings.previous, close: bindings.close, help: bindings.help })
}

onBeforeUnmount(() => { try { tour.value?.end(true) } catch {} })
</script>

<style scoped>
.demo-surface { border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg-soft); padding: 12px; margin: 16px 0; position: relative; }
.demo-toolbar { display: flex; gap: 8px; align-items: center; margin-bottom: 12px; flex-wrap: wrap; }
.hint { color: var(--vp-c-text-2); font-size: 12px; }
.demo-layout { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.demo-card { background: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; text-align: center; border: 1px solid var(--vp-c-divider); }
.vp-button { font: inherit; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); cursor: pointer; }
.vp-button:hover { filter: brightness(0.98); }
.bindings { margin-top: 10px; display: grid; grid-template-columns: repeat(2, max-content); gap: 6px 16px; align-items: center; }
.help-pop { position: absolute; right: 12px; top: 12px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); padding: 10px 12px; border-radius: 8px; border: 1px solid var(--vp-c-divider); box-shadow: 0 4px 14px rgba(0,0,0,0.2); }
.fade-enter-active, .fade-leave-active { transition: opacity .15s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
