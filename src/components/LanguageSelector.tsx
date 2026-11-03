import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';
import { languageController, useLanguage } from '../localization/provider';
import { colors, ui } from './ui';

export default function LanguageSelector({ onLabelPress }: { onLabelPress?: () => void }) {
  const { t } = useTranslation();
  const { language, error } = useLanguage();
  return <View style={{ gap: 8 }}>
    <View style={[ui.row, { justifyContent: 'space-between' }]}>
      {onLabelPress ? <Pressable accessibilityRole="button" onPress={onLabelPress} style={{ minHeight: 44, justifyContent: 'center', paddingRight: 16 }}><Text style={ui.small}>{t('language.label')}</Text></Pressable> : <Text style={ui.small}>{t('language.label')}</Text>}
      <View style={[ui.row, { gap: 4 }]}>
        {(['en', 'de'] as const).map((code) => <Pressable key={code} accessibilityRole="button"
          accessibilityLabel={t('language.change', { language: code === 'en' ? 'English' : 'Deutsch' })}
          accessibilityState={{ selected: language === code }} onPress={() => { void languageController.setLanguage(code); }}
          style={{ minHeight: 44, paddingHorizontal: 14, justifyContent: 'center', borderRadius: 12, backgroundColor: language === code ? colors.primary : colors.canvas }}>
          <Text style={{ color: language === code ? colors.onPrimary : colors.ink, fontWeight: '600' }}>{code === 'en' ? 'English' : 'Deutsch'}</Text>
        </Pressable>)}
      </View>
    </View>
    {error && <View style={ui.warning}><Text accessibilityLiveRegion="polite" style={ui.body}>{t(error === 'load' ? 'language.loadError' : 'language.saveError')}</Text>
      <Pressable accessibilityRole="button" onPress={() => { void languageController.retry(); }}><Text style={ui.body}>{t('language.retry')}</Text></Pressable>
    </View>}
  </View>;
}
