import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

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
    borderColor:"#5f4545",
    width:'100%',
    height: '100%',
  },
  container2: { 
    alignItems: "center", 
    justifyContent: "center",
    width: 200,
    margin: 20,
    borderRadius: 5,
    paddingTop: 10,
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: COLORS.primary,
  },
  image: {
    flex: 1, 
    justifyContent: "center",
  }
});

export default styles;
