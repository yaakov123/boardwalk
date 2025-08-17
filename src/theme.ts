/**
 * Theme customization API for Boardwalk
 * 
 * This module provides functions to customize the appearance of Boardwalk tours.
 */

export type ThemeName = 'default' | 'dark' | 'modern' | string;

export interface ThemeOptions {
  /** Primary color used for buttons and highlights */
  primaryColor?: string;
  /** Secondary color used for backgrounds and secondary buttons */
  secondaryColor?: string;
  /** Text color */
  textColor?: string;
  /** Background color for tooltips */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Overlay background color (supports rgba) */
  overlayColor?: string;
  /** Font family */
  fontFamily?: string;
  /** Border radius for components (in px) */
  borderRadius?: number;
  /** Custom CSS to be injected */
  customCSS?: string;
  /** Additional CSS variables to override */
  cssVariables?: Record<string, string>;
}

/**
 * CSS variable mapping for theme options
 */
const themeVariableMap: Record<keyof ThemeOptions, string> = {
  primaryColor: '--boardwalk-primary-color',
  secondaryColor: '--boardwalk-secondary-color',
  textColor: '--boardwalk-text-color',
  backgroundColor: '--boardwalk-bg-color',
  borderColor: '--boardwalk-border-color',
  overlayColor: '--boardwalk-overlay-color',
  fontFamily: '--boardwalk-font-family',
  borderRadius: '--boardwalk-border-radius-md',
  customCSS: '',
  cssVariables: ''
};

/**
 * Class to manage theme customization
 */
export class ThemeManager {
  private styleElement: HTMLStyleElement | null = null;
  private currentTheme: ThemeName = 'default';
  private customStyles: Record<string, string> = {};

  /**
   * Initialize the theme manager
   */
  constructor() {
    // The style element will be created lazily on first use.
  }

  /**
   * Create the style element for custom styles
   */
  private createStyleElement(): void {
    if (typeof document === 'undefined') return;
    
    this.styleElement = document.createElement('style');
    this.styleElement.id = 'boardwalk-custom-styles';
    document.head.appendChild(this.styleElement);
  }

  /**
   * Set the active theme
   * @param themeName Name of the theme to activate
   */
  public setTheme(themeName: ThemeName): void {
    // Remove previous theme class if any
    document.documentElement.classList.remove(`boardwalk-theme-${this.currentTheme}`);
    
    // Add new theme class
    document.documentElement.classList.add(`boardwalk-theme-${themeName}`);
    
    this.currentTheme = themeName;
  }

  /**
   * Customize the theme with specific options
   * @param options Theme customization options
   */
  public customize(options: ThemeOptions): void {
    if (!this.styleElement) this.createStyleElement();
    
    let cssText = ':root {\n';
    
    // Process standard theme options
    Object.entries(options).forEach(([key, value]) => {
      const cssVarName = themeVariableMap[key as keyof ThemeOptions];
      
      if (cssVarName && value !== undefined && key !== 'customCSS' && key !== 'cssVariables') {
        // Store for later reference
        this.customStyles[cssVarName] = String(value);
        
        // Add to CSS text
        cssText += `  ${cssVarName}: ${value};\n`;
        
        // For primary color, also set hover and active states
        if (key === 'primaryColor') {
          // Create slightly darker versions for hover/active states
          const darkenColor = (color: string, amount: number): string => {
            // Simple darkening for hex colors
            if (color.startsWith('#')) {
              const hex = color.slice(1);
              const num = parseInt(hex, 16);
              const r = Math.max(0, (num >> 16) - amount);
              const g = Math.max(0, ((num >> 8) & 0xff) - amount);
              const b = Math.max(0, (num & 0xff) - amount);
              return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
            }
            return color; // Return original for non-hex colors
          };
          
          const hoverColor = darkenColor(String(value), 10);
          const activeColor = darkenColor(String(value), 20);
          
          cssText += `  --boardwalk-primary-color-hover: ${hoverColor};\n`;
          cssText += `  --boardwalk-primary-color-active: ${activeColor};\n`;
          
          this.customStyles['--boardwalk-primary-color-hover'] = hoverColor;
          this.customStyles['--boardwalk-primary-color-active'] = activeColor;
        }
      }
    });
    
    // Add custom CSS variables
    if (options.cssVariables) {
      Object.entries(options.cssVariables).forEach(([varName, value]) => {
        const fullVarName = varName.startsWith('--') ? varName : `--boardwalk-${varName}`;
        cssText += `  ${fullVarName}: ${value};\n`;
        this.customStyles[fullVarName] = value;
      });
    }
    
    cssText += '}\n';
    
    // Add custom CSS if provided
    if (options.customCSS) {
      cssText += options.customCSS;
    }
    
    // Apply the styles
    if (this.styleElement) {
      this.styleElement.textContent = cssText;
    }
  }

  /**
   * Reset all custom styles to defaults
   */
  public resetStyles(): void {
    if (this.styleElement) {
      this.styleElement.textContent = '';
    }
    this.customStyles = {};
  }

  /**
   * Get the current theme name
   */
  public getCurrentTheme(): ThemeName {
    return this.currentTheme;
  }

  /**
   * Get all custom styles
   */
  public getCustomStyles(): Record<string, string> {
    return { ...this.customStyles };
  }
}

// Create a singleton instance
export const themeManager = new ThemeManager();

/**
 * Set the active theme
 * @param themeName Name of the theme to activate
 */
export function setTheme(themeName: ThemeName): void {
  themeManager.setTheme(themeName);
}

/**
 * Customize the theme with specific options
 * @param options Theme customization options
 */
export function customizeTheme(options: ThemeOptions): void {
  themeManager.customize(options);
}

/**
 * Reset all custom styles to defaults
 */
export function resetTheme(): void {
  themeManager.resetStyles();
}

/**
 * Create a custom theme
 * @param themeName Name for the custom theme
 * @param options Theme options
 */
export function createTheme(themeName: string, options: ThemeOptions): void {
  if (typeof document === 'undefined') return;
  
  // Create a style element for the theme
  const styleElement = document.createElement('style');
  styleElement.id = `boardwalk-theme-${themeName}`;
  
  let cssText = `.boardwalk-theme-${themeName} {\n`;
  
  // Process standard theme options
  Object.entries(options).forEach(([key, value]) => {
    const cssVarName = themeVariableMap[key as keyof ThemeOptions];
    
    if (cssVarName && value !== undefined && key !== 'customCSS' && key !== 'cssVariables') {
      cssText += `  ${cssVarName}: ${value};\n`;
      
      // For primary color, also set hover and active states
      if (key === 'primaryColor') {
        // Create slightly darker versions for hover/active states
        const darkenColor = (color: string, amount: number): string => {
          // Simple darkening for hex colors
          if (color.startsWith('#')) {
            const hex = color.slice(1);
            const num = parseInt(hex, 16);
            const r = Math.max(0, (num >> 16) - amount);
            const g = Math.max(0, ((num >> 8) & 0xff) - amount);
            const b = Math.max(0, (num & 0xff) - amount);
            return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
          }
          return color; // Return original for non-hex colors
        };
        
        const hoverColor = darkenColor(String(value), 10);
        const activeColor = darkenColor(String(value), 20);
        
        cssText += `  --boardwalk-primary-color-hover: ${hoverColor};\n`;
        cssText += `  --boardwalk-primary-color-active: ${activeColor};\n`;
      }
    }
  });
  
  // Add custom CSS variables
  if (options.cssVariables) {
    Object.entries(options.cssVariables).forEach(([varName, value]) => {
      const fullVarName = varName.startsWith('--') ? varName : `--boardwalk-${varName}`;
      cssText += `  ${fullVarName}: ${value};\n`;
    });
  }
  
  cssText += '}\n';
  
  // Add custom CSS if provided
  if (options.customCSS) {
    cssText += options.customCSS;
  }
  
  // Apply the styles
  styleElement.textContent = cssText;
  document.head.appendChild(styleElement);
}
