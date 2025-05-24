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

const ProfileScreen = ({ userId = 'user_001' }) => {
  const user = USERS.find(u => u.id === userId);
  
  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>User not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <ProfileHeader user={user} />
      

      {/* For testing only - will be replaced */}
      <View style={styles.content}>
        <Text style={styles.testText}>Profile Screen Working!</Text>
        <Text style={styles.testText}>User: {user.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;