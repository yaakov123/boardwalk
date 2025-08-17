import { KeyBindings } from './keyboard';

/**
 * Interaction pattern for tour navigation
 */
export type InteractionPattern = 'button' | 'click-to-continue' | 'auto-progress';

/**
 * Options for configuring a tour
 */
export interface TourOptions {
  /** Unique identifier for the tour */
  id: string;
  /** Optional tour title */
  title?: string;
  /** Whether to show progress indicator */
  showProgress?: boolean;
  /** Whether to show step numbers */
  showStepNumbers?: boolean;
  /** Custom class name for styling */
  className?: string;
  /** Whether to enable keyboard navigation */
  enableKeyboardNavigation?: boolean;
  /** Custom key bindings for keyboard navigation */
  keyBindings?: Partial<KeyBindings>;
  /** Interaction pattern for tour navigation */
  interactionPattern?: InteractionPattern;
  /** Auto-progress delay in milliseconds (only used with auto-progress pattern) */
  autoProgressDelay?: number;
  /** Default timeout (ms) to wait for target elements to appear when `waitForTarget` is enabled on steps */
  targetWaitTimeout?: number;
  /** Callback when a custom key action is triggered */
  onKeyAction?: (action: string, key: string) => void;
  /** Callback when tour starts */
  onStart?: () => void;
  /** Callback when tour ends */
  onEnd?: () => void;
  /** Callback when tour is canceled */
  onCancel?: () => void;
}

/**
 * Options for configuring a tour step
 */
export interface StepOptions {
  /** Target element selector or element */
  target: string | HTMLElement;
  /** Step title */
  title?: string;
  /** Step content/description */
  content: string;
  /** Position of the tooltip relative to target (top, bottom, left, right) */
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  /** Whether to highlight the target element */
  highlight?: boolean;
  /** Custom class name for this step */
  className?: string;
  /** Whether to scroll to the element if not in viewport */
  scrollTo?: boolean;
  /**
   * Wait for the target to appear if it doesn't exist yet.
   * If true, waits up to the tour's `targetWaitTimeout` (default 5000ms).
   * If a number, waits up to that many milliseconds.
   */
  waitForTarget?: boolean | number;
  /** Override the tour's interaction pattern for this specific step */
  interactionPattern?: InteractionPattern;
  /** Override the tour's auto-progress delay for this specific step (in milliseconds) */
  autoProgressDelay?: number;
  /** Callback before showing this step */
  beforeShow?: () => boolean | Promise<boolean>;
  /** Callback after showing this step */
  afterShow?: () => void;
  /** Callback before hiding this step */
  beforeHide?: () => boolean | Promise<boolean>;
  /** Callback after hiding this step */
  afterHide?: () => void;
}
