import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";

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
        //alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 5,
        width: wp("90%"),
        height: wp("18%"),
        backgroundColor: colors.lightBg,
        elevation: 3,
    },

    horsePressed: {
        backgroundColor: colors.lightBrown,
        color: colors.txtWhite,
    },

    txtInput: {
        marginVertical: hp("0.8%"),
        paddingLeft: wp("5%"),
        backgroundColor: colors.inputBg,
        borderRadius: 5,
        width: wp("70%"),
        height: wp("12%"),
        elevation: 2,
    }

});

export default ButtonStyles;