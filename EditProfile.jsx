import { useState} from 'react';
import { TouchableOpacity, Image, onPress, Button, TextInput} from 'react-native';
import { View, Text, SafeAreaView, ImageBackground} from 'react-native';
import { Stack,useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import ScreenHeaderLeftProfileBtn from '../../../common/header/ScreenHeaderProfileLeftBtn';
import { icons, images, COLORS } from '../../../../constants';
import styles from './EditProfile.styles';

const EditProfile = () => {
  const router = useRouter();
  const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.primary},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderLeftProfileBtn iconUrl={icons.left} dimension="90%" />
                ),
            }} />
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.profilePictureContainer}>
                        <ImageBackground source={images.minion}
                        style={styles.profileImg}>
                            <View style={styles.innerView}>
                                <Image source={icons.camera} style={styles.innerIcon}/>
                            </View>
                         </ImageBackground>
                    </View>   
                </TouchableOpacity>
                
            </View>
            <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.profile} />
                <TextInput
                    placeholder="First Name"
                ></TextInput>
            </View>
            <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.profile} />
                <TextInput
                    placeholder="Last Name"
                ></TextInput>
            </View>
            <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.profile} />
                <TextInput
                    placeholder="Username"
                ></TextInput>
            </View>
            <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.phone} />
                <TextInput
                    style={styles.textPuts} 
                    placeholder="Phone"
                ></TextInput>
            </View>
            <View style={styles.textCont}>
                <Image style={styles.formIcon} source={icons.email} />
                <TextInput
                    placeholder="Email"
                ></TextInput>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.submit}>Submit Changes</Text>
            </TouchableOpacity>
      </SafeAreaView>
    );
  };

export default EditProfile;