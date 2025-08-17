import { Tour } from './tour';

/**
 * Default key bindings for tour navigation
 */
export const DEFAULT_KEY_BINDINGS = {
  next: ['ArrowRight', 'Space', 'Enter'],
  previous: ['ArrowLeft'],
  close: ['Escape']
};

/**
 * Type definition for key bindings
 */
export interface KeyBindings {
  next: string[];
  previous: string[];
  close: string[];
  [key: string]: string[]; // Allow for custom actions
}

/**
 * KeyboardManager class for handling keyboard navigation in tours
 */
export class KeyboardManager {
  private tour: Tour;
  private keyBindings: KeyBindings;
  private enabled: boolean = false;
  private keydownHandler: (event: KeyboardEvent) => void;

  /**
   * Create a new KeyboardManager
   * @param tour The tour instance to control
   * @param keyBindings Custom key bindings (optional)
   */
  constructor(tour: Tour, keyBindings?: Partial<KeyBindings>) {
    this.tour = tour;
    this.keyBindings = {
      ...DEFAULT_KEY_BINDINGS,
      ...(keyBindings || {})
    };

    // Create bound handler for event listener
    this.keydownHandler = this.handleKeydown.bind(this);
  }

  /**
   * Enable keyboard navigation
   */
  public enable(): void {
    if (this.enabled) return;
    
    document.addEventListener('keydown', this.keydownHandler);
    this.enabled = true;
  }

  /**
   * Disable keyboard navigation
   */
  public disable(): void {
    if (!this.enabled) return;
    
    document.removeEventListener('keydown', this.keydownHandler);
    this.enabled = false;
  }

  /**
   * Set custom key bindings
   * @param keyBindings Custom key bindings
   */
  public setKeyBindings(keyBindings: Partial<KeyBindings>): void {
    this.keyBindings = {
      ...DEFAULT_KEY_BINDINGS,
      ...keyBindings
    };
  }

  /**
   * Get current key bindings
   * @returns Current key bindings
   */
  public getKeyBindings(): KeyBindings {
    return { ...this.keyBindings };
  }

  /**
   * Handle keydown events
   * @param event Keyboard event
   */
  private handleKeydown(event: KeyboardEvent): void {
    // Skip if modifier keys are pressed
    if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
      return;
    }

    // Skip if target is an input or textarea
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return;
    }

    const key = event.key;

    // Check for next action
    if (this.keyBindings.next.includes(key)) {
      event.preventDefault();
      this.tour.nextStep();
      return;
    }

    // Check for previous action
    if (this.keyBindings.previous.includes(key)) {
      event.preventDefault();
      this.tour.prevStep();
      return;
    }

    // Check for close action
    if (this.keyBindings.close.includes(key)) {
      event.preventDefault();
      this.tour.end();
      return;
    }

    // Check for custom actions
    Object.keys(this.keyBindings).forEach(action => {
      if (['next', 'previous', 'close'].includes(action)) return;
      
      if (this.keyBindings[action].includes(key)) {
        event.preventDefault();
        // Dispatch custom event for the tour to handle
        const customEvent = new CustomEvent('boardwalk:keyaction', {
          detail: { action, key }
        });
        document.dispatchEvent(customEvent);
      }
    });
  }
}

/**
 * Create a keyboard manager for a tour
 * @param tour Tour instance
 * @param keyBindings Custom key bindings (optional)
 * @returns KeyboardManager instance
 */
export function createKeyboardManager(tour: Tour, keyBindings?: Partial<KeyBindings>): KeyboardManager {
  return new KeyboardManager(tour, keyBindings);
}
