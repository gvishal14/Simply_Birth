
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 428;
const guidelineBaseHeight = 926;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.8) => size + (verticalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };