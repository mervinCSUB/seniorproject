import { useState} from 'react';
import { TouchableOpacity, Image, onPress, Button} from 'react-native';
import { View, Text, SafeAreaView} from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import styles from './Profile.styles';

import ProfilePicture from './ProfilePicture/ProfilePicture';
import Actions from './Actions/Actions';
import UserInfo from './UserInfo/UserInfo';

const Profile = () => {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <ProfilePicture />
    <UserInfo />
    <Actions />
    <Button
        title=""
        onPress={() => navigation.pop()}
      />

  </SafeAreaView>
  );
}

export default Profile;
