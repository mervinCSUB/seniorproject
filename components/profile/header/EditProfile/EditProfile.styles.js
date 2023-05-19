import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS  } from "../../../../constants";

const styles = StyleSheet.create({
    profilePictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        marginTop: 20,
        marginBottom: 20,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    action: {
        padding: 10,
        color: 'white',
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: 'white',
        width: 350,
        marginTop: 20,
        borderRadius: 10,
    },
    profileImg: {
        height: 100,
        width: 100,
    },
    innerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerIcon: {
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1, 
        borderColor: '#fff',
        borderRadius: 10,
        width: 50,
        height: 50,
    },

    textCont: {
        padding: 10,
        color: 'white',
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: 'white',
        width: 350,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
    },

    textInput: {
        padding: 10,
        color: 'white',
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: 'white',
        width: 350,
        marginTop: 20,
        borderRadius: 10,
    },
    formIcon: {
        borderWidth: 1, 
        borderColor: '#fff',
        borderRadius: 10,
        width: 25,
        height: 25,
        resizeMode: 'contain',
        padding: 10,
        marginRight: 5,
    },
    submit: {
        color: 'black',
        fontSize: 20,
        marginTop: 50,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});
export default styles; 