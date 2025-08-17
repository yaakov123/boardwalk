# CSS Overrides

Use your own CSS to adjust spacing, colors, or component styles. All elements are prefixed with `boardwalk-`.

## Common selectors
- `.boardwalk-container`
- `.boardwalk-overlay`
- `.boardwalk-highlight`
- `.boardwalk-tooltip`
- `.boardwalk-tooltip-title`
- `.boardwalk-tooltip-content`
- `.boardwalk-tooltip-buttons`
- `.boardwalk-btn`, `.boardwalk-btn-next`, `.boardwalk-btn-prev`

## Examples
```css
/* Larger tooltip with bolder title */
.boardwalk-tooltip {
  max-width: 420px;
}
.boardwalk-tooltip-title {
  font-weight: 600;
}

/* Brand the primary button */
.boardwalk-btn-next {
  background: var(--brand-primary);
}

/* Scoped via custom className on the tour */
/* new Tour({ id: 'x', className: 'my-tour' }) */
.boardwalk-container.my-tour .boardwalk-tooltip {
  border-radius: 12px;
}
```
