import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { styles } from './styles';
import { USERS } from '../../constants';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileInfo from '../../components/profile/ProfileInfo';

const ProfileScreen = ({ userId = 'user_001' }) => {
  const user = USERS.find(u => u.id === userId);
  
  const handleProfilePicturePress = () => {
    // this is for the animation part when the profile picture is pressed
  };
  
  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>User not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      <ProfileHeader user={user} />
      
      <ProfileInfo 
        user={user} 
        onProfilePicturePress={handleProfilePicturePress}
      />

      <View style={styles.content}>
        <Text style={styles.testText}>Content tabs and posts will go here</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;