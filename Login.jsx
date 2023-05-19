import { View, Text, Button, TextInput, ImageBackground, TouchableOpacity} from "react-native";
import { useNavigation, useRouter, Stack } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "../../../constants";
import styles from './Login';
import { ScreenHeaderLoginProfileBtn } from "../../../common/header/ScreenHeaderLoginBtn";


const Login = () => {
    const router = useRouter();
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <Stack.Screen options={{
          headerStyle: { backgroundColor: COLORS.primary},
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

export default Login;