import { exp } from "react-native-reanimated";
import { COLORS } from "../../../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    color: COLORS.primary,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: COLORS.primary,
    width: 350,
    marginTop: 20,
    borderRadius: 10,
    },
  picker: {
        marginTop: 15,
        marginBottom: 15, 
        backgroundColor: COLORS.tertiary, 
        borderWidth: 1,
        width: 300,
        justifyContent: 'center',
    },

  textPuts: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
   buttonCont: {
      marginTop: 10,
    } 
  });

export default styles;