# Boardwalk

A lightweight, customizable interactive product tour library for web applications.

## Features

- 🚀 **Easy Integration**: Simple API to integrate with any website or web application
- 🎨 **Customizable**: Fully customizable appearance to match your brand
- 📱 **Responsive**: Works on all devices from desktop to mobile
- 🧠 **Smart Positioning**: Automatically positions tooltips to ensure they're always visible
- 🔄 **Callbacks & Events**: Rich set of callbacks and events to hook into the tour lifecycle
- 🪶 **Lightweight**: Small footprint with no external dependencies
- 🖱️ **Flexible Interaction**: Multiple interaction patterns including button navigation, click-to-continue, and auto-progress

## Installation

```bash
npm install boardwalk
```

## Basic Usage

```javascript
import { Tour } from 'boardwalk';

// Create a new tour
const tour = new Tour({
  id: 'my-tour',
  title: 'Welcome to My App',
  showProgress: true,
  showStepNumbers: true,
  interactionPattern: 'button', // 'button', 'click-to-continue', or 'auto-progress'
  autoProgressDelay: 5000 // milliseconds, used with 'auto-progress' pattern
});

// Add steps to the tour
tour.addSteps([
  {
    target: '#welcome-button',
    title: 'Welcome',
    content: 'This tour will guide you through our application.',
    position: 'bottom'
  },
  {
    target: '.feature-card',
    title: 'Features',
    content: 'Explore our amazing features.',
    position: 'right'
  },
  {
    target: '#dashboard-link',
    title: 'Dashboard',
    content: 'Click here to access your dashboard.',
    position: 'left'
  }
]);

// Start the tour
tour.start();
```

## API Reference

### Tour Class

#### Constructor

```javascript
const tour = new Tour(options);
```

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| id | string | required | Unique identifier for the tour |
| title | string | undefined | Optional tour title |
| showProgress | boolean | true | Whether to show progress indicator |
| showStepNumbers | boolean | true | Whether to show step numbers |
| className | string | undefined | Custom class name for styling |
| interactionPattern | string | 'button' | Interaction pattern ('button', 'click-to-continue', or 'auto-progress') |
| autoProgressDelay | number | 5000 | Delay in milliseconds for auto-progress pattern |
| onStart | function | undefined | Callback when tour starts |
| onEnd | function | undefined | Callback when tour ends |
| onCancel | function | undefined | Callback when tour is canceled |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| addStep | options | Add a step to the tour |
| addSteps | [options] | Add multiple steps to the tour |
| start | startAt = 0 | Start the tour at the specified step index |
| end | isCancelled = false | End the tour |
| goToStep | index | Go to a specific step |
| nextStep | - | Go to the next step |
| prevStep | - | Go to the previous step |
| getCurrentStepIndex | - | Get the current step index |
| getTotalSteps | - | Get the total number of steps |
| getInteractionPattern | - | Get the current interaction pattern |
| setInteractionPattern | pattern | Set the interaction pattern |
| getAutoProgressDelay | - | Get the auto-progress delay |
| setAutoProgressDelay | delay | Set the auto-progress delay |

### Step Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| target | string/HTMLElement | required | Target element selector or element |
| title | string | undefined | Step title |
| content | string | required | Step content/description |
| position | string | 'bottom' | Position of the tooltip (top, bottom, left, right, auto) |
| highlight | boolean | true | Whether to highlight the target element |
| className | string | undefined | Custom class name for this step |
| scrollTo | boolean | true | Whether to scroll to the element if not in viewport |
| interactionPattern | string | undefined | Override tour's interaction pattern for this step |
| autoProgressDelay | number | undefined | Override tour's auto-progress delay for this step |
| beforeShow | function | undefined | Callback before showing this step |
| afterShow | function | undefined | Callback after showing this step |
| beforeHide | function | undefined | Callback before hiding this step |
| afterHide | function | undefined | Callback after hiding this step |

## Customization

You can customize the appearance of the tour by overriding the default CSS classes:

```css
.boardwalk-tooltip {
  /* Custom tooltip styles */
}

.boardwalk-btn-next {
  /* Custom next button styles */
}

.boardwalk-btn-prev {
  /* Custom previous button styles */
}

.boardwalk-instruction-text {
  /* Custom instruction text styles for click-to-continue and auto-progress */
}

body.boardwalk-click-to-continue {
  /* Custom cursor styles for click-to-continue pattern */
}
```

### Keyboard Navigation

You can customize keyboard navigation bindings:

```javascript
const tour = new Tour({
  steps: [...],
  keyboardBindings: {
    next: ['ArrowRight', 'Space'],
    previous: ['ArrowLeft'],
    close: ['Escape']
  }
});
```

### Interaction Patterns

Boardwalk supports three interaction patterns:

1. **Button Navigation** (default): Users navigate through the tour using the next/previous buttons.
2. **Click-to-Continue**: Users click anywhere on the page to advance to the next step.
3. **Auto-Progress**: The tour automatically advances to the next step after a configurable delay.

```javascript
// Using click-to-continue pattern
const tour = new Tour({
  id: 'my-tour',
  interactionPattern: 'click-to-continue'
});

// Using auto-progress pattern with custom delay
const tour = new Tour({
  id: 'my-tour',
  interactionPattern: 'auto-progress',
  autoProgressDelay: 8000 // 8 seconds
});

// Change interaction pattern dynamically
tour.setInteractionPattern('auto-progress');
tour.setAutoProgressDelay(3000);

// Override interaction pattern for specific steps
tour.addStep({
  target: '#feature-1',
  content: 'This step uses auto-progress',
  interactionPattern: 'auto-progress',
  autoProgressDelay: 10000 // 10 seconds for this step only
});
```

### Accessibility Features

Boardwalk includes built-in accessibility features:

```javascript
// Make screen reader announcements
import { announce } from 'boardwalk';
announce('Tour started', 'assertive');

// Enable focus trap for keyboard users
const tour = new Tour({
  steps: [...],
  trapFocus: true
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
