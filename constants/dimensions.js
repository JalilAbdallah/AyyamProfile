import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DIMENSIONS = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  
  PADDING_SMALL: 8,
  PADDING_MEDIUM: 16,
  PADDING_LARGE: 24,
  
  PROFILE_PICTURE_SIZE: 90,
  POST_ITEM_SIZE: (width - 48) / 2,
};