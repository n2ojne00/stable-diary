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

    logoHeader: {
        width: wp("100%"),
        height: hp("20%"),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bodyContainer: {
        alignItems: 'center',
        height: hp("75%"),
        borderRadius: 20
    },

    loginBox: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: wp("5%"),
        width: wp("95%"),
        height: hp("50%"),
        borderRadius: 10,
        backgroundColor: colors.lightBg,
        elevation: 5,
    },




});

export default base;