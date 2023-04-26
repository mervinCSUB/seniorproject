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
        <View style={{backgroundColor: 'black', alignItems: 'center', height: '100%'}}>
            <Stack.Screen options={{
            headerStyle: { backgroundColor: 'white' },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderLoginProfileBtn iconUrl={icons.left} dimension="90%" />
            ),
          }} />
    const [attibute, setAttribute] = useState('PlayMaker');
    return (
        <View style={{backgroundColor: 'black', alignItems: 'center', height: '100%'}}>
            <View style={styles.container}>
                <TextInput  
                style={styles.textPuts} 
                placeholderTextColor={'white'}        
                placeholder="email"
                autoCapitalize="none"
                />
            </View>
            <View style={styles.container}>
                <TextInput 
                style={styles.textPuts}
                placeholderTextColor={'white'}        
                placeholder="username"
                autoCapitalize="none"
                />
            </View>
            <View style={styles.container}>
                <TextInput
                style={styles.textPuts}
                placeholderTextColor={'white'}  
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

          <Picker.Item label="Defender" value="Lock Down Defender"/>
          <Picker.Item label="Playmaker" value="Playmaker" />
          <Picker.Item label="Shooter" value="Shooter" />
        </Picker>
        <Text style={{color: 'white'}}>
          Selected: {attibute}
        </Text>
            <Button title="Sign Up" 
            onPress={() => navigation.navigate('Home')}/>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    padding: 10,
    color: 'white',
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: 'white',
    width: 350,
    marginTop: 20,
    borderRadius: 10,
    },
    picker: {
        marginTop: 0, 
        backgroundColor:"black", 
    padding: 4,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: 'white',
    width: 300,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    },

    picker: {
        backgroundColor: COLORS.secondary, 
        color: 'white',
        borderColor: 'red',
        marginVertical: 30,
        borderColor: 'white',
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
=======
    }
  });

export default SignUp;