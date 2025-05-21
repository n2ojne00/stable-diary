import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";

//Background containers
const base = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
    },

    inputBox: {
        alignItems: 'left',
        alignSelf: 'center',
        width: wp("90%"),
        height: hp("70%"),
        borderRadius: 10,
        backgroundColor: colors.lightBg,
    }
});

export default base;