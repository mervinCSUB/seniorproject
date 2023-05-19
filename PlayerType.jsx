import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { Stack, useNavigation, useRouter } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { COLORS, icons, SIZES } from "../../../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeaderRightBtn } from "../../..";
import styles from "./PlayerType.styles";

const PlayerType = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const [attibute, setAttribute] = useState('Defender');

    return(
        <SafeAreaView style={{backgroundColor: COLORS.secondary, alignItems: 'center', height: '100%'}}>
            <Stack.Screen options={{
            headerStyle: { backgroundColor: 'white' },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderRightBtn iconUrl={icons.left} dimension="90%" />
            ),
          }} />
            <Text>Select a Player Type</Text>
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
        </SafeAreaView>
    )
}

export default PlayerType;