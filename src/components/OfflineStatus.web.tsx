import { useSyncExternalStore } from 'react';
import { Text } from 'react-native';
import { ui } from './ui';
import { useTranslation } from 'react-i18next';
declare global { interface Window { __listnOffline?: 'preparing' | 'ready' | 'failed' } }
export default function OfflineStatus() {
  const { t } = useTranslation();
  const state = useSyncExternalStore((notify) => {
    window.addEventListener('listn-offline', notify);
    return () => window.removeEventListener('listn-offline', notify);
  }, () => window.__listnOffline, () => undefined);
  if (!state) return null;
  return <Text accessibilityLiveRegion="polite" style={ui.small}>
    {t(`offline.${state}`)}
  </Text>;
}
