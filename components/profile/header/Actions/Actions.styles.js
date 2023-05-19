import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS  } from "../../../../constants";

const styles = StyleSheet.create({
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        margin: 0,
      },
      actionText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
});
export default styles;