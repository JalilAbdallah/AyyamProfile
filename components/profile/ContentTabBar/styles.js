import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  
  tab: {
    flex: 1,
    paddingVertical: DIMENSIONS.PADDING_MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.TRANSPARENT,
  },
  
  activeTab: {
    borderBottomColor: COLORS.TEXT_PRIMARY,
  },
});