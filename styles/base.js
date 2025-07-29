import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";

//Background containers
const base = StyleSheet.create({
    container: {
        //marginTop: hp("4%"),
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
    },

    frontView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    loginView: {
        flexDirection: 'column',
        marginTop: hp("2%"),
    },
    bodyContainer: {
        justifyContent: 'center',
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
    profileInfo: {
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        width: wp("95%"),
        height: hp("15%"),
        margin: hp("1%"),
        backgroundColor: colors.inputBg,
        borderColor: colors.lightBrown,
        borderWidth: 1,
        borderRadius: 5,
    },
    toggleBg: {
        backgroundColor: colors.inputBg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp("95%"),
        paddingHorizontal: hp("1%"),
        paddingVertical: hp("1.5%"),
        marginVertical: hp("0.5%"),
        marginHorizontal: wp("2%"),
        borderRadius: 5,
        elevation: 2,
        borderWidth: 1,
        borderColor: colors.txtBody,
    },

    TopBarPosition: {
        width: wp("100%"),
        position: 'absolute',
        top: hp("5.5%"),
        alignItems: 'center',
    }




});

export default base;