import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Switch, ImageBackground} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { COLORS, images, SIZES, FONT } from "../../../constants";
import { Image } from "react-native-elements";

import styles from './Welcome.style';

const Welcome = () => {
  const router = useRouter();
  const navigation = useNavigation();

  //const [isEnabled, setIsEnabled] = useState(false);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return ( 
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={images.bgimg} style={{flex: 1}} resizeMode="cover">
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.container2}
              onPress={() => navigation.navigate('login')}>
                <Text style={{color: COLORS.primaryText, fontSize:SIZES.xLarge}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container2}
              onPress={() => navigation.navigate('signUp')}>            
              <Text style={{color: COLORS.primaryText, fontSize:SIZES.xLarge}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  ); 
}

export default Welcome;