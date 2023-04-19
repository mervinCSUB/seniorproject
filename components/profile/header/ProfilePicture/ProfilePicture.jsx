import { useState} from 'react';
import { TouchableOpacity, Image, onPress, Button} from 'react-native';
import { View, Text, SafeAreaView} from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import styles from './ProfilePicture.styles';

const ProfilePicture = () => {
    const router = useRouter();
    const navigation = useNavigation();
    return (
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} source={{ uri: 'https://example.com/profile-picture.jpg' }} />
      </View>
    );
  };

export default ProfilePicture;