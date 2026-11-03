import Icon from '../../components/Icon';
import { useState } from 'react';
import LevelDetails from '../../components/LevelDetails';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, colors, Page, Stars, ui } from '../../components/ui';
import { useGame } from '../../game/context';
import { levels } from '../../game/levels';
import { PACK_STAR_REQUIREMENTS, totalStars } from '../../game/progress';
import { useAvailableArea, useScreenLayout } from '../../components/useLayout';
import { levelGridLayout } from '../../layout/geometry';

export default function Pack() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { progress } = useGame();
  const [selected, setSelected] = useState<number | null>(null);
  const { area, onLayout } = useAvailableArea();
  const { height } = useScreenLayout();
  const grid = levelGridLayout(area.width, area.height);
  const pack = progress.chapters.find((item) => item.id === Number(id));
  const back = <View style={[ui.row, { justifyContent: 'space-between' }]}><Button leadingIcon="back" secondary onPress={() => router.replace('/levels')}>{t('packs.back')}</Button><Button leadingIcon="house" secondary onPress={() => router.replace('/')}>{t('nav.home')}</Button></View>;
  if (!pack) return <Page>{back}<Text style={ui.heading}>{t('packs.unavailable')}</Text></Page>;
  if (!pack.unlocked) return <Page>{back}<Text role="heading" style={ui.title}>{t(`packs.names.${pack.id}`)}</Text>
    <Text style={ui.body}>{t('packs.locked', { required: PACK_STAR_REQUIREMENTS[pack.id - 1], earned: totalStars(progress.best) })}</Text>
  </Page>;
  const packLevels = levels.slice((pack.id - 1) * 20, pack.id * 20);
  return <Page compact>
    {back}
    <View style={[ui.row, { justifyContent: 'space-between' }]}>
      <Text role="heading" style={[ui.title, { fontSize: 24, flexShrink: 1 }]}>{t(`packs.names.${pack.id}`)}</Text>
      <View accessible accessibilityLabel={t('packs.stars', { count: pack.stars })} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}><Icon name="star" size={20} color={colors.gold} /><Text style={[ui.heading, { color: colors.gold, fontSize: 20 }]}>{t('packs.counter', { earned: pack.stars, required: 60 })}</Text></View>
    </View>
    {height >= 500 && <Text style={ui.small}>{t('packs.levelInstructions')}</Text>}
    <View onLayout={onLayout} style={{ flex: 1, minHeight: 0, alignItems: 'center', justifyContent: 'center' }}>
    {grid.side > 0 && <View style={{ gap: grid.gap }}>
      {Array.from({ length: grid.rows }, (_, row) => <View key={row} style={styles.row}>
        {packLevels.slice(row * grid.columns, row * grid.columns + grid.columns).map((level) => {
          const unlocked = progress.unlockedLevels.includes(level.id);
          const stars = progress.best[level.id]?.stars ?? 0;
          return <Pressable key={level.id} accessibilityRole="button"
            accessibilityLabel={t('common.levelLabel', { id: level.id, title: t(`${level.id}.title`, { ns: 'levels' }), status: unlocked ? t('common.starCount', { count: stars }) : t('common.locked') })}
            onPress={() => setSelected(level.id)}
            style={({ pressed }) => [styles.tile, { width: grid.side, height: grid.side, gap: grid.side < 70 ? 2 : 8 }, stars > 0 && styles.completed, !unlocked && styles.locked, pressed && { opacity: 0.7 }]}>
            <Text style={[styles.number, { fontSize: Math.min(32, grid.side * 0.38) }, !unlocked && { color: colors.muted }]}>{level.id}</Text>
            <Stars decorative count={stars} size={Math.min(22, grid.side * 0.26)} color={unlocked ? colors.gold : colors.muted} />
            {!unlocked && <View style={styles.lock}><Icon name="lock" size={12} color={colors.muted} /></View>}
          </Pressable>;
        })}
      </View>)}
    </View>}
    </View>
    {selected !== null && packLevels.some((level) => level.id === selected) && <LevelDetails key={pack.id} levelId={selected} packLevels={packLevels} onSelect={setSelected} onClose={() => setSelected(null)} />}
  </Page>;
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8 },
  tile: { borderRadius: 12, borderWidth: 2, borderColor: colors.border, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center' },
  number: { color: colors.primary, fontSize: 26, fontWeight: '800' },
  completed: { borderColor: colors.primary, backgroundColor: colors.canvas },
  locked: { backgroundColor: colors.canvas },
  lock: { position: 'absolute', top: 4, right: 3 },
});
