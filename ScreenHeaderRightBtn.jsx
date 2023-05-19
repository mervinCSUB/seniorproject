import React, { useReducer, useState }from 'react'
import { TouchableOpacity, Image, onPress} from 'react-native';
import { useNavigation, useRouter } from 'expo-router';

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('Profile')}>
      <Image 
      source={iconUrl}
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn;