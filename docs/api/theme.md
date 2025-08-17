# API: Theme

Functions to switch and customize themes.

## Functions
- `setTheme(name: ThemeName): void`
- `customizeTheme(options: ThemeOptions): void`
- `resetTheme(): void`
- `createTheme(name: string, options: ThemeOptions): void`

## Types
```ts
type ThemeName = 'default' | 'dark' | 'modern' | string;
interface ThemeOptions {
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  overlayColor?: string;
  fontFamily?: string;
  borderRadius?: number;
  customCSS?: string;
  cssVariables?: Record<string, string>;
}
```

## Manager
```ts
import { themeManager } from 'boardwalk';
const current = themeManager.getCurrentTheme();
const styles = themeManager.getCustomStyles();
```
