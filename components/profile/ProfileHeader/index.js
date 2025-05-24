import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles';
import { ICONS, ICON_SIZES } from '../../../constants';
import Icon from '../../common/Icon';

const ProfileHeader = ({ user }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
        <Icon 
          name={ICONS.MENU} 
          size={ICON_SIZES.LARGE}
        />
      </TouchableOpacity>
      
      <Text style={styles.userName}>{user.name}</Text>
      
      <TouchableOpacity style={styles.backButton}>
        <Icon 
          name={ICONS.ARROW_RIGHT} 
          size={ICON_SIZES.LARGE}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;