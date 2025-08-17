# Keyboard & Focus

Boardwalk supports keyboard navigation and focus management out of the box.

## Default keys
```ts
import { DEFAULT_KEY_BINDINGS } from 'boardwalk';
// { next: ['ArrowRight', 'Space', 'Enter'], previous: ['ArrowLeft'], close: ['Escape'] }
```

## Enable/disable
```ts
const tour = new Tour({ id: 'kbd', enableKeyboardNavigation: true });
// Dynamically toggle
tour.enableKeyboardNavigation(false);
```

## Custom bindings
```ts
const tour = new Tour({ id: 'kbd2', keyBindings: { next: ['n'], previous: ['p'] } });
// Or later
tour.setKeyBindings({ close: ['q'] });
```

## Custom actions
Add any action name to your bindings and handle it via `onKeyAction`.
```ts
const tour = new Tour({
  id: 'kbd3',
  keyBindings: { help: ['?'] },
  enableKeyboardNavigation: true,
  onKeyAction: (action, key) => {
    if (action === 'help') {
      // show your help modal
    }
  }
});
```

## Focus management
When a tour starts, focus is trapped inside the tour container to ensure accessibility. Use Tab/Shift+Tab to cycle focus.
