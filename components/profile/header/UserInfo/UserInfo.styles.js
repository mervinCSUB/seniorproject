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
        color: '#007AFF',
      },
      userInfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200,
      },
      nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
      },
      bioText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
      },
});
export default styles;