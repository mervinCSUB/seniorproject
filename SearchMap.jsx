import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useRouter } from 'expo-router';
import styles from './SearchMap.styles';
//import Mapbox from '@rnmapbox/maps';

//Mapbox.setAccessToken('sk.eyJ1IjoiZXJ2aW5tYXJpbyIsImEiOiJjbGhxdHdjZ2owODgyM2xtd2M4ZHZ2bnZxIn0.r8LBabqGq9j4uTgNrOgtwg');

const SearchMap = () => {
    const router = useRouter();

    return (
        <View>
            <GooglePlacesAutocomplete
            placeholder='Where To?'
            styles={{
                container: styles.containerSearch,
                text: styles.textInput}}
                enablePoweredByContainer={false}
            onPress={(data, details = null) => {
                console.log(data, details);
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            query={{
                key: 'AIzaSyAhGHR4kYvIYP4KV-M2HFnz-iI1psRdPig',
                language: 'en',
            }} 
            />
        </View>      
)}

export default SearchMap;


