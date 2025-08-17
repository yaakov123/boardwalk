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

| Option | Description |
|--------|-------------|
| `primaryColor` | Primary color used for buttons and highlights |
| `secondaryColor` | Secondary color used for backgrounds |
| `textColor` | Main text color |
| `backgroundColor` | Background color for tooltips |
| `borderColor` | Border color |
| `overlayColor` | Overlay background color (supports rgba) |
| `fontFamily` | Font family |
| `borderRadius` | Border radius for components (in px) |
| `customCSS` | Raw CSS to inject |
| `cssVariables` | Map of CSS variables to override |

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

```typescript
import { themeManager } from 'boardwalk';
const currentTheme = themeManager.getCurrentTheme();
const customStyles = themeManager.getCustomStyles();
```

## Best Practices
- Ensure accessible color contrast.
- Provide both light and dark variations where possible.
