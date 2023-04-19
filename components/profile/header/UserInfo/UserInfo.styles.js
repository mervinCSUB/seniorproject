import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS  } from "../../../../constants";

const styles = StyleSheet.create({
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      actionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
      },
      userInfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      },
      nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      bioText: {
        fontSize: 16,
        textAlign: 'center',
      },
});
export default styles;