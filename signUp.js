import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { Stack, useNavigation, useRouter } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { COLORS, SIZES, icons } from "../constants";
import ScreenHeaderLoginProfileBtn from "../components/common/header/ScreenHeaderLoginBtn";


const SignUp = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const [attibute, setAttribute] = useState('Defender');
    return (
        <View style={{backgroundColor: COLORS.secondary, alignItems: 'center', height: '100%'}}>
            <Stack.Screen options={{
            headerStyle: { backgroundColor: 'white' },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderLoginProfileBtn iconUrl={icons.left} dimension="90%" />
            ),
          }} />
            <View style={styles.container}>
                <TextInput  
                style={styles.textPuts} 
                placeholderTextColor={COLORS.primary}        
                placeholder="email"
                autoCapitalize="none"
                />
            </View>
            <View style={styles.container}>
                <TextInput 
                style={styles.textPuts}
                placeholderTextColor={COLORS.primary}        
                placeholder="username"
                autoCapitalize="none"
                />
            </View>
            <View style={styles.container}>
                <TextInput
                style={styles.textPuts}
                placeholderTextColor={COLORS.primary}  
                placeholder="password"
                secureTextEntry
                />
            </View>
            <Picker
          style={styles.picker}
          selectedValue={attibute}
          onValueChange={currentAttribute => setAttribute(currentAttribute)}>
          <Picker.Item label="Defender" value="Lock Down Defender" color={COLORS.primary} style={{width: "100%"}}/>
          <Picker.Item label="Playmaker" value="Playmaker" color={COLORS.primary}/>
          <Picker.Item label="Shooter" value="Shooter" color={COLORS.primary}/>
        </Picker>
        <Text style={{color: 'white', fontSize: 20, marginTop: 5}}>You Selected</Text>
        <Text style={{color: COLORS.primary, fontSize: 20, marginBottom: 30}}>{attibute}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>           
                        <Text style={{color: COLORS.primary, fontSize:SIZES.xLarge, marginTop: 40}}>Confirm Sign Up</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    padding: 10,
    color: COLORS.primary,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: COLORS.primary,
    width: 350,
    marginTop: 20,
    borderRadius: 10,
    },
    picker: {
        marginTop: 15,
        marginBottom: 15, 
        backgroundColor: COLORS.tertiary, 
        borderWidth: 1,
        width: 300,
        justifyContent: 'center',
    },

    textPuts: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    buttonCont: {
      marginTop: 10,
    } 
  });

export default SignUp;