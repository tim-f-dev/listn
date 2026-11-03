import Icon from '../../components/Icon';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useMemo, useRef, useState } from 'react';
import { AppState, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { intervalPlayer } from '../../audio/service';
import type { IntervalSound } from '../../audio/player';
import { Button, colors, fonts, Page, ui } from '../../components/ui';
import { useScreenLayout } from '../../components/useLayout';
import { useGame } from '../../game/context';
import { localizedInterval } from '../../localization/core';
import { useTranslation } from 'react-i18next';
import { getLevel, levels } from '../../game/levels';
import { chapterOf } from '../../game/progress';
import { createQuestion } from '../../game/questions';
import type { LevelConfig, Question } from '../../game/types';
import { useHarmonicTutorial, useTutorial } from '../../tutorial/provider';
import HarmonicTutorial from '../../components/HarmonicTutorial';
import LevelTutorial from '../../components/LevelTutorial';
import { tutorialStage } from '../../tutorial/session';

const firstHarmonicLevel = levels.find((level) => level.playback === 'harmonic')?.id;

export default function PlayRoute() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { progress, ready } = useGame();
  const tutorial = useTutorial();
  const harmonicTutorial = useHarmonicTutorial();
  const level = getLevel(Number(id));
  if (!ready) return <Page><Text style={ui.body}>{t('common.loading')}</Text></Page>;
  if (!level || !progress.unlockedLevels.includes(level.id)) return <Page>
    <Text style={ui.heading}>{t('exercise.unavailable')}</Text><Button onPress={() => router.replace('/levels')}>{t('nav.map')}</Button>
  </Page>;
  if (tutorialStage(tutorial) === 'loading') return <Page><Text style={ui.body}>{t('common.loading')}</Text></Page>;
  if (tutorialStage(tutorial) === 'tutorial') return <Page>
    <Text role="heading" style={ui.heading}>{t(`${level.id}.title`, { ns: 'levels' })}</Text>
    <LevelTutorial />
  </Page>;
  if (level.id === firstHarmonicLevel) {
    const stage = tutorialStage(harmonicTutorial);
    if (stage === 'loading') return <Page><Text style={ui.body}>{t('common.loading')}</Text></Page>;
    if (stage === 'tutorial') return <Page><HarmonicTutorial /></Page>;
  }
  return <Exercise key={level.id} level={level} />;
}
function Exercise({ level }: { level: LevelConfig }) {
  const { t } = useTranslation();
  const { dense, landscape, width, height, fontScale } = useScreenLayout();
  const compactLandscape = landscape && dense;
  const tight = height < 740;
  const singleColumn = width < 360 && fontScale > 1.25;
  const { finish } = useGame();
  const history = useRef<number[]>([]);
  const [question, setQuestion] = useState(() => createQuestion(level));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const answerLock = useRef(false);
  const advancedQuestion = useRef<Question | null>(null);
  const [score, setScore] = useState(0);
  const [answerResults, setAnswerResults] = useState<boolean[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAction, setMenuAction] = useState<'levels' | 'restart' | 'home' | null>(null);
  function resume() { setMenuAction(null); setMenuOpen(false); }
  function confirmMenuAction() {
    const action = menuAction;
    resume();
    if (action === 'restart') restart();
    else if (action === 'home') router.replace('/');
    else if (action === 'levels') router.replace(('/packs/' + chapterOf(level.id)) as '/packs/1');
  }
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const sound: IntervalSound = useMemo(() => ({ program: question.program, notes: question.notes,
    playback: question.playback, speed: level.speed, noteDurationMs: level.noteDurationMs }), [question, level]);
  const playbackVersion = useRef(0);
  const play = useCallback(async () => {
    const version = ++playbackVersion.current;
    setPlaying(true); setAudioError(null);
    try {
      await intervalPlayer.play(sound);
    } catch {
      if (version === playbackVersion.current) setAudioError('errors.audioPlayback');
    } finally { if (version === playbackVersion.current) setPlaying(false); }
  }, [sound]);
  useFocusEffect(useCallback(() => {
    void play();
    const subscription = AppState.addEventListener('change', (state) => {
      if (state !== 'active') { playbackVersion.current++; intervalPlayer.stop(); setPlaying(false); }
    });
    return () => { playbackVersion.current++; intervalPlayer.stop(); subscription.remove(); };
  }, [play]));
  function answer(value: number) {
    if (answerLock.current) return;
    answerLock.current = true; setSelected(value);
    setAnswerResults((results) => [...results, value === question.interval]);
    if (value === question.interval) setScore((n) => n + 1);
  }
  function next() {
    if (selected === null || advancedQuestion.current === question) return;
    advancedQuestion.current = question; intervalPlayer.stop();
    if (index === level.questionCount - 1) { finish(level.id, score); router.replace('/results'); return; }
    history.current.push(question.interval); setQuestion(createQuestion(level, history.current));
    setIndex((n) => n + 1); setSelected(null); answerLock.current = false;
  }
  function restart() {
    playbackVersion.current++; intervalPlayer.stop();
    history.current = []; answerLock.current = false; advancedQuestion.current = null;
    setIndex(0); setScore(0); setAnswerResults([]); setSelected(null); setAudioError(null); setPlaying(false);
    setQuestion(createQuestion(level));
  }
  const correct = selected === question.interval;
  return <Page compact header={<View style={styles.header}>
    <Text style={styles.brand}>LISTN</Text>
    <Pressable accessibilityRole="button" accessibilityLabel={t('nav.menu')} accessibilityState={{ expanded: menuOpen }} onPress={() => setMenuOpen(true)} style={styles.headerButton}>
      <Icon name="menu" />
    </Pressable>
    <Modal visible={menuOpen} transparent animationType="fade" onRequestClose={() => menuAction ? setMenuAction(null) : resume()} supportedOrientations={['portrait', 'landscape']}>
      <View style={{ flex: 1, backgroundColor: colors.overlay, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Pressable accessibilityRole="button" accessibilityLabel={t('inGameMenu.resume')} onPress={resume} style={StyleSheet.absoluteFill} />
        <View accessibilityViewIsModal style={[ui.card, { width: '100%', maxWidth: menuAction ? 320 : 400, padding: 20, gap: 12 }]}>
          {menuAction ? <>
            <Text role="heading" style={ui.heading}>{t('inGameMenu.confirmTitle')}</Text>
            <Text style={ui.body}>{t('inGameMenu.confirm.' + menuAction)}</Text>
            <Button onPress={confirmMenuAction}>{t('inGameMenu.yes')}</Button>
            <Button secondary onPress={() => setMenuAction(null)}>{t('inGameMenu.cancel')}</Button>
          </> : <>
            <Text role="heading" style={ui.heading}>{t('nav.menu')}</Text>
            <Button leadingIcon="back" secondary onPress={() => setMenuAction('levels')}>{t('inGameMenu.levels')}</Button>
            <Button leadingIcon="restart" secondary onPress={() => setMenuAction('restart')}>{t('inGameMenu.restart')}</Button>
            <Button secondary leadingIcon="house" onPress={() => setMenuAction('home')}>{t('inGameMenu.home')}</Button>
            <Button onPress={resume}>{t('inGameMenu.resume')}</Button>
          </>}
        </View>
      </View>
    </Modal>
  </View>} footer={<View style={[styles.footer, tight && { minHeight: 72, gap: 4 }, landscape && styles.footerLandscape]}>
    <Text accessibilityLiveRegion="polite" style={[ui.small, styles.feedback, { color: selected === null ? colors.muted : correct ? colors.success : colors.red }]}>
      {selected === null ? t('exercise.choose') : t(correct ? 'exercise.correct' : 'exercise.incorrect', { interval: localizedInterval(t, question.interval) })}
    </Text>
    <View style={[styles.nextSlot, landscape && { width: 230 }]}>
      {selected !== null && <Button onPress={next}>{t(index === level.questionCount - 1 ? 'exercise.results' : 'exercise.next')}</Button>}
    </View>
  </View>}>
    <ScrollView style={{ flex: 1 }} contentContainerStyle={[styles.sheet, tight && { gap: compactLandscape ? 4 : 10, paddingTop: 0, paddingBottom: 0 }]} showsVerticalScrollIndicator={false}>
      <View style={[styles.intro, tight && { gap: compactLandscape ? 4 : 6 }]}>
        <Text role="heading" style={[styles.levelTitle, tight && { fontSize: compactLandscape ? 22 : 25, lineHeight: compactLandscape ? 24 : 29 }]}>{t(`${level.id}.title`, { ns: 'levels' })}</Text>
        <View accessible accessibilityLabel={t('exercise.question', { level: level.id, question: index + 1, total: level.questionCount })} style={styles.metadata}>
          <Text style={styles.levelLabel}>{t('exercise.levelLabel', { level: level.id })}</Text>
          <View style={styles.divider} />
          <Text style={styles.counter}>{index + 1} / {level.questionCount}</Text>
        </View>
        <View style={styles.tracker}>
          {Array.from({ length: level.questionCount }, (_, questionIndex) => {
            const result = answerResults[questionIndex];
            const status = result === undefined ? 'unanswered' : result ? 'correct' : 'incorrect';
            return <View key={questionIndex} accessible accessibilityLabel={t('exercise.tracker', { number: questionIndex + 1, status: t(`exercise.status.${status}`) })}
              style={[styles.trackerMark, questionIndex === index && styles.trackerCurrent, result === true && styles.trackerCorrect, result === false && styles.trackerWrong]}>
              {result !== undefined && <Text style={styles.trackerSymbol}>{result ? '✓' : '×'}</Text>}
            </View>;
          })}
        </View>
      </View>
      <View style={[styles.exerciseBody, tight && { gap: 10 }, compactLandscape && styles.landscapeBody]}>
        <View style={[styles.listening, height < 600 && { flexDirection: 'row', paddingTop: 0, gap: 14 }, compactLandscape && { flex: 1 }]}>
          <View pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={[styles.staff, height < 600 && { opacity: 0 }]}>
            {[0, 1, 2, 3, 4].map((line) => <View key={line} style={styles.staffLine} />)}
          </View>
          <Pressable accessibilityRole="button" accessibilityLabel={t(playing ? 'exercise.listening' : 'exercise.replay')}
            accessibilityState={{ disabled: playing, busy: playing }} disabled={playing} onPress={() => { void play(); }}
            style={({ pressed }) => [styles.replay, tight && { width: 64, height: 64 }, pressed && { transform: [{ scale: 0.96 }] }]}>
            <Icon name="restart" size={tight ? 36 : 56} color={colors.onPrimary} />
          </Pressable>
          <View style={[{ gap: 4 }, height < 600 && { flex: 1, maxWidth: 250 }]}>
          <Text style={[styles.listenLabel, tight && { fontSize: 20, lineHeight: 24 }]}>{t(playing ? 'exercise.listening' : 'exercise.listenAgain')}</Text>
          <Text style={styles.instrument}>{t(String(question.program), { ns: 'instruments' })} · {t(`exercise.${question.playback}`)}</Text>
          </View>
          {audioError && <Text accessibilityLiveRegion="polite" style={[ui.small, { color: colors.red, textAlign: 'center' }]}>{t(audioError)}</Text>}
        </View>
        <View style={[styles.answerSection, tight && { gap: 8 }, compactLandscape && { flex: 1.3 }]}>
          <Text style={[styles.prompt, tight && { fontSize: 20, lineHeight: 24 }]}>{t('exercise.prompt')}</Text>
          <View style={[styles.answers, tight && { gap: compactLandscape ? 4 : 6 }]}>
            {question.choices.map((value) => {
              const answered = selected !== null;
              const isCorrect = answered && value === question.interval;
              const isWrong = answered && value === selected && !correct;
              return <Pressable key={value} onPress={() => answer(value)} disabled={answered}
                accessibilityRole="button" accessibilityState={{ disabled: answered, selected: selected === value }}
                style={({ pressed }) => [styles.answer, tight && { minHeight: 44, paddingVertical: 6, paddingHorizontal: 8 }, singleColumn && { flexBasis: '100%' }, isCorrect && styles.correct, isWrong && styles.wrong, pressed && { backgroundColor: colors.canvas }]}>
                <Text style={[styles.answerText, tight && { fontSize: 15, lineHeight: 19 }, isCorrect && { color: colors.success }, isWrong && { color: colors.red }]}>
                  {isCorrect ? '✓ ' : isWrong ? '✕ ' : ''}{localizedInterval(t, value)}
                </Text>
              </Pressable>;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  </Page>;
}
const styles = StyleSheet.create({
  header: { minHeight: 48, width: '100%', maxWidth: 620, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
  brand: { fontFamily: fonts.editorial, color: colors.ink, fontSize: 20, letterSpacing: 7 },
  headerButton: { position: 'absolute', right: 0, top: 0, width: 48, height: 48, justifyContent: 'center', alignItems: 'center' },
  sheet: { flexGrow: 1, width: '100%', maxWidth: 760, alignSelf: 'center', paddingHorizontal: 8, paddingTop: 8, paddingBottom: 12, gap: 18 },
  intro: { alignItems: 'center', gap: 12 },
  levelTitle: { fontFamily: fonts.editorial, color: colors.ink, fontSize: 34, textAlign: 'center', flexShrink: 1 },
  metadata: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 18 },
  levelLabel: { color: colors.muted, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', fontWeight: '600' },
  counter: { color: colors.muted, fontSize: 14, fontVariant: ['tabular-nums'] },
  divider: { width: 1, height: 18, backgroundColor: colors.border },
  tracker: { flexDirection: 'row', gap: 4, width: '75%', maxWidth: 360, paddingTop: 2 },
  trackerMark: { flex: 1, height: 12, borderRadius: 6, backgroundColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  trackerCurrent: { backgroundColor: colors.primary },
  trackerCorrect: { backgroundColor: colors.success },
  trackerWrong: { backgroundColor: colors.red },
  trackerSymbol: { color: colors.onPrimary, fontSize: 10, lineHeight: 12, fontWeight: '700' },
  exerciseBody: { flexGrow: 1, justifyContent: 'space-evenly', gap: 18 },
  landscapeBody: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  listening: { alignItems: 'center', justifyContent: 'center', gap: 8, paddingTop: 14 },
  staff: { position: 'absolute', top: 10, left: 0, right: 0, gap: 10 },
  staffLine: { height: 1, backgroundColor: colors.border },
  replay: { width: 102, height: 102, borderRadius: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, borderWidth: 1, borderColor: colors.primary },
  listenLabel: { fontFamily: fonts.editorial, fontSize: 28, color: colors.ink, textAlign: 'center' },
  instrument: { color: colors.muted, fontSize: 14, lineHeight: 21, textAlign: 'center', paddingHorizontal: 8 },
  answerSection: { gap: 12 },
  prompt: { color: colors.ink, fontFamily: fonts.editorial, fontSize: 28, textAlign: 'center' },
  answers: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  answer: { minHeight: 64, flexGrow: 1, flexBasis: '45%', justifyContent: 'center', padding: 14, borderRadius: 12, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.paper },
  answerText: { color: colors.ink, fontSize: 18, textAlign: 'center' },
  correct: { borderColor: colors.success, backgroundColor: colors.paper },
  wrong: { borderColor: colors.red, backgroundColor: colors.paper },
  footer: { width: '100%', maxWidth: 620, alignSelf: 'center', justifyContent: 'center', gap: 8, minHeight: 82 },
  footerLandscape: { flexDirection: 'row', alignItems: 'center', minHeight: 48 },
  feedback: { textAlign: 'center', flexShrink: 1 },
  nextSlot: { minHeight: 44, justifyContent: 'center' },
});
