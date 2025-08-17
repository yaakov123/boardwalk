/**
 * Accessibility utilities for Boardwalk tour library
 * Provides ARIA attribute management and focus handling
 */

/**
 * ARIA roles for tour components
 */
export const ARIA_ROLES = {
  TOOLTIP: 'tooltip',
  DIALOG: 'dialog',
  BUTTON: 'button',
  NAVIGATION: 'navigation',
  PROGRESSBAR: 'progressbar'
};

/**
 * Focus management class for handling focus trapping and restoration
 */
export class FocusManager {
  private previouslyFocusedElement: HTMLElement | null = null;
  private container: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private firstFocusableElement: HTMLElement | null = null;
  private lastFocusableElement: HTMLElement | null = null;
  private active: boolean = false;
  private FOCUSABLE_ATTRIBUTE = 'data-boardwalk-focusable';

  /**
   * Create a focus manager for a container
   * @param container The container element to manage focus within
   */
  constructor(container: HTMLElement) {
    this.container = container;
    this.updateFocusableElements();
  }

  /**
   * Update the list of focusable elements within the container
   */
  public updateFocusableElements(): void {
    // Common focusable selectors
    const selector = `[${this.FOCUSABLE_ATTRIBUTE}]`;
    
    // Get all focusable elements
    const elements = Array.from(this.container.querySelectorAll(selector)) as HTMLElement[];
    
    // Filter out hidden elements and those with display: none
    this.focusableElements = elements.filter(el => {
      const style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null;
    });

    
    // Set first and last focusable elements
    this.firstFocusableElement = this.focusableElements[0] || null;
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1] || null;
  }

  /**
   * Activate focus trapping
   */
  public activate(): void {
    if (this.active) return;
    
    // Store currently focused element to restore later
    this.previouslyFocusedElement = document.activeElement as HTMLElement;
    
    // Update focusable elements
    this.updateFocusableElements();
    
    // Focus the first focusable element
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus();
    }
    
    // Add event listener for tab key to trap focus
    document.addEventListener('keydown', this.handleTabKey);
    
    this.active = true;
  }

  /**
   * Deactivate focus trapping and restore previous focus
   */
  public deactivate(): void {
    if (!this.active) return;
    
    // Remove event listener
    document.removeEventListener('keydown', this.handleTabKey);
    
    // Restore focus to previous element
    if (this.previouslyFocusedElement && this.previouslyFocusedElement.focus) {
      this.previouslyFocusedElement.focus();
    }
    
    this.active = false;
  }

  /**
   * Handle tab key to trap focus within container
   */
  private handleTabKey = (event: KeyboardEvent): void => {
    if (event.key !== 'Tab') return;
    
    // If no focusable elements, do nothing
    if (!this.firstFocusableElement || !this.lastFocusableElement) return;
    
    // Handle shift+tab to cycle backwards
    if (event.shiftKey) {
      if (document.activeElement === this.firstFocusableElement) {
        event.preventDefault();
        this.lastFocusableElement.focus();
      }
    } 
    // Handle tab to cycle forwards
    else {
      if (document.activeElement === this.lastFocusableElement) {
        event.preventDefault();
        this.firstFocusableElement.focus();
      }
    }
  };
}

/**
 * Apply ARIA attributes to an element
 * @param element The element to apply ARIA attributes to
 * @param attributes Object containing ARIA attribute key-value pairs
 */
export function applyAriaAttributes(element: HTMLElement, attributes: Record<string, string>): void {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(`aria-${key}`, value);
  });
}

/**
 * Set up ARIA live region for announcements
 * @param priority The priority of the live region (polite or assertive)
 * @returns The live region element
 */
export function createLiveRegion(priority: 'polite' | 'assertive' = 'polite'): HTMLElement {
  // Check if a live region already exists
  let liveRegion = document.getElementById('boardwalk-live-region');
  
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'boardwalk-live-region';
    liveRegion.className = 'boardwalk-sr-only';
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.setAttribute('role', 'status');
    document.body.appendChild(liveRegion);
  }
  
  return liveRegion;
}

/**
 * Announce a message to screen readers
 * @param message The message to announce
 * @param priority The priority of the announcement (polite or assertive)
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const liveRegion = createLiveRegion(priority);
  
  // Clear previous content and add new message
  liveRegion.textContent = '';
  
  // Force browser to recognize the change
  setTimeout(() => {
    liveRegion.textContent = message;
  }, 50);
}

/**
 * Add screenreader-only text to an element
 * @param element The element to add screenreader text to
 * @param text The text for screen readers
 */
export function addScreenReaderText(element: HTMLElement, text: string): void {
  const srElement = document.createElement('span');
  srElement.className = 'boardwalk-sr-only';
  srElement.textContent = text;
  element.appendChild(srElement);
}
