import { Step } from './step';
import { TourOptions, StepOptions, InteractionPattern } from './types';
import { KeyboardManager, KeyBindings } from './keyboard';
import { FocusManager, createLiveRegion, announce, ARIA_ROLES } from './accessibility';

/**
 * Tour class for creating interactive product tours
 */
export class Tour {
  private options: TourOptions;
  private steps: Step[] = [];
  private currentStepIndex: number = -1;
  private overlay: HTMLElement | null = null;
  private container: HTMLElement | null = null;
  private isActive: boolean = false;
  private keyboardManager: KeyboardManager | null = null;
  private focusManager: FocusManager | null = null;
  private liveRegion: HTMLElement | null = null;
  private defaultInteractionPattern: InteractionPattern = 'button';
  private defaultAutoProgressDelay: number = 5000;

  /**
   * Create a new tour
   * @param options Tour configuration options
   */
  constructor(options: TourOptions) {
    this.options = {
      showProgress: true,
      showStepNumbers: true,
      enableKeyboardNavigation: true,
      interactionPattern: 'button',
      autoProgressDelay: 5000,
      ...options
    };
    
    // Set default interaction pattern and delay from options
    if (this.options.interactionPattern) {
      this.defaultInteractionPattern = this.options.interactionPattern;
    }
    
    if (this.options.autoProgressDelay) {
      this.defaultAutoProgressDelay = this.options.autoProgressDelay;
    }
    
    this.initDOM();
    
    // Initialize keyboard manager if enabled
    if (this.options.enableKeyboardNavigation) {
      this.initKeyboardNavigation(this.options.keyBindings);
    }
  }

  /**
   * Initialize DOM elements for the tour
   */
  private initDOM(): void {
    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'boardwalk-overlay';
    this.overlay.setAttribute('aria-hidden', 'true');
    
    // Create container for tour content
    this.container = document.createElement('div');
    this.container.className = 'boardwalk-container';
    this.container.setAttribute('role', ARIA_ROLES.DIALOG);
    this.container.setAttribute('aria-label', 'Tour content');
    
    if (this.options.className) {
      this.container.classList.add(this.options.className);
    }
    
    // Create skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.className = 'boardwalk-skip-link boardwalk-focus-visible';
    skipLink.textContent = 'Skip tour';
    skipLink.href = '#';
    skipLink.setAttribute('aria-label', 'Skip tour');
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      this.end(true);
    });
    
    this.container.appendChild(skipLink);
    
    // Create live region for announcements
    this.liveRegion = createLiveRegion('polite');
    
    // Append to body when needed (not now to avoid polluting DOM)
  }

  /**
   * Add a step to the tour
   * @param options Step configuration options
   * @returns The tour instance for chaining
   */
  public addStep(options: StepOptions): Tour {
    const step = new Step(options, this);
    this.steps.push(step);
    return this;
  }

  /**
   * Add multiple steps to the tour
   * @param stepsOptions Array of step configuration options
   * @returns The tour instance for chaining
   */
  public addSteps(stepsOptions: StepOptions[]): Tour {
    stepsOptions.forEach(options => this.addStep(options));
    return this;
  }

  /**
   * Start the tour
   * @param startAt Optional index to start from
   * @returns The tour instance
   */
  public start(startAt: number = 0): Tour {
    if (this.isActive) return this;
    
    if (startAt < 0 || startAt >= this.steps.length) {
      startAt = 0;
    }
    
    this.isActive = true;
    
    // Append overlay and container to body
    document.body.appendChild(this.overlay!);
    document.body.appendChild(this.container!);
    
    // Enable keyboard navigation if available
    if (this.keyboardManager && this.options.enableKeyboardNavigation) {
      this.keyboardManager.enable();
    }
    
    // Initialize focus management
    this.focusManager = new FocusManager(this.container!);
    this.focusManager.activate();
    
    // Announce tour start to screen readers
    announce(`Tour started. ${this.steps.length} steps in total.`, 'assertive');
    
    // Set initial content for live region
    if (this.liveRegion) {
      this.liveRegion.textContent = `Tour started with ${this.steps.length} steps.`;
    }
    
    // Call onStart callback
    if (this.options.onStart) {
      this.options.onStart();
    }
    
    // Show first step
    this.goToStep(startAt);
    
    return this;
  }

  /**
   * End the tour
   * @param isCancelled Whether the tour was cancelled
   * @returns The tour instance
   */
  public end(isCancelled: boolean = false): Tour {
    if (!this.isActive) return this;
    
    this.isActive = false;
    
    // Disable keyboard navigation
    if (this.keyboardManager) {
      this.keyboardManager.disable();
    }
    
    // Deactivate focus management
    if (this.focusManager) {
      this.focusManager.deactivate();
      this.focusManager = null;
    }
    
    // Hide current step
    if (this.currentStepIndex >= 0) {
      this.steps[this.currentStepIndex].hide();
    }
    
    // Remove overlay and container
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
    
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    
    // Announce tour end to screen readers
    announce(`Tour ${isCancelled ? 'cancelled' : 'completed'}.`, 'polite');
    
    // Call appropriate callback
    if (isCancelled && this.options.onCancel) {
      this.options.onCancel();
    } else if (!isCancelled && this.options.onEnd) {
      this.options.onEnd();
    }
    
    return this;
  }

  /**
   * Go to a specific step
   * @param index Step index
   * @returns The tour instance
   */
  public goToStep(index: number): Tour {
    if (!this.isActive || index < 0 || index >= this.steps.length) return this;
    
    // Hide current step if any
    if (this.currentStepIndex >= 0) {
      this.steps[this.currentStepIndex].hide();
    }
    
    this.currentStepIndex = index;
    this.steps[index].show();
    
    // Update focus management for new step
    if (this.focusManager) {
      setTimeout(() => {
        this.focusManager?.updateFocusableElements();
      }, 100); // Short delay to ensure DOM is updated
    }
    
    return this;
  }

  /**
   * Go to the next step
   * @returns The tour instance
   */
  public nextStep(): Tour {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.goToStep(this.currentStepIndex + 1);
    } else {
      this.end();
    }
    return this;
  }

  /**
   * Go to the previous step
   * @returns The tour instance
   */
  public prevStep(): Tour {
    if (this.currentStepIndex > 0) {
      this.goToStep(this.currentStepIndex - 1);
    }
    return this;
  }

  /**
   * Get the container element
   * @returns The container element
   */
  public getContainer(): HTMLElement | null {
    return this.container;
  }

  /**
   * Get the current step index
   * @returns Current step index
   */
  public getCurrentStepIndex(): number {
    return this.currentStepIndex;
  }

  /**
   * Get the total number of steps
   * @returns Total number of steps
   */
  public getTotalSteps(): number {
    return this.steps.length;
  }
  
  /**
   * Initialize keyboard navigation
   * @param keyBindings Custom key bindings (optional)
   */
  private initKeyboardNavigation(keyBindings?: Partial<KeyBindings>): void {
    
    this.keyboardManager = new KeyboardManager(this, keyBindings);
    
    // Enable keyboard navigation if tour is already active
    if (this.isActive && this.options.enableKeyboardNavigation) {
      this.keyboardManager.enable();
    }
    
    // Listen for custom key actions
    document.addEventListener('boardwalk:keyaction', ((event: CustomEvent) => {
      if (this.options.onKeyAction) {
        this.options.onKeyAction(event.detail.action, event.detail.key);
      }
    }) as EventListener);
      
  }
  
  /**
   * Set custom key bindings for keyboard navigation
   * @param keyBindings Custom key bindings
   * @returns The tour instance
   */
  public setKeyBindings(keyBindings: Partial<KeyBindings>): Tour {
    if (this.keyboardManager) {
      this.keyboardManager.setKeyBindings(keyBindings);
    } else if (this.options.enableKeyboardNavigation) {
      // Initialize keyboard manager with custom bindings if not already created
      this.initKeyboardNavigation(keyBindings);
    }
    return this;
  }
  
  /**
   * Enable or disable keyboard navigation
   * @param enable Whether to enable keyboard navigation
   * @returns The tour instance
   */
  public enableKeyboardNavigation(enable: boolean): Tour {
    this.options.enableKeyboardNavigation = enable;
    
    if (this.keyboardManager) {
      if (enable && this.isActive) {
        this.keyboardManager.enable();
      } else {
        this.keyboardManager.disable();
      }
    } else if (enable) {
      // Initialize keyboard manager if not already created
      this.initKeyboardNavigation(this.options.keyBindings);
    }
    
    return this;
  }
  
  /**
   * Get the current interaction pattern
   * @returns The current interaction pattern
   */
  public getInteractionPattern(): InteractionPattern {
    return this.options.interactionPattern || this.defaultInteractionPattern;
  }
  
  /**
   * Set the interaction pattern for the tour
   * @param pattern The interaction pattern to use
   * @returns The tour instance
   */
  public setInteractionPattern(pattern: InteractionPattern): Tour {
    this.options.interactionPattern = pattern;
    return this;
  }
  
  /**
   * Get the auto-progress delay
   * @returns The auto-progress delay in milliseconds
   */
  public getAutoProgressDelay(): number {
    return this.options.autoProgressDelay || this.defaultAutoProgressDelay;
  }
  
  /**
   * Set the auto-progress delay
   * @param delay The delay in milliseconds
   * @returns The tour instance
   */
  public setAutoProgressDelay(delay: number): Tour {
    this.options.autoProgressDelay = delay;
    return this;
  }
}
