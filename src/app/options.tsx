import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Page, ui } from '../components/ui';
import LanguageSelector from '../components/LanguageSelector';
import { useRef } from 'react';
import { useGame } from '../game/context';

export default function Options() {
  const { t } = useTranslation();
  const { progress, toggleLevelAccess } = useGame();
  const taps = useRef({ count: 0, last: 0 });
  function tapLanguage() {
    const now = Date.now();
    taps.current = { count: now - taps.current.last > 3000 ? 1 : taps.current.count + 1, last: now };
    if (taps.current.count >= 5) {
      taps.current.count = 0;
      toggleLevelAccess();
    }
  }
  return <Page>
    <Button leadingIcon="house" secondary onPress={() => router.replace('/')}>{t('nav.home')}</Button>
    <Text role="heading" style={ui.title}>{t('options.title')}</Text>
    <View style={ui.card}><LanguageSelector onLabelPress={tapLanguage} />
      {progress.accessMode === 'all-levels' && <Text accessibilityLiveRegion="polite" style={ui.small}>{t('options.allLevelsUnlocked')}</Text>}
    </View>
    <Button secondary onPress={() => router.push('/credits')}>{t('home.credits')}</Button>
  </Page>;
}
