// Main entry point for the Boardwalk library
import './styles/tour.css';
import { Tour } from './tour';
import { Step } from './step';
import { setTheme, createTheme, ThemeOptions, ThemeName } from './theme';
import { KeyboardManager, createKeyboardManager, KeyBindings, DEFAULT_KEY_BINDINGS } from './keyboard';
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
export { setTheme, createTheme };
export { KeyboardManager, createKeyboardManager, DEFAULT_KEY_BINDINGS };
export { 
  FocusManager, 
  applyAriaAttributes, 
  announce, 
  createLiveRegion, 
  addScreenReaderText, 
  ARIA_ROLES 
};
export type { ThemeOptions, ThemeName, KeyBindings };
export * from './types';
