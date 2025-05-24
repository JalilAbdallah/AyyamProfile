import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS, TYPOGRAPHY } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
    paddingHorizontal: DIMENSIONS.PADDING_MEDIUM,
    paddingVertical: DIMENSIONS.PADDING_LARGE,
  },
  
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: DIMENSIONS.PADDING_MEDIUM,
    gap: DIMENSIONS.PADDING_MEDIUM,
  },
  
  leftSection: {
    flex: 1,
    gap: DIMENSIONS.PADDING_SMALL,
  },
  
  bioSection: {
    marginTop: DIMENSIONS.PADDING_SMALL,
  },
  
  bioText: {
    ...TYPOGRAPHY.body,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'right',
    lineHeight: 20,
  },
});