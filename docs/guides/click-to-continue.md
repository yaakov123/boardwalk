# Click to Continue

Advance on non-interactive clicks anywhere on the page.

## Enable globally
```ts
import { Tour } from 'boardwalk';

const tour = new Tour({
  id: 'ctc',
  interactionPattern: 'click-to-continue',
});
```

Interactive elements (buttons, links, inputs) are ignored so normal page actions still work.

## Per-step override
```ts
tour.addSteps([
  { target: '#hero', content: 'Click anywhere to continue', interactionPattern: 'click-to-continue' },
  { target: '#footer', content: 'Final tip' },
]);
```
