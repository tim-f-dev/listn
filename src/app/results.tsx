import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { Button, Page, Stars, ui } from '../components/ui';
import { useScreenLayout } from '../components/useLayout';
import { useGame } from '../game/context';
import { chapterOf } from '../game/progress';
import { useTranslation } from 'react-i18next';

export default function Results() {
  const { t } = useTranslation();
  const { dense, landscape } = useScreenLayout();
  const { result, progress } = useGame();
  if (!result) return <Page><Text style={ui.heading}>{t('results.empty')}</Text><Button onPress={() => router.replace('/levels')}>{t('nav.map')}</Button></Page>;
  const { levelId, score, stars, unlockedChapter } = result;
  const next = levelId + 1;
  const nextAvailable = progress.unlockedLevels.includes(next);
  return <Page compact>
    <Text style={ui.eyebrow}>{t('common.levelTitle', { id: levelId, title: t(`${levelId}.title`, { ns: 'levels' }) })}</Text>
    <View style={{ flex: 1, minHeight: 0, gap: 12, flexDirection: landscape ? 'row' : 'column', justifyContent: 'center' }}>
      <View style={[ui.card, { flex: 1, minHeight: 0, alignItems: 'center', justifyContent: 'center', padding: dense ? 12 : 24, gap: dense ? 6 : 12 }]}>
        <Text role="heading" style={[ui.title, { fontSize: dense ? 24 : 36, textAlign: 'center' }]}>{t(stars === 3 ? 'results.perfect' : stars ? 'results.good' : 'results.practice')}</Text>
        <Stars count={stars} large={!dense} /><Text style={ui.heading}>{t('results.score', { score })}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <Text style={ui.body}>{t('results.highScore', { score: progress.best[levelId]?.score ?? score })}</Text>
          <Stars count={progress.best[levelId]?.stars ?? stars} size={20} />
        </View>
      </View>
      <View style={{ width: landscape ? '40%' : undefined, gap: 8, justifyContent: 'center' }}>
        {unlockedChapter && <Text style={ui.heading}>{t('results.unlocked', { id: unlockedChapter })}</Text>}
        {levelId === 100 && stars > 0 && <Text style={ui.small}>{t('results.finish')}</Text>}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {nextAvailable && <View style={{ flexGrow: 1, flexBasis: landscape ? '100%' : '45%' }}><Button large leadingIcon="next" onPress={() => router.replace(`/play/${next}`)}>{t('levelDetails.next')}</Button></View>}
          <View style={{ flexGrow: 1, flexBasis: landscape ? '100%' : '45%' }}><Button large leadingIcon="restart" secondary onPress={() => router.replace(`/play/${levelId}`)}>{t('inGameMenu.restart')}</Button></View>
          <View style={{ flexGrow: 1, flexBasis: landscape ? '100%' : '45%' }}><Button large leadingIcon="back" secondary onPress={() => router.replace(`/packs/${chapterOf(levelId)}`)}>{t('inGameMenu.levels')}</Button></View>
          <View style={{ flexGrow: 1, flexBasis: landscape ? '100%' : '45%' }}><Button large secondary leadingIcon="house" onPress={() => router.replace('/')}>{t('inGameMenu.home')}</Button></View>
        </View>
      </View>
    </View>
  </Page>;
}
