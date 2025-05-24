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
import PostsGrid from '../../components/profile/PostsGrid';
import BottomNav from '../../components/common/BottomNav';

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

      <PostsGrid posts={user.posts} />
    </SafeAreaView>
  );
};

export default ProfileScreen;