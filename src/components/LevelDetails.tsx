import Icon from './Icon';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import type { LevelConfig } from '../game/types';
import { useGame } from '../game/context';
import { localizedInterval } from '../localization/core';
import { Button, colors, Stars, ui } from './ui';
import { useScreenLayout } from './useLayout';
import { levelSpecialties } from '../game/specialties';

export default function LevelDetails({ levelId, packLevels, onSelect, onClose }: {
  levelId: number; packLevels: readonly LevelConfig[]; onSelect(id: number): void; onClose(): void;
}) {
  const { t } = useTranslation();
  const { progress } = useGame();
  const { width, height } = useScreenLayout();
  const index = packLevels.findIndex((item) => item.id === levelId);
  const level = packLevels[index];
  const compact = width < 600 || height < 700 || (height < 900 && (level.intervals.length > 6 || level.instruments.length > 4));
  const unlocked = progress.unlockedLevels.includes(levelId);
  const best = progress.best[levelId];
  const instruments = level.instruments.map((program) => t(String(program), { ns: 'instruments' }));
  const intervals = [...level.intervals].sort((a, b) => a - b).map((value) => localizedInterval(t, value));
  const facts: { title: string; text: string }[] = [];
  for (const [title, values] of [['instruments', instruments], ['intervals', intervals]] as const) {
    facts.push({ title: t(`levelDetails.${title}`), text: values.join(' · ') });
  }
  const specialties = levelSpecialties(level);
  const highlights = specialties.keys.map((key) => t(`specialties.${key}`));
  if (specialties.rareInstruments.length) highlights.push(t('specialties.rareInstrument', {
    instruments: specialties.rareInstruments.map((program) => t(String(program), { ns: 'instruments' })).join(' · '),
  }));
  if (highlights.length) facts.push({ title: 'highlights', text: highlights.map((text) => `• ${text}`).join('\n') });
  function select(offset: number) { onSelect(packLevels[index + offset].id); }
  return <Modal visible transparent animationType="fade" onRequestClose={onClose} supportedOrientations={['portrait', 'landscape']}>
    <View style={{ flex: 1, backgroundColor: colors.overlay, alignItems: 'center', justifyContent: 'center', padding: 12 }}>
      <Pressable accessibilityRole="button" accessibilityLabel={t('levelDetails.close')} onPress={onClose} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      <View accessibilityViewIsModal style={[ui.card, { width: '100%', maxWidth: 760, maxHeight: Math.max(120, height - 48), padding: compact ? 12 : 24, gap: compact ? 8 : 16 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text role="heading" style={[ui.heading, { flex: 1, fontSize: compact ? 20 : 28 }]}>{t('common.levelTitle', { id: level.id, title: t(`${level.id}.title`, { ns: 'levels' }) })}</Text>
          <Pressable accessibilityRole="button" accessibilityLabel={t('levelDetails.close')} onPress={onClose} style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center' }}><Text accessible={false} style={{ color: colors.onPrimary, fontSize: 24 }}>×</Text></Pressable>
        </View>
        <ScrollView key={level.id} style={{ flexShrink: 1, minHeight: 0 }} contentContainerStyle={{ gap: compact ? 6 : 12 }} showsVerticalScrollIndicator={false}>
          {facts.map((fact) => <View key={fact.title} style={{ padding: compact ? 10 : 14, borderRadius: 16, backgroundColor: colors.canvas, gap: 4 }}>
            {fact.title === 'highlights' ? highlights.map((text, index) => <Text key={text}
              style={[ui.body, compact && { fontSize: 14, lineHeight: 20 }, specialties.keys[index] === 'harmonic' && { fontWeight: '700', color: colors.ink }]}>{`• ${text}`}</Text>)
              : <Text style={[ui.body, compact && { fontSize: 14, lineHeight: 20 }]}>{fact.text}</Text>}
          </View>)}
        </ScrollView>
        <View style={{ gap: 8 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
          <Text style={ui.small}>{best ? t('levelDetails.best', { score: best.score, total: level.questionCount }) : t('levelDetails.unplayed')}</Text>
          <Stars count={best?.stars ?? 0} />
        </View>
        {!unlocked && <Text style={[ui.small, { color: colors.red }]}>{t('levelDetails.locked')}</Text>}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Button secondary label={t('levelDetails.previous')} disabled={index === 0} onPress={() => select(-1)} icon={<Icon name="back" />} />
          <View style={{ flex: 1 }}><Button large disabled={!unlocked} onPress={() => { onClose(); router.push(`/play/${level.id}`); }}>{t('levelDetails.start')}</Button></View>
          <Button secondary label={t('levelDetails.next')} disabled={index === packLevels.length - 1} onPress={() => select(1)} icon={<Icon name="next" />} />
        </View>
        </View>
      </View>
    </View>
  </Modal>;
}
