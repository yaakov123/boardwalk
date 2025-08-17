# API: Types

Key public types for Boardwalk.

## InteractionPattern
```ts
type InteractionPattern = 'button' | 'click-to-continue' | 'auto-progress';
```

## TourOptions and StepOptions
```ts
interface TourOptions {
  id: string;
  title?: string;
  showProgress?: boolean;
  showStepNumbers?: boolean;
  className?: string;
  enableKeyboardNavigation?: boolean;
  keyBindings?: Partial<KeyBindings>;
  interactionPattern?: InteractionPattern;
  autoProgressDelay?: number;
  targetWaitTimeout?: number;
  onKeyAction?: (action: string, key: string) => void;
  onStart?: () => void;
  onEnd?: () => void;
  onCancel?: () => void;
}

interface StepOptions {
  target: string | HTMLElement;
  title?: string;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  highlight?: boolean;
  className?: string;
  scrollTo?: boolean;
  waitForTarget?: boolean | number;
  interactionPattern?: InteractionPattern;
  autoProgressDelay?: number;
  beforeShow?: () => boolean | Promise<boolean>;
  afterShow?: () => void;
  beforeHide?: () => boolean | Promise<boolean>;
  afterHide?: () => void;
}
```

## Keyboard and Theme
```ts
interface KeyBindings {
  next: string[];
  previous: string[];
  close: string[];
  [key: string]: string[];
}

type ThemeName = 'default' | 'dark' | 'modern' | string;
interface ThemeOptions {
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  overlayColor?: string;
  fontFamily?: string;
  borderRadius?: number;
  customCSS?: string;
  cssVariables?: Record<string, string>;
}
```
