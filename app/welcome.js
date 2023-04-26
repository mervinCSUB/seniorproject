import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Switch, ImageBackground} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { COLORS, images, SIZES, FONT} from "../constants";
import { useState } from "react";


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
                <Text style={{color: COLORS.primary, fontSize:SIZES.xLarge}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container2}
              onPress={() => navigation.navigate('signUp')}>            
              <Text style={{color: COLORS.primary, fontSize:SIZES.xLarge}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  ); 
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
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
    alignItems: "center", 
    justifyContent: "center",
    width: 200,
    margin: 20,
    borderRadius: 10,
    paddingTop: 10,
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(56, 56, 56, 0.8)',
  },
  image: {
    flex: 1, 
    justifyContent: "center",
  }
});

export default Welcome;