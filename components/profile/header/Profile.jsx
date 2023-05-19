import { useState} from 'react';
import { TouchableOpacity, Image, onPress, Button} from 'react-native';
import { View, Text, SafeAreaView} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../constants';

import styles from './Profile.styles';

import ProfilePicture from './ProfilePicture/ProfilePicture';
import Actions from './Actions/Actions';
import UserInfo from './UserInfo/UserInfo';
import ScreenHeaderLeftProfileBtn from '../../common/header/ScreenHeaderProfileLeftBtn';
 
function Profile() {
    const router = useRouter();
    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{
          headerStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderLeftProfileBtn iconUrl={icons.left} dimension="90%" />
          ),
        }} />
        <ProfilePicture />
        <UserInfo />
        <Actions />
      </SafeAreaView>
    );
  }

export default Profile;
