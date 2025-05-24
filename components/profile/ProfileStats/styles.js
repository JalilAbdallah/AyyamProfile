import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS, TYPOGRAPHY } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: DIMENSIONS.PADDING_SMALL,
    alignItems: 'center',
    flex: 1,
  },
  
  statItem: {
    alignItems: 'center',
    paddingVertical: DIMENSIONS.PADDING_SMALL,
  },
  
  statCount: {
    ...TYPOGRAPHY.statsNumber,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 2,
  },
  
  statLabel: {
    ...TYPOGRAPHY.statsLabel,
    color: COLORS.TEXT_SECONDARY,
  },
});