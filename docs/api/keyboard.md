# API: Keyboard

Configure keyboard navigation and custom actions.

## Defaults and types
```ts
export const DEFAULT_KEY_BINDINGS = {
  next: ['ArrowRight', 'Space', 'Enter'],
  previous: ['ArrowLeft'],
  close: ['Escape']
};

interface KeyBindings {
  next: string[];
  previous: string[];
  close: string[];
  [key: string]: string[]; // custom actions
}
```

## KeyboardManager
```ts
class KeyboardManager {
  constructor(tour: Tour, keyBindings?: Partial<KeyBindings>)
  enable(): void
  disable(): void
  setKeyBindings(bindings: Partial<KeyBindings>): void
  getKeyBindings(): KeyBindings
}

function createKeyboardManager(tour: Tour, keyBindings?: Partial<KeyBindings>): KeyboardManager
```

## Custom actions
Bind any additional action name to keys. Boardwalk dispatches a `boardwalk:keyaction` event and the `Tour` can handle it via `onKeyAction`.
