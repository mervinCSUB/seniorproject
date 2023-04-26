import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import { useNavigation, useRouter, Stack } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "../constants";
import ScreenHeaderLoginProfileBtn from "../components/common/header/ScreenHeaderLoginBtn";

const Login = () => {
    const router = useRouter();
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <Stack.Screen options={{
          headerStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderLoginProfileBtn iconUrl={icons.left} dimension="90%" />
          ),
        }} />
            <ImageBackground source={images.bgimg2} style={{flex: 1}} resizeMode="cover">
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <TextInput  
                        style={styles.textPuts} 
                        placeholderTextColor={'white'}        
                        placeholder="email"
                        autoCapitalize="none"
                        />
                     </View>
                    <View style={styles.container2}>
                        <TextInput
                        style={styles.textPuts}
                        placeholderTextColor={'white'}  
                        placeholder="password"
                        secureTextEntry
                         />
                     </View>
                     <TouchableOpacity onPress={() => navigation.navigate('Home')}>           
                        <Text style={{color: COLORS.primary, fontSize:SIZES.xLarge, marginTop: 50}}>Login</Text>
                    </TouchableOpacity>
                </View>     
            </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
screen: {
        flex: 1,
    },
container1: {
    flex: 1,
    alignItems: 'center',
     borderWidth: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: "center",
    paddingTop: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(52, 52, 52, 0.8)',
    width:'100%',
    height: '100%',
    },
  container2: {
    padding: 4,
    borderBottomColor: 'red',
    borderBottomWidth: 3,
    color: 'white',
    width: 300,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPuts: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      width: 300,
  }
});

export default Login;