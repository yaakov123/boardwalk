# Boardwalk Theming Guide

This guide explains how to use and customize themes in Boardwalk to create visually appealing and consistent user tours.

## Built-in Themes

Boardwalk comes with three built-in themes:

1. **Default Theme** - A clean theme with a blue primary color scheme and light backgrounds
2. **Dark Theme** - A dark color scheme with blue accents, ideal for dark mode interfaces
3. **Modern Theme** - A purple/violet color scheme with clean, modern aesthetics

## Using Themes

To set a theme for your Boardwalk tour, use the `setTheme` function:

```typescript
import { setTheme } from 'boardwalk';

// Use one of the built-in themes
setTheme('default'); // Default blue theme
setTheme('dark');    // Dark theme
setTheme('modern');  // Modern purple theme
```

## Customizing Themes

### Basic Theme Customization

You can customize the appearance of Boardwalk by using the `customizeTheme` function:

```typescript
import { customizeTheme } from 'boardwalk';

customizeTheme({
  primaryColor: '#ff5722',      // Orange primary color
  secondaryColor: '#f5f5f5',    // Light gray secondary color
  textColor: '#333333',         // Dark text
  backgroundColor: '#ffffff',   // White background
  borderColor: '#e0e0e0',       // Light gray borders
  overlayColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 8,              // 8px border radius
});
```

### Creating Custom Themes

For more advanced theming, you can create custom themes with the `createTheme` function:

```typescript
import { createTheme, setTheme } from 'boardwalk';

// Create a custom theme
createTheme('ocean', {
  primaryColor: '#0277bd',      // Blue primary color
  secondaryColor: '#e1f5fe',    // Light blue secondary color
  textColor: '#263238',         // Dark blue-gray text
  backgroundColor: '#ffffff',   // White background
  borderColor: '#b3e5fc',       // Light blue borders
  overlayColor: 'rgba(2, 119, 189, 0.3)', // Semi-transparent blue overlay
  fontFamily: 'Lato, sans-serif',
  borderRadius: 4,              // 4px border radius
});

// Use the custom theme
setTheme('ocean');
```

## Theme Options

The following options can be customized:

| Option | Description | Default Value (Default Theme) |
|--------|-------------|------------------------------|
| `primaryColor` | Primary color used for buttons and highlights | `#4a90e2` |
| `secondaryColor` | Secondary color used for backgrounds | `#f1f1f1` |
| `textColor` | Main text color | `#333333` |
| `backgroundColor` | Background color for tooltips | `#ffffff` |
| `borderColor` | Border color | `#dddddd` |
| `overlayColor` | Overlay background color (supports rgba) | `rgba(0, 0, 0, 0.5)` |
| `fontFamily` | Font family | System fonts |
| `borderRadius` | Border radius for components (in px) | Default system value |

## Advanced Customization

### Custom CSS Variables

You can override additional CSS variables using the `cssVariables` option:

```typescript
customizeTheme({
  primaryColor: '#6200ea',
  cssVariables: {
    // Override or add custom CSS variables
    '--boardwalk-highlight-color': 'rgba(98, 0, 234, 0.2)',
    '--boardwalk-shadow-tooltip': '0 8px 16px rgba(98, 0, 234, 0.15)'
  }
});
```

### Custom CSS

For complete control, you can inject custom CSS:

```typescript
customizeTheme({
  customCSS: `
    .boardwalk-tooltip {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
    }
    
    .boardwalk-button {
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  `
});
```

## Resetting Themes

To reset all custom styles to defaults:

```typescript
import { resetTheme } from 'boardwalk';

resetTheme();
```

## Theme Manager API

For advanced use cases, you can access the theme manager directly:

```typescript
import { themeManager } from 'boardwalk';

// Get current theme name
const currentTheme = themeManager.getCurrentTheme();

// Get all custom styles
const customStyles = themeManager.getCustomStyles();
```

## Best Practices

1. **Consistency**: Choose colors that match your application's existing design system
2. **Accessibility**: Ensure sufficient contrast between text and background colors
3. **Responsive Design**: Test your theme on different screen sizes
4. **Dark Mode Support**: Consider providing both light and dark themes

## Example: Complete Theme Implementation

```typescript
import { createTheme, setTheme, customizeTheme } from 'boardwalk';

// Function to initialize themes based on user preference
function initBoardwalkThemes() {
  // Create a custom brand theme
  createTheme('brand', {
    primaryColor: '#8e24aa',      // Purple primary color
    secondaryColor: '#f3e5f5',    // Light purple secondary
    textColor: '#212121',         // Near black text
    backgroundColor: '#ffffff',   // White background
    borderColor: '#e1bee7',       // Light purple border
    overlayColor: 'rgba(142, 36, 170, 0.3)', // Semi-transparent purple
    fontFamily: '"Nunito Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    borderRadius: 8,
    cssVariables: {
      '--boardwalk-highlight-color': 'rgba(142, 36, 170, 0.2)'
    },
    customCSS: `
      .boardwalk-tooltip {
        font-weight: 500;
      }
    `
  });
  
  // Check user preference for dark mode
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set theme based on preference
  setTheme(prefersDarkMode ? 'dark' : 'brand');
  
  // Listen for changes in color scheme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setTheme(e.matches ? 'dark' : 'brand');
  });
}

// Initialize themes
initBoardwalkThemes();
```
