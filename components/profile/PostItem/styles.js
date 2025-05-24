import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS, TYPOGRAPHY } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
  },
  
  postImage: {
    width: '100%',
    height: '100%',
  },
  
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: DIMENSIONS.PADDING_SMALL,
    paddingVertical: 6,
    flexDirection: 'row-reverse',

  },
  
  playCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  
  playCountText: {
    ...TYPOGRAPHY.playCount,
    color: COLORS.TEXT_PRIMARY,
  },
});