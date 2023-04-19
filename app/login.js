import { View, Text, Button, TextInput, StyleSheet} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";

const Login = () => {
    const router = useRouter();
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: 'black', alignItems: 'center', height: '100%'}}>
            <Text>Log In:</Text>
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
                placeholder="password"
                secureTextEntry
                />
            </View>
            <Button
        title="Log In"
        onPress={() => navigation.navigate('Home')}/>
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
  },

  picker: {
      backgroundColor:'white',
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

export default Login;