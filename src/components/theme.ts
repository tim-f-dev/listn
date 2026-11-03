import { Platform } from 'react-native';

/** Shared warm-sheet-music palette. Keep application colors here. */
export const colors = {
  canvas: '#F3E7CF', paper: '#FFF8E9', ink: '#382B23', muted: '#75634D',
  primary: '#A64E32', primaryMuted: '#9B644D', onPrimary: '#FFF8E9', pale: '#EBDDC3',
  border: '#CBB99B', staff: '#D7C39E', gold: '#957020', amber: '#F3DEAD',
  success: '#526B48', successSurface: '#E3E9D6',
  red: '#9D4437', pink: '#F3DED2', locked: '#E8DDC8',
  overlay: 'rgba(56, 43, 35, 0.48)',
} as const;

// Native system serif faces keep the app offline and avoid extra font downloads.
export const fonts = { editorial: Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia' }) };
