# Accessibility

Boardwalk includes ARIA roles, focus management, and screen-reader announcements.

## Announcements
```ts
import { announce } from 'boardwalk';
announce('Tour started');
```
Tours also announce step counts and titles automatically.

## Roles and attributes
- Tooltip/dialog elements use `role="dialog"` and `aria-*` attributes.
- Targets receive `aria-describedby` and are keyboard-focusable while highlighted.

## Screen reader helpers
```ts
import { addScreenReaderText, createLiveRegion } from 'boardwalk';
const live = createLiveRegion('polite');
addScreenReaderText(document.querySelector('#someEl')!, 'Visible to screen readers only');
```

## Best practices
- Ensure color contrast for custom themes.
- Provide clear, concise step titles and content.
- Keep keyboard navigation enabled for accessibility.
