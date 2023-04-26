import { useState} from 'react';
import { TouchableOpacity, Image, onPress, Button} from 'react-native';
import { View, Text, SafeAreaView} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import ScreenHeaderLeftProfileBtn from '../../common/header/ScreenHeaderProfileLeftBtn';
import { icons } from '../../../constants';

import styles from './Messages.styles'

const Messages = () => {
    return (
        <View>
            <Stack.Screen options={{
          headerStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderLeftProfileBtn iconUrl={icons.left} dimension="90%" />
          ),
        }} />
        </View>
    );
}
export default Messages;