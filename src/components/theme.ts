import { Platform } from 'react-native';

/** Nine solid colors. Keep application colors here; derive overlays from ink. */
const palette = {
  canvas: '#F3E7CF', paper: '#FFF8E9', ink: '#382B23', muted: '#75634D',
  primary: '#A64E32', border: '#CBB99B', gold: '#957020',
  success: '#526B48', red: '#9D4437',
} as const;

export const colors = {
  ...palette,
  onPrimary: palette.paper,
  overlay: `${palette.ink}7A`,
} as const;

// Native system serif faces keep the app offline and avoid extra font downloads.
export const fonts = { editorial: Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia' }) };
