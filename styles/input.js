import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";
import txtStyles from "./text";


    const InputStyles = StyleSheet.create({
            //TEXTINPUT AND NOTEINPUT
    txtInput: {
        marginVertical: hp("0.8%"),
        backgroundColor: colors.inputBg,
        borderRadius: 5,
        width: wp("85%"),
        height: wp("12%"),
        elevation: 2,
    },

    noteInput: {
        marginVertical: hp("0.8%"),
        padding: 5,
        textAlignVertical: 'top',
        backgroundColor: colors.inputBg,
        borderRadius: 5,
        width: wp("85%"),
        height: wp("50%"),
        elevation: 2,
    },
    });

    export default InputStyles;