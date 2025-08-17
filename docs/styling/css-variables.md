# CSS Variables

Boardwalk exposes CSS variables for fine-grained styling. Override them in your global CSS or via `customizeTheme({ cssVariables: { ... }})`.

## Core variables
```css
:root {
  /* Colors */
  --boardwalk-primary-color: #4a90e2;
  --boardwalk-primary-color-hover: #3a80d2;
  --boardwalk-primary-color-active: #2a70c2;
  --boardwalk-secondary-color: #f1f1f1;
  --boardwalk-secondary-color-hover: #e1e1e1;
  --boardwalk-secondary-color-active: #d1d1d1;
  --boardwalk-text-color: #333333;
  --boardwalk-text-color-secondary: #666666;
  --boardwalk-text-color-muted: #777777;
  --boardwalk-bg-color: #ffffff;
  --boardwalk-border-color: #dddddd;
  --boardwalk-overlay-color: rgba(0, 0, 0, 0.5);
  --boardwalk-highlight-color: rgba(74, 144, 226, 0.3);
  --boardwalk-error-color: #e74c3c;
  --boardwalk-success-color: #2ecc71;
  --boardwalk-warning-color: #f39c12;
  --boardwalk-info-color: #3498db;

  /* Typography */
  --boardwalk-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --boardwalk-font-size-base: 14px;
  --boardwalk-font-size-small: 12px;
  --boardwalk-font-size-large: 16px;
  --boardwalk-font-size-title: 18px;
  --boardwalk-font-weight-normal: 400;
  --boardwalk-font-weight-medium: 500;
  --boardwalk-font-weight-bold: 600;
  --boardwalk-line-height: 1.5;

  /* Spacing */
  --boardwalk-spacing-xs: 5px;
  --boardwalk-spacing-sm: 10px;
  --boardwalk-spacing-md: 15px;
  --boardwalk-spacing-lg: 20px;
  --boardwalk-spacing-xl: 30px;

  /* Borders */
  --boardwalk-border-radius-sm: 4px;
  --boardwalk-border-radius-md: 6px;
  --boardwalk-border-radius-lg: 8px;
  --boardwalk-border-width: 1px;
  --boardwalk-border-style: solid;

  /* Shadows */
  --boardwalk-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);
  --boardwalk-shadow-md: 0 2px 10px rgba(0, 0, 0, 0.15);
  --boardwalk-shadow-lg: 0 5px 15px rgba(0, 0, 0, 0.2);
  --boardwalk-shadow-tooltip: 0 2px 20px rgba(0, 0, 0, 0.2);
  --boardwalk-shadow-highlight: 0 0 0 9999px var(--boardwalk-overlay-color);

  /* Layers */
  --boardwalk-z-index-overlay: 9998;
  --boardwalk-z-index-highlight: 9997;
  --boardwalk-z-index-tooltip: 10000;
  --boardwalk-z-index-highlighted-element: 9999;

  /* Motion */
  --boardwalk-transition-duration: 0.3s;
  --boardwalk-transition-timing: ease;
  --boardwalk-animation-duration: 1.5s;

  /* Components */
  --boardwalk-tooltip-max-width: 350px;
  --boardwalk-tooltip-arrow-size: 12px;
  --boardwalk-tooltip-spacing: 10px;
  --boardwalk-btn-padding-y: 8px;
  --boardwalk-btn-padding-x: 16px;
  --boardwalk-btn-font-size: var(--boardwalk-font-size-base);
  --boardwalk-btn-font-weight: var(--boardwalk-font-weight-medium);
  --boardwalk-progress-height: 4px;
  --boardwalk-progress-bg: var(--boardwalk-secondary-color);
}
```

## Override examples
Global CSS:
```css
/* app.css */
:root {
  --boardwalk-primary-color: #8e24aa;
  --boardwalk-border-radius-md: 10px;
}
```
Via Theme API:
```ts
import { customizeTheme } from 'boardwalk';
customizeTheme({ cssVariables: { '--boardwalk-border-radius-md': '10px' } });
```
