import type { ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGame } from '../game/context';
import { useTranslation } from 'react-i18next';
import { useScreenLayout } from './useLayout';
import Icon, { type IconName } from './Icon';

import { colors, fonts } from './theme';
export { colors, fonts } from './theme';
export const ui = StyleSheet.create({
  page: { flex: 1, minHeight: 0, overflow: 'hidden', backgroundColor: colors.canvas },
  content: { width: '100%', maxWidth: 820, alignSelf: 'center', padding: 24, paddingBottom: 48, gap: 20 },
  eyebrow: { color: colors.primary, fontSize: 12, fontWeight: '700', letterSpacing: 2, textTransform: 'uppercase' },
  title: { color: colors.ink, fontSize: 36, fontFamily: fonts.editorial, fontWeight: '400', letterSpacing: -0.5 },
  heading: { color: colors.ink, fontSize: 24, fontFamily: fonts.editorial, fontWeight: '400' },
  body: { color: colors.muted, fontSize: 16, lineHeight: 25 },
  small: { color: colors.muted, fontSize: 13, lineHeight: 20 },
  card: { borderRadius: 24, padding: 24, backgroundColor: colors.paper, borderWidth: 1, borderColor: colors.border, gap: 16 },
  row: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 12 },
  button: { minHeight: 44, borderRadius: 16, paddingVertical: 10, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary },
  buttonText: { color: colors.onPrimary, fontWeight: '700', fontSize: 16, textAlign: 'center' },
  secondary: { backgroundColor: colors.canvas },
  disabled: { opacity: 0.45 },
  track: { height: 8, borderRadius: 5, backgroundColor: colors.canvas, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: colors.primary, borderRadius: 5 },
  warning: { padding: 16, backgroundColor: colors.canvas, borderRadius: 16, gap: 12 },
});
export function Button({ children, onPress, disabled, secondary, label, large, icon, leadingIcon }: {
  children?: ReactNode; onPress(): void; disabled?: boolean; secondary?: boolean; label?: string; large?: boolean; icon?: ReactNode; leadingIcon?: IconName;
}) {
  return <Pressable accessibilityRole="button" accessibilityLabel={label} accessibilityState={{ disabled: !!disabled }}
    disabled={disabled} onPress={onPress} style={({ pressed }) => [ui.button, large && { minHeight: 60, paddingVertical: 16 }, secondary && ui.secondary, disabled && ui.disabled, pressed && { opacity: 0.75 }]}>
    {icon ?? <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, flexShrink: 1 }}>
      {leadingIcon && <Icon name={leadingIcon} size={20} color={secondary ? colors.ink : colors.onPrimary} />}
      <Text style={[ui.buttonText, { flexShrink: 1 }, large && { fontSize: 18 }, secondary && { color: colors.ink }]}>{children}</Text>
    </View>}
  </Pressable>;
}
export function Stars({ count, large = false, size = large ? 44 : 17, color = colors.gold, decorative = false }: { count: number; large?: boolean; size?: number; color?: string; decorative?: boolean }) {
  const { t } = useTranslation();
  return <View accessible={!decorative} accessibilityLabel={decorative ? undefined : t('common.starRating', { stars: t('common.starCount', { count }), max: 3 })} style={{ flexDirection: 'row', gap: large ? 3 : 1 }}>
    {[0, 1, 2].map((index) => <Icon key={index} name={index < count ? 'starFilled' : 'star'} size={size} color={color} />)}
  </View>;
}
export function Page({ children, header, footer, compact = false }: {
  children: ReactNode; header?: ReactNode; footer?: ReactNode; compact?: boolean;
}) {
  const { t } = useTranslation();
  const { ready, loadError, saveError, saving, retrySave, reload } = useGame();
  const { dense } = useScreenLayout();
  return <SafeAreaView style={ui.page}>
    {ready && header && <View style={{ width: '100%', maxWidth: 820, alignSelf: 'center', paddingHorizontal: 16, paddingTop: 8 }}>{header}</View>}
    <View style={[ui.content, { flex: 1, minHeight: 0, maxWidth: 1200, padding: dense || compact ? 12 : 24, paddingBottom: dense || compact ? 12 : 24, gap: dense || compact ? 8 : 16 }]}>
    {!ready ? <View style={ui.card}>
      <Text style={ui.heading}>{t(loadError ? 'errors.progressTitle' : 'common.opening')}</Text>
      {loadError ? <><Text style={ui.body}>{t(loadError)}</Text><Button onPress={reload}>{t('errors.retryLoad')}</Button></> : <ActivityIndicator color={colors.primary} />}
    </View> : <>
      {saveError && <View style={ui.warning}><Text accessibilityLiveRegion="polite" style={ui.body}>{t(saveError)}</Text>
        <Button onPress={retrySave} disabled={saving}>{t('errors.retrySave')}</Button></View>}
      {children}
    </>}
    </View>
    {ready && footer && <View style={{ width: '100%', maxWidth: 1200, alignSelf: 'center', padding: dense ? 8 : 16, borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.canvas }}>{footer}</View>}
  </SafeAreaView>;
}
