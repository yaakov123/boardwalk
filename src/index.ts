// Main entry point for the Boardwalk library
import './styles/tour.css';
import { Tour } from './tour';
import { Step } from './step';
import { setTheme, createTheme, customizeTheme, resetTheme, themeManager } from './theme';
import { KeyboardManager, createKeyboardManager, DEFAULT_KEY_BINDINGS } from './keyboard';
import { 
  FocusManager, 
  applyAriaAttributes, 
  announce, 
  createLiveRegion, 
  addScreenReaderText, 
  ARIA_ROLES 
} from './accessibility';

export { Tour, Step };
export type { TourOptions, StepOptions } from './types';
export { setTheme, createTheme, customizeTheme, resetTheme, themeManager };
export { KeyboardManager, createKeyboardManager, DEFAULT_KEY_BINDINGS };
export { 
  FocusManager, 
  applyAriaAttributes, 
  announce, 
  createLiveRegion, 
  addScreenReaderText, 
  ARIA_ROLES 
};
export type { ThemeOptions, ThemeName } from './theme';
export type { KeyBindings } from './keyboard';
export * from './types';
