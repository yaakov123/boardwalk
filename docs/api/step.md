# API: Step

Individual step configuration and lifecycle.

## Options (`StepOptions`)
```ts
interface StepOptions {
  target: string | HTMLElement;
  title?: string;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  highlight?: boolean;
  className?: string;
  scrollTo?: boolean;
  waitForTarget?: boolean | number; // true => use tour.targetWaitTimeout
  interactionPattern?: 'button' | 'click-to-continue' | 'auto-progress';
  autoProgressDelay?: number;
  beforeShow?: () => boolean | Promise<boolean>;
  afterShow?: () => void;
  beforeHide?: () => boolean | Promise<boolean>;
  afterHide?: () => void;
}
```

## Methods
- `show(): Promise<void>` — Called by the tour when entering this step.
- `hide(): Promise<void>` — Called by the tour when leaving this step.

Note: While `Step` is exported, most users create steps via `tour.addStep(s)`.
