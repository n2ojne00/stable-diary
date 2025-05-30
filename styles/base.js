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
        paddingLeft: wp("10%"),
        justifyContent: 'center',
        alignSelf: 'center',
        width: wp("90%"),
        height: hp("70%"),
        borderRadius: 10,
        backgroundColor: colors.lightBg,
        elevation: 5,
    }
});

export default base;