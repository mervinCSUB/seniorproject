import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS  } from "../../../../constants";

const styles = StyleSheet.create({
    actionsContainer: {
        justifyContent: 'space-around',
        width: '100%',
        color: 'white',
      },
      actionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.primaryText,
      },
      userInfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
      },
      nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: COLORS.white,
      },
      bioHeader: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
      },
      bioText: {
        fontSize: 22,
        textAlign: 'center',
        color: COLORS.white,
      },
      textCont: {
        color: COLORS.white,
        borderBottomColor: COLORS.tertiary,
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: 350,
        marginTop: 40,
        borderRadius: 10,
        flexDirection: 'row',
        fontSize: 120,
    },

    textInput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
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
});
export default styles;