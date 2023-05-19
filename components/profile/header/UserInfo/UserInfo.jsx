import { useState} from 'react';
import { TouchableOpacity, Image, onPress, Button} from 'react-native';
import { View, Text, SafeAreaView} from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import styles from './UserInfo.styles';

const UserInfo = () => {
  const router = useRouter();
  const navigation = useNavigation();
    return (
      <View style={styles.userInfoContainer}>
        <Text style={styles.nameText}>Minion_Hooper</Text>
        <Text style={styles.bioText}>LockDown Defender</Text>
        <Text style={styles.bioText}></Text>
      </View>
    );
  };

export default UserInfo;