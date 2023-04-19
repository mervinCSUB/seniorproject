import { SafeAreaView, View, Text, Button, StyleSheet, Switch} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { COLORS, images} from "../constants";
import { useState } from "react";

const Welcome = () => {
  const router = useRouter();
  const navigation = useNavigation();
  //const [isEnabled, setIsEnabled] = useState(false);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return ( 
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Button
          title="Login"
          color={COLORS.white}
          onPress={() => navigation.navigate('login')}
        />
        </View>
        <View style={styles.container2}>
          <Button
          title="Sign Up"
          color={COLORS.white}
          onPress={() => navigation.navigate('signUp')}
        />
        </View>
  
      </View>
    </SafeAreaView>
  ); 
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
  },
  container: {
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'black',
    justifyContent: "center",
    flex: 1,
    marginTop: 16,
    paddingTop: 10,
    paddingVertical: 8,
    borderWidth: 5,
    borderRadius: 10,
    height: '100%'

  },
  container2: { 
    alignItems: "center", 
    justifyContent: "center",
    width: 200,
    marginTop: 16,
    paddingTop: 10,
    paddingVertical: 8,
    borderWidth: 5,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: COLORS.primary,
    color: COLORS.gray2,
  },
  image: {
    flex: 1, 
    justifyContent: "center",
  }
});

export default Welcome;