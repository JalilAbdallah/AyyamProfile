import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS, TYPOGRAPHY } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: DIMENSIONS.PADDING_SMALL,
    justifyContent: 'flex-end',
  },
  
  followButton: {
    backgroundColor: COLORS.SECONDARY,
    paddingVertical: DIMENSIONS.PADDING_SMALL,
    paddingHorizontal: DIMENSIONS.PADDING_LARGE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  
  followButtonText: {
    ...TYPOGRAPHY.buttonText,
    color: COLORS.PRIMARY,
  },
  
  messageButton: {
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    padding: DIMENSIONS.PADDING_SMALL,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    width: 35,
    height: 35,
  },
});