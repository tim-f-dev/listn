import { Modal, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useHarmonicTutorial } from '../tutorial/provider';
import { useScreenLayout } from './useLayout';
import { Button, colors, ui } from './ui';

export default function HarmonicTutorial() {
  const { t } = useTranslation();
  const { height } = useScreenLayout();
  const { dismiss, saving, saveError } = useHarmonicTutorial();
  const start = () => { void dismiss(true); };
  return <Modal visible transparent animationType="fade" onRequestClose={start} supportedOrientations={['portrait', 'landscape']}>
    <View style={{ flex: 1, backgroundColor: colors.overlay, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
      <View accessibilityViewIsModal style={[ui.card, { width: '100%', maxWidth: 520, maxHeight: height - 48 }]}>
        <ScrollView style={{ flexShrink: 1 }} contentContainerStyle={{ gap: 16 }}>
          <Text role="heading" style={ui.heading}>{t('harmonicTutorial.title')}</Text>
          <Text style={ui.body}>{t('harmonicTutorial.body')}</Text>
          <Text style={ui.body}>{t('harmonicTutorial.replay')}</Text>
          {saveError && <Text accessibilityLiveRegion="polite" style={ui.small}>{t('harmonicTutorial.saveError')}</Text>}
        </ScrollView>
        <Button disabled={saving} onPress={start}>{t('harmonicTutorial.start')}</Button>
        {saveError && <Button secondary onPress={() => { void dismiss(false); }}>{t('harmonicTutorial.continue')}</Button>}
      </View>
    </View>
  </Modal>;
}
