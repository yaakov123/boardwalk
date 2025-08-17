# API: Tour

Create and control tours.

## Constructor
```ts
new Tour(options: TourOptions)
```

## Options (`TourOptions`)
```ts
interface TourOptions {
  id: string;
  title?: string;
  showProgress?: boolean;
  showStepNumbers?: boolean;
  className?: string;
  enableKeyboardNavigation?: boolean;
  keyBindings?: Partial<KeyBindings>;
  interactionPattern?: 'button' | 'click-to-continue' | 'auto-progress';
  autoProgressDelay?: number; // ms
  targetWaitTimeout?: number; // ms for steps that set waitForTarget
  onKeyAction?: (action: string, key: string) => void;
  onStart?: () => void;
  onEnd?: () => void;
  onCancel?: () => void;
}
```

## Methods
- `addStep(options: StepOptions): Tour`
- `addSteps(steps: StepOptions[]): Tour`
- `start(startAt?: number): Tour`
- `end(isCancelled?: boolean): Tour`
- `goToStep(index: number): Tour`
- `nextStep(): Tour`
- `prevStep(): Tour`
- `getContainer(): HTMLElement | null`
- `getCurrentStepIndex(): number`
- `getTotalSteps(): number`
- `setKeyBindings(bindings: Partial<KeyBindings>): Tour`
- `enableKeyboardNavigation(enable: boolean): Tour`
- `getInteractionPattern(): InteractionPattern`
- `setInteractionPattern(pattern: InteractionPattern): Tour`
- `getAutoProgressDelay(): number`
- `setAutoProgressDelay(delay: number): Tour`
- `getTargetWaitTimeout(): number`

## Example
```ts
const tour = new Tour({ id: 'demo', interactionPattern: 'button' });
tour
  .addStep({ target: '#a', content: 'A' })
  .addStep({ target: '#b', content: 'B', position: 'right' })
  .start();
```
