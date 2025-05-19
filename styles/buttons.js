import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";

const baseStyle = {
    backgroundColor: colors.lightBrown,
    paddingHorizontal: wp("1%"),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: hp("0.5%"),
};

const ButtonStyles = StyleSheet.create({
    base: {
        ...baseStyle,
        width: wp("50%"),
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
    return: {
        width: wp("12%"),
        height: wp("12%"),
        borderRadius: wp("6.5%"),
    },
    
});

export default ButtonStyles;