import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS  } from "../../../../constants";

const styles = StyleSheet.create({
    profilePictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 0,
        backgroundColor: COLORS.primary,
        marginTop: 20,
    },
    profilePicture: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 120,
        borderRadius: 0,
        backgroundColor: COLORS.primary,
    }
});
export default styles;