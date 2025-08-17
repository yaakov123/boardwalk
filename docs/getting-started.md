# Getting Started

This guide helps you install Boardwalk and create your first tour.

## Installation

```bash
npm install boardwalk
```

## Quick start

Add a Start Tour button to your page and start a tour.

```html
<button id="startTour">Start Tour</button>
<script type="module">
  import { Tour, setTheme } from 'boardwalk';

  // Optional: pick a built-in theme: 'default' | 'dark' | 'modern'
  setTheme('default');

  const tour = new Tour({
    id: 'welcome-tour',
    title: 'Welcome',
    // interactionPattern: 'button' | 'click-to-continue' | 'auto-progress'
    enableKeyboardNavigation: true
  });

  tour.addSteps([
    { target: '#nav', title: 'Navigation', content: 'Use the nav to explore.' },
    { target: '#cta', title: 'Call to Action', content: 'Click here to start.' }
  ]);

  document.getElementById('startTour')?.addEventListener('click', () => tour.start());
</script>
```

Notes:
- Styles are bundled with the library via `src/styles/tour.css`. No extra CSS import needed when bundling with Vite/Webpack.
- Each tour must have a unique `id` (`TourOptions.id`).

## Next steps
- Read Guides: `guides/tour-basics.md`
- Customize look & feel: `styling/theming.md` and `styling/css-variables.md`
- Explore the API: `api/tour.md`
