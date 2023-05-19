import { useState} from 'react';
import { TouchableOpacity, Image, TextInput, onPress, Button} from 'react-native';
import { View, Text, SafeAreaView} from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { COLORS, icons } from '../../../../constants';
import styles from './UserInfo.styles';

const UserInfo = () => {
  const router = useRouter();
  const navigation = useNavigation();
    return (
      <View style={styles.userInfoContainer}>
        <Text style={styles.nameText}>Minion_Hooper</Text>
        <Text style={styles.bioText}> LockDown Defender</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PlayerType')}>
          <Text>Change Player Type</Text>
        </TouchableOpacity>
        <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.profile} />
                <Text styles={{color: COLORS.primaryText}}>Kevin</Text>
        </View>
        <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.profile} />
                <Text styles={{color: COLORS.primaryText}}>James</Text>
                     
            </View>
            <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.phone} />
                <Text styles={{color: COLORS.primaryText}}>661-654-0000</Text>
            </View>
            <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.email} />
                <Text styles={{color: COLORS.primaryText}}>minion@despicable.edu</Text>
            </View>
      </View>
    );
  };

export default UserInfo;