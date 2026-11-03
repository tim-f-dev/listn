import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { HARMONIC_TUTORIAL_KEY, TutorialSession } from './session';

const Context = createContext<TutorialSession | null>(null);
const HarmonicContext = createContext<TutorialSession | null>(null);
export function TutorialProvider({ children }: { children: ReactNode }) {
  const [session] = useState(() => new TutorialSession(AsyncStorage));
  const [harmonic] = useState(() => new TutorialSession(AsyncStorage, HARMONIC_TUTORIAL_KEY));
  useEffect(() => { void session.initialize(); void harmonic.initialize(); }, [session, harmonic]);
  return <Context.Provider value={session}><HarmonicContext.Provider value={harmonic}>{children}</HarmonicContext.Provider></Context.Provider>;
}
function useSession(session: TutorialSession | null) {
  if (!session) throw new Error('TutorialProvider is missing');
  const state = useSyncExternalStore(session.subscribe, session.getSnapshot, session.getSnapshot);
  return { ...state, dismiss: (dontShowAgain: boolean) => session.dismiss(dontShowAgain) };
}
export function useTutorial() { return useSession(useContext(Context)); }
export function useHarmonicTutorial() { return useSession(useContext(HarmonicContext)); }
