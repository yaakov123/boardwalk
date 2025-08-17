# Tour Basics

Create a tour, add steps, and control navigation.

## Create a tour
```ts
import { Tour } from 'boardwalk';

const tour = new Tour({
  id: 'onboarding',
  title: 'Onboarding',
  showProgress: true,
  showStepNumbers: true,
});
```

## Add steps
```ts
// Minimal
tour.addStep({ target: '#logo', content: 'Welcome to Boardwalk!' });

// Or multiple at once
tour.addSteps([
  { target: '#sidebar', title: 'Sidebar', content: 'Find key tools here.' },
  { target: '#editor', title: 'Editor', content: 'Write and preview here.', position: 'right' },
]);
```

Step options include:
- `position`: 'top' | 'bottom' | 'left' | 'right' | 'auto'
- `highlight`: boolean (default true)
- `scrollTo`: boolean (default true)
- `className`: string for custom styling per-step

## Start and navigate
```ts
document.querySelector('#start')?.addEventListener('click', () => tour.start());
// Programmatic navigation
// tour.nextStep();
// tour.prevStep();
// tour.goToStep(2);
// tour.end();
```

## Patterns per step
```ts
// Override tour default for a specific step
tour.addStep({
  target: '#chart',
  content: 'This advances automatically',
  interactionPattern: 'auto-progress',
  autoProgressDelay: 3000,
});
```
