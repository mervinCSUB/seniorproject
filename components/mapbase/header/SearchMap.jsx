import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useRouter } from 'expo-router';


import styles from './SearchMap.styles';

const SearchMap = () => {
    const router = useRouter();

    return (
        <View>
            <GooglePlacesAutocomplete
            placeholder='Search'
            styles={{
                container: styles.containerSearch,
                text: styles.textInput}}
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            } }
            query={{
                key: 'RAPID_API_KEY',
                language: 'en',
            }} />
        </View>      
)}

export default SearchMap;


