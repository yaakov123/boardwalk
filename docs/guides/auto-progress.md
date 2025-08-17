# Auto Progress

Advance steps automatically after a delay.

## Enable globally
```ts
import { Tour } from 'boardwalk';

const tour = new Tour({
  id: 'auto',
  interactionPattern: 'auto-progress',
  autoProgressDelay: 5000, // ms
});
```

Boardwalk shows a countdown message in each step and moves to the next step when time elapses.

## Per-step overrides
```ts
tour.addSteps([
  { target: '#one', content: 'First' },
  { target: '#two', content: 'Fast step', autoProgressDelay: 1500 },
]);
```

## Notes
- When the last step finishes, `tour.end()` is called.
- Users can still use keyboard navigation if enabled.
