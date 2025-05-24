import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  profileImage: {
    width: DIMENSIONS.PROFILE_PICTURE_SIZE,
    height: DIMENSIONS.PROFILE_PICTURE_SIZE,
    borderRadius: DIMENSIONS.PROFILE_PICTURE_SIZE / 2,
    borderWidth: 2,
    borderColor: COLORS.SECONDARY,
  },
});