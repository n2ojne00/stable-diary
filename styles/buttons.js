import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";
import txtStyles from "./text";

/**
 * default color: colors.inputBg,
 * pressed color: colors.drawerBg,
 */

const baseStyle = {
    backgroundColor: colors.lightBrown,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("0.5%"),
};

const ButtonStyles = StyleSheet.create({

    base: {
        ...baseStyle,
        width: wp("70%"),
        height: hp("5.5%"),
        alignSelf: 'center',
        borderRadius: wp('1%'),
    },
    small: {
        width: wp("40%"),
        height: hp("5%"),
    },
    pressed: {
        transform: [{ scale: 0.95 }],
        backgroundColor: colors.darkBrown,
    },

    //Return icon header
    return: {
        width: wp("9%"),
        height: wp("9%"),
        borderRadius: wp("4.5%"),
        backgroundColor: colors.nocolor,
    },
    baseReturn: {
        backgroundColor: colors.nocolor,
        borderWidth: 2,
        borderColor: colors.darkBrown,
        alignItems: 'center',
        justifyContent: 'center',
    },
    basePressed: {
        backgroundColor: colors.drawerBg,
    },

    //Horse
    horseBase: {
        marginVertical: hp("1%"),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: wp('2%'),
        width: wp("95%"),
        height: wp("20%"),
        borderWidth: 1,
        borderColor: colors.txtBody,
        backgroundColor: colors.inputBg,
        elevation: 3,
    },

    horsePressed: {
        backgroundColor: colors.drawerBg,
        color: colors.txtWhite,
    },

    //DROPDOWN
    selectList: {    
        width: wp("85%"),
        backgroundColor: colors.inputBg,
        borderColor: colors.lightBrown,
        marginVertical: hp("0.7%"),
    },
    selectDropDown: {
        zIndex: 999,
        position: 'absolute',
        top: hp("6.5%"),
        width: wp("85%"),
        backgroundColor: colors.inputBg,
        borderColor: colors.lightBrown,
    },

    historyTabletContainer: {
        backgroundColor: colors.inputBg,
        width: wp("95%"),
        padding: hp("1.5%"),
        marginVertical: hp("0.5%"),
        marginHorizontal: wp("2%"),
        borderRadius: wp('2%'),
        elevation: 2,
        borderWidth: 1,
        borderColor: colors.txtBody,
    },

    pressImg: {
        flexDirection: 'column',
        width: wp("95%"),
        height: hp("17%"),
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: colors.inputBg,
        borderRadius: wp('2%'),
        marginBottom: hp("1%"),
        elevation: 2,
    },

    horseInformationTab: {
        marginVertical: hp("1%"),
        width: wp("95%"),
        borderRadius: wp('2%'),
    },

    deleteBtn: {
        alignSelf: 'center',
        borderRadius: wp('1%'),
        backgroundColor:'#be190d',
    }

});

export default ButtonStyles;