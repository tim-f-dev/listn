import Icon from '../components/Icon';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, colors, fonts, Page, ui } from '../components/ui';
import { useAvailableArea, useScreenLayout } from '../components/useLayout';
import { useGame } from '../game/context';
import { PACK_STAR_REQUIREMENTS, totalStars } from '../game/progress';

export default function LevelPacks() {
  const { t } = useTranslation();
  const { progress } = useGame();
  const { area, onLayout } = useAvailableArea();
  const { fontScale } = useScreenLayout();
  const total = totalStars(progress.best);
  const compact = area.height < 560 || area.width < 350;
  const gap = compact ? 8 : 12;
  // Fit five rows to the measured area, keeping enlarged text and touch targets usable.
  const minimumHeight = Math.ceil(74 * Math.max(1, fontScale));
  const rowHeight = Math.max(minimumHeight, Math.min(112 * Math.max(1, fontScale), Math.floor((area.height - gap * 4) / 5)));
  const needsScroll = rowHeight * 5 + gap * 4 > area.height;
  const activePack = progress.chapters.find((pack) => pack.unlocked && pack.stars < 60)?.id;
  return <Page compact>
    <View style={[ui.row, { justifyContent: 'space-between' }]}>
      <Button leadingIcon="house" secondary onPress={() => router.replace('/')}>{t('nav.home')}</Button>
      <Text style={ui.small}>{t('home.totalStars', { count: total })}</Text>
    </View>
    <Text role="heading" style={[ui.title, { fontSize: 30 }]}>{t('packs.title')}</Text>
    <View onLayout={onLayout} style={{ flex: 1, minHeight: 0 }}>
      <ScrollView scrollEnabled={needsScroll} showsVerticalScrollIndicator={false} bounces={false}
        style={{ flex: 1 }} contentContainerStyle={{ gap }}>
        {progress.chapters.map((pack, index) => {
          const required = PACK_STAR_REQUIREMENTS[index];
          const active = pack.id === activePack;
          const status = pack.unlocked ? t('packs.stars', { count: pack.stars }) : t('packs.locked', { required, earned: total });
          return <Pressable key={pack.id} disabled={!pack.unlocked} accessibilityRole="button"
            accessibilityLabel={t('packs.label', { id: pack.id, name: t(`packs.names.${pack.id}`), status })} accessibilityState={{ disabled: !pack.unlocked }}
            onPress={() => router.push(`/packs/${pack.id}`)}
            style={({ pressed }) => [{ minHeight: rowHeight, padding: compact ? 10 : 14, gap: compact ? 8 : 12, borderRadius: compact ? 12 : 16,
              borderWidth: active ? 2 : 1, borderColor: active ? colors.primary : colors.border,
              backgroundColor: pack.unlocked ? colors.paper : colors.canvas, flexDirection: 'row', alignItems: 'center' }, pressed && { opacity: 0.7 }]}>
            <Text accessible={false} style={{ width: compact ? 36 * fontScale : 44 * fontScale, color: pack.unlocked ? colors.primary : colors.muted,
              fontFamily: fonts.editorial, fontSize: compact ? 25 : 32 }}>{String(pack.id).padStart(2, '0')}</Text>
            <View style={{ flex: 1, minWidth: 0, gap: compact ? 5 : 9 }}>
              <Text style={{ color: pack.unlocked ? colors.ink : colors.muted, fontFamily: fonts.editorial, fontSize: compact ? 17 : 21 }}>{t(`packs.names.${pack.id}`)}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 5 }}>
                {pack.unlocked ? <>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}><Icon name="star" size={14} color={colors.gold} /><Text style={{ color: colors.gold, fontSize: 12 }}>{t('packs.counter', { earned: pack.stars, required: 60 })}</Text></View>
                  <Text style={{ color: colors.muted, fontSize: 12 }}>·</Text>
                  <Text style={{ color: colors.muted, fontSize: 12 }}>{t('packs.range', { first: index * 20 + 1, last: index * 20 + 20 })}</Text>
                </> : <Text style={{ color: colors.muted, fontSize: 12 }}>{t('packs.starsNeeded', { required })}</Text>}
              </View>
            </View>
            <Icon name={pack.unlocked ? 'next' : 'lock'} size={compact ? 16 : 20} color={active ? colors.primary : colors.muted} />
          </Pressable>;
        })}
      </ScrollView>
    </View>
  </Page>;
}

