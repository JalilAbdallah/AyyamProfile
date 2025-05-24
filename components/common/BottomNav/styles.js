import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
  },
  
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: DIMENSIONS.PADDING_MEDIUM,
    paddingVertical: DIMENSIONS.PADDING_MEDIUM,
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.BORDER,
  },
  
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
});