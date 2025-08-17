import { Tour } from './tour';
import { StepOptions, InteractionPattern } from './types';
import { applyAriaAttributes, ARIA_ROLES, announce } from './accessibility';

/**
 * Step class for individual tour steps
 */
export class Step {
  private options: StepOptions;
  private tour: Tour;
  private element: HTMLElement | null = null;
  private targetElement: HTMLElement | null = null;
  private tooltipElement: HTMLElement | null = null;
  private clickHandler: ((event: MouseEvent) => void) | null = null;
  private autoProgressTimeout: number | null = null;
  
  /**
   * Create a new tour step
   * @param options Step configuration options
   * @param tour Parent tour instance
   */
  constructor(options: StepOptions, tour: Tour) {
    this.options = {
      position: 'bottom',
      highlight: true,
      scrollTo: true,
      ...options
    };
    this.tour = tour;
    this.initTargetElement();
  }
  
  /**
   * Initialize the target element
   */
  private initTargetElement(): void {
    if (typeof this.options.target === 'string') {
      this.targetElement = document.querySelector(this.options.target);
    } else {
      this.targetElement = this.options.target;
    }
    
    if (!this.targetElement) {
      console.warn(`Boardwalk: Target element not found for selector "${this.options.target}"`);
    }
  }
  
  /**
   * Get the effective interaction pattern for this step
   */
  private getInteractionPattern(): InteractionPattern {
    // Step-specific pattern overrides tour pattern
    if (this.options.interactionPattern) {
      return this.options.interactionPattern;
    }
    
    // Get tour's pattern or default to button
    return this.tour.getInteractionPattern() || 'button';
  }
  
  /**
   * Get the effective auto-progress delay for this step
   */
  private getAutoProgressDelay(): number {
    // Step-specific delay overrides tour delay
    if (typeof this.options.autoProgressDelay === 'number') {
      return this.options.autoProgressDelay;
    }
    
    // Get tour's delay or default to 5000ms
    return this.tour.getAutoProgressDelay() || 5000;
  }
  
  /**
   * Create the tooltip element
   */
  private createTooltip(): void {
    const container = this.tour.getContainer();
    if (!container) return;
    
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.className = 'boardwalk-tooltip';
    this.tooltipElement.setAttribute('role', ARIA_ROLES.DIALOG);
    
    // Add ARIA attributes for accessibility
    const stepNumber = this.tour.getCurrentStepIndex() + 1;
    applyAriaAttributes(this.tooltipElement, {
      'labelledby': `boardwalk-title-${stepNumber}`,
      'describedby': `boardwalk-content-${stepNumber}`,
      'modal': 'true',
      'live': 'polite'
    });
    
    if (this.options.className) {
      this.tooltipElement.classList.add(this.options.className);
    }
    
    // Add title if provided
    if (this.options.title) {
      const titleElement = document.createElement('div');
      titleElement.className = 'boardwalk-tooltip-title';
      titleElement.textContent = this.options.title;
      titleElement.id = `boardwalk-title-${this.tour.getCurrentStepIndex() + 1}`;
      this.tooltipElement.appendChild(titleElement);
    }
    
    // Add content
    const contentElement = document.createElement('div');
    contentElement.className = 'boardwalk-tooltip-content';
    contentElement.innerHTML = this.options.content;
    contentElement.id = `boardwalk-content-${this.tour.getCurrentStepIndex() + 1}`;
    this.tooltipElement.appendChild(contentElement);
    
    // Add navigation buttons
    const buttonsElement = document.createElement('div');
    buttonsElement.className = 'boardwalk-tooltip-buttons';
    
    const interactionPattern = this.getInteractionPattern();
    
    // Previous button
    if (this.tour.getCurrentStepIndex() > 0) {
      const prevButton = document.createElement('button');
      prevButton.className = 'boardwalk-btn boardwalk-btn-prev boardwalk-focus-visible';
      prevButton.setAttribute('data-boardwalk-focusable', 'true');
      prevButton.textContent = 'Previous';
      prevButton.setAttribute('aria-label', 'Go to previous step');
      prevButton.addEventListener('click', () => this.tour.prevStep());
      buttonsElement.appendChild(prevButton);
    }
    
    // Only show next/finish button for button interaction pattern
    if (interactionPattern === 'button') {
      // Next/Finish button
      const nextButton = document.createElement('button');
      nextButton.className = 'boardwalk-btn boardwalk-btn-next boardwalk-focus-visible';
      nextButton.setAttribute('data-boardwalk-focusable', 'true');
      if (this.tour.getCurrentStepIndex() < this.tour.getTotalSteps() - 1) {
        nextButton.textContent = 'Next';
        nextButton.setAttribute('aria-label', 'Go to next step');
        nextButton.addEventListener('click', () => this.tour.nextStep());
      } else {
        nextButton.textContent = 'Finish';
        nextButton.setAttribute('aria-label', 'Finish tour');
        nextButton.addEventListener('click', () => this.tour.end());
      }
      
      buttonsElement.appendChild(nextButton);
    } else {
      // For click-to-continue and auto-progress, add instruction text
      const instructionText = document.createElement('div');
      instructionText.className = 'boardwalk-instruction-text';
      
      if (interactionPattern === 'click-to-continue') {
        instructionText.textContent = 'Click anywhere to continue';
      } else if (interactionPattern === 'auto-progress') {
        const delay = this.getAutoProgressDelay();
        const seconds = Math.ceil(delay / 1000);
        instructionText.textContent = `Continuing in ${seconds} seconds...`;
      }
      
      buttonsElement.appendChild(instructionText);
    }
    
    // Add progress indicator if enabled
    const currentIndex = this.tour.getCurrentStepIndex();
    const totalSteps = this.tour.getTotalSteps();
    
    const progressElement = document.createElement('div');
    progressElement.className = 'boardwalk-tooltip-progress';
    progressElement.textContent = `${currentIndex + 1} of ${totalSteps}`;
    progressElement.setAttribute('role', ARIA_ROLES.PROGRESSBAR);
    progressElement.setAttribute('aria-valuemin', '1');
    progressElement.setAttribute('aria-valuemax', `${totalSteps}`);
    progressElement.setAttribute('aria-valuenow', `${currentIndex + 1}`);
    
    buttonsElement.appendChild(progressElement);
    this.tooltipElement.appendChild(buttonsElement);
    
    container.appendChild(this.tooltipElement);
  }
  
  /**
   * Position the tooltip relative to the target element
   */
  private positionTooltip(): void {
    if (!this.tooltipElement || !this.targetElement) return;
    
    const targetRect = this.targetElement.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    
    let top = 0;
    let left = 0;
    
    // Calculate position based on specified position
    switch (this.options.position) {
      case 'top':
        top = targetRect.top - tooltipRect.height - 10;
        left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'bottom':
        top = targetRect.bottom + 10;
        left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'left':
        top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        left = targetRect.left - tooltipRect.width - 10;
        break;
      case 'right':
        top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        left = targetRect.right + 10;
        break;
      case 'auto':
      default:
        // Auto-position based on available space
        // Default to bottom if enough space
        if (targetRect.bottom + tooltipRect.height + 10 <= window.innerHeight) {
          top = targetRect.bottom + 10;
          left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        } 
        // Try top
        else if (targetRect.top - tooltipRect.height - 10 >= 0) {
          top = targetRect.top - tooltipRect.height - 10;
          left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        }
        // Try right
        else if (targetRect.right + tooltipRect.width + 10 <= window.innerWidth) {
          top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
          left = targetRect.right + 10;
        }
        // Try left
        else {
          top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
          left = targetRect.left - tooltipRect.width - 10;
        }
        break;
    }
    
    // Ensure tooltip stays within viewport
    if (left < 0) left = 10;
    if (top < 0) top = 10;
    if (left + tooltipRect.width > window.innerWidth) {
      left = window.innerWidth - tooltipRect.width - 10;
    }
    if (top + tooltipRect.height > window.innerHeight) {
      top = window.innerHeight - tooltipRect.height - 10;
    }
    
    // Apply position
    this.tooltipElement.style.top = `${top + window.scrollY}px`;
    this.tooltipElement.style.left = `${left + window.scrollX}px`;
    
    // Add position class for styling
    this.tooltipElement.setAttribute('data-position', this.options.position || 'auto');
  }
  
  /**
   * Highlight the target element
   */
  private highlightTarget(): void {
    if (!this.targetElement || !this.options.highlight) return;
    
    this.targetElement.classList.add('boardwalk-highlighted');
    
    // Add ARIA attributes to the target element
    const originalTabIndex = this.targetElement.getAttribute('tabindex');
    if (!originalTabIndex || originalTabIndex === '-1') {
      this.targetElement.setAttribute('tabindex', '0');
      // Store original tabindex to restore later
      this.targetElement.dataset.originalTabindex = originalTabIndex || '';
    }
    
    // Mark the element as highlighted for screen readers
    applyAriaAttributes(this.targetElement, {
      'highlighted': 'true',
      'describedby': `boardwalk-content-${this.tour.getCurrentStepIndex() + 1}`
    });
    
    // Create a highlight effect around the target
    const rect = this.targetElement.getBoundingClientRect();
    const highlightElement = document.createElement('div');
    highlightElement.className = 'boardwalk-highlight';
    highlightElement.style.top = `${rect.top + window.scrollY}px`;
    highlightElement.style.left = `${rect.left + window.scrollX}px`;
    highlightElement.style.width = `${rect.width}px`;
    highlightElement.style.height = `${rect.height}px`;
    highlightElement.setAttribute('aria-hidden', 'true'); // Hide from screen readers
    
    document.body.appendChild(highlightElement);
    this.element = highlightElement;
  }
  
  /**
   * Setup click-to-continue interaction
   */
  private setupClickToContinue(): void {
    // Remove any existing click handler
    this.removeClickToContinue();
    
    // Add body class for cursor styling
    document.body.classList.add('boardwalk-click-to-continue');
    
    // Create new click handler
    this.clickHandler = (event: MouseEvent) => {
      // Ignore clicks on buttons or interactive elements
      const target = event.target as HTMLElement;
      if (target.closest('button, a, input, select, textarea')) {
        return;
      }
      
      // Advance to next step or end tour
      if (this.tour.getCurrentStepIndex() < this.tour.getTotalSteps() - 1) {
        this.tour.nextStep();
      } else {
        this.tour.end();
      }
    };
    
    // Add click handler to document
    document.addEventListener('click', this.clickHandler);
  }
  
  /**
   * Remove click-to-continue handler
   */
  private removeClickToContinue(): void {
    if (this.clickHandler) {
      document.removeEventListener('click', this.clickHandler);
      this.clickHandler = null;
      
      // Remove body class for cursor styling
      document.body.classList.remove('boardwalk-click-to-continue');
    }
  }
  
  /**
   * Setup auto-progress interaction
   */
  private setupAutoProgress(): void {
    // Clear any existing timeout
    this.clearAutoProgressTimeout();
    
    const delay = this.getAutoProgressDelay();
    
    // Set new timeout
    this.autoProgressTimeout = window.setTimeout(() => {
      if (this.tour.getCurrentStepIndex() < this.tour.getTotalSteps() - 1) {
        this.tour.nextStep();
      } else {
        this.tour.end();
      }
    }, delay);
    
    // Update countdown if we have a tooltip element
    if (this.tooltipElement) {
      const instructionText = this.tooltipElement.querySelector('.boardwalk-instruction-text');
      if (instructionText) {
        let remainingSeconds = Math.ceil(delay / 1000);
        
        const updateCountdown = () => {
          if (remainingSeconds > 0 && instructionText) {
            instructionText.textContent = `Continuing in ${remainingSeconds} seconds...`;
            remainingSeconds--;
            setTimeout(updateCountdown, 1000);
          }
        };
        
        updateCountdown();
      }
    }
  }
  
  /**
   * Clear auto-progress timeout
   */
  private clearAutoProgressTimeout(): void {
    if (this.autoProgressTimeout !== null) {
      window.clearTimeout(this.autoProgressTimeout);
      this.autoProgressTimeout = null;
    }
  }
  
  /**
   * Show this step
   */
  public async show(): Promise<void> {
    // Call beforeShow callback if provided
    if (this.options.beforeShow) {
      const shouldProceed = await Promise.resolve(this.options.beforeShow());
      if (!shouldProceed) return;
    }
    
    // Announce step to screen readers
    const stepNumber = this.tour.getCurrentStepIndex() + 1;
    const totalSteps = this.tour.getTotalSteps();
    const title = this.options.title || 'Step';
    announce(`${title}, step ${stepNumber} of ${totalSteps}`, 'polite');
    
    // Scroll to target if needed
    if (this.targetElement && this.options.scrollTo) {
      this.targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      
      // Wait for scroll to complete
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    this.highlightTarget();
    this.createTooltip();
    this.positionTooltip();
    
    // Setup interaction pattern
    const interactionPattern = this.getInteractionPattern();
    
    if (interactionPattern === 'click-to-continue') {
      this.setupClickToContinue();
    } else if (interactionPattern === 'auto-progress') {
      this.setupAutoProgress();
    }
    
    // Call afterShow callback if provided
    if (this.options.afterShow) {
      this.options.afterShow();
    }
  }
  
  /**
   * Hide this step
   */
  public async hide(): Promise<void> {
    // Call beforeHide callback if provided
    if (this.options.beforeHide) {
      const shouldProceed = await Promise.resolve(this.options.beforeHide());
      if (!shouldProceed) return;
    }
    
    // Clean up interaction patterns
    this.removeClickToContinue();
    this.clearAutoProgressTimeout();
    
    // Remove highlight
    if (this.targetElement) {
      this.targetElement.classList.remove('boardwalk-highlighted');
      
      // Restore original tabindex
      if (this.targetElement.dataset.originalTabindex !== undefined) {
        const originalTabindex = this.targetElement.dataset.originalTabindex;
        if (originalTabindex === '') {
          this.targetElement.removeAttribute('tabindex');
        } else {
          this.targetElement.setAttribute('tabindex', originalTabindex);
        }
        delete this.targetElement.dataset.originalTabindex;
      }
      
      // Remove ARIA attributes
      this.targetElement.removeAttribute('aria-highlighted');
      this.targetElement.removeAttribute('aria-describedby');
    }
    
    // Remove highlight element
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      this.element = null;
    }
    
    // Remove tooltip
    if (this.tooltipElement && this.tooltipElement.parentNode) {
      this.tooltipElement.parentNode.removeChild(this.tooltipElement);
      this.tooltipElement = null;
    }
    
    // Call afterHide callback if provided
    if (this.options.afterHide) {
      this.options.afterHide();
    }
  }
}
