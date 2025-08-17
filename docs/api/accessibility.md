# API: Accessibility

Helpers for ARIA and focus management.

## Constants
```ts
export const ARIA_ROLES = {
  TOOLTIP: 'tooltip',
  DIALOG: 'dialog',
  BUTTON: 'button',
  NAVIGATION: 'navigation',
  PROGRESSBAR: 'progressbar'
};
```

## FocusManager
```ts
class FocusManager {
  constructor(container: HTMLElement)
  updateFocusableElements(): void
  activate(): void
  deactivate(): void
}
```

## Helpers
- `applyAriaAttributes(el: HTMLElement, attrs: Record<string, string>): void`
- `createLiveRegion(priority?: 'polite' | 'assertive'): HTMLElement`
- `announce(message: string, priority?: 'polite' | 'assertive'): void`
- `addScreenReaderText(el: HTMLElement, text: string): void`
