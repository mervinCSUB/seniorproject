import { useState} from 'react';
import { TouchableOpacity, Image, onPress, Button} from 'react-native';
import { View, Text, SafeAreaView} from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import styles from './Actions.styles';

const Actions = () => {
    const router = useRouter();
    const navigation = useNavigation();
    
    return (
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => console.log('Edit profile')}>
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Edit Avatar')}>
          <Text style={styles.actionText}>Edit Avatar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text style={styles.actionText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default Actions;