import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../constants';

const AVAILABLE_WIDTH = DIMENSIONS.SCREEN_WIDTH;
const POST_WIDTH = (AVAILABLE_WIDTH - (2 * 2)) / 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
  },
  
  gridContainer: {
    paddingTop: DIMENSIONS.PADDING_SMALL,
  },
  
  row: {
    flexDirection: 'row-reverse',
    gap: 2,
  },
  
  postContainer: {
    width: POST_WIDTH,
    marginBottom: 2,
  },
  
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
});