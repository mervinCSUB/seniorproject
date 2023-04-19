import { View, Text, Button, TextInput, StyleSheet} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { COLORS } from "../constants";
//import { StatusBar } from 'expo-status-bar';

const SignUp = () => {
    const router = useRouter();
    const navigation = useNavigation();
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
    }
  });

export default SignUp;