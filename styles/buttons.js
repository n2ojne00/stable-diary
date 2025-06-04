import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";
import txtStyles from "./text";

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
        marginVertical: hp("1%"),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 5,
        width: wp("90%"),
        height: wp("18%"),
        borderWidth: 2,
        backgroundColor: colors.lightBg,
        elevation: 3,
    },

    horsePressed: {
        backgroundColor: colors.greeny,
        color: colors.txtWhite,
    },

    //DROPDOWN
    selectList: {
        width: wp("90%"),
        backgroundColor: colors.inputBg,
        borderColor: colors.lightBrown,
    },
    selectDropDown: {
        width: wp("90%"),
        backgroundColor: colors.inputBg,
        borderColor: colors.lightBrown,
    },
    selectCheckBox: {
        borderColor: colors.carrot,
        width: wp("4%"),
        height: wp("4%"),
        
    },
    selectBadge: {
        backgroundColor: colors.carrot,
        color: colors.txtWhite,
        
    },

});

export default ButtonStyles;