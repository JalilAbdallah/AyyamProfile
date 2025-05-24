import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
  },
  
  errorText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: DIMENSIONS.PADDING_MEDIUM,
  },
  
  testText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});