import { Image } from 'react-native';
import { colors } from './theme';

// Official Phosphor Regular artwork; only earned stars use Fill.
// Bundled locally for offline rendering. Sources and license: assets/icons/phosphor, licenses/Phosphor.txt.
const sources = {
  house: require('../../assets/icons/phosphor/house.png'),
  menu: require('../../assets/icons/phosphor/list.png'),
  restart: require('../../assets/icons/phosphor/arrow-counter-clockwise.png'),
  back: require('../../assets/icons/phosphor/arrow-left.png'),
  next: require('../../assets/icons/phosphor/arrow-right.png'),
  star: require('../../assets/icons/phosphor/star.png'),
  starFilled: require('../../assets/icons/phosphor/star-fill.png'),
  lock: require('../../assets/icons/phosphor/lock-simple.png'),
  options: require('../../assets/icons/phosphor/sliders-horizontal.png'),
} as const;

export type IconName = keyof typeof sources;
export default function Icon({ name, size = 24, color = colors.ink }: { name: IconName; size?: number; color?: string }) {
  return <Image accessible={false} source={sources[name]} resizeMode="contain" style={{ width: size, height: size, tintColor: color, flexShrink: 0 }} />;
}
