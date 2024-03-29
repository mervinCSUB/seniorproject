//import { useState } from 'react';
import {View, ScrollView, SafeAreaView , StyleSheet, Button} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import MapView from 'react-native-maps';
import {COLORS, icons } from '../constants';
import { ScreenHeaderRightBtn, ScreenHeaderLeftBtn, ScreenHeader } from '../components';
import { SearchMap } from '../components';
import { useNavigation } from 'expo-router';

const Home = () => {
    const router = useRouter();
    const navigation = useNavigation();

    var region = {
        latitude: 35.37,
        longitude: -119.0188,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary}}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.primary},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderLeftBtn iconUrl={icons.chat} dimension="90%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderRightBtn iconUrl={icons.profile} dimension="100%" />
                ),
                }}
            /> 
            <SearchMap/>
            <View style={styles.container}>
                <MapView style={styles.map}
                    initialRegion={region}
                />
            </View>
                
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Home;