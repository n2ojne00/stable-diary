import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "./color";

const txtStyles = StyleSheet.create({
    header: {
        fontSize: hp('4%'),
        fontFamily: 'NotoSansDisplay_400Regular',
        color: colors.txtHeader,
    },
    title: {
        fontSize: hp('3%'),
        fontFamily: 'NotoSansDisplay_400Regular',
        color: colors.txtHeader,
    },
    subtitle: {
        fontSize: hp('2.5%'),
        fontFamily: 'NotoSansDisplay_400Regular',
        color: colors.txtSubtitle,
    },
    body: {
        fontSize: hp('2%'),
        color: colors.txtBody,
        fontFamily: 'NotoSansDisplay_400Regular',
    },
    small: {
        fontSize: hp('1.8%'),
        color: colors.txtSmall,
        fontFamily: 'NotoSansDisplay_400Regular_Italic',
    },
    buttonSmall: {
        fontSize: hp('2%'),
        color: colors.txtWhite,
        fontFamily: 'NotoSansDisplay_400Regular',
    },
    error: {
        fontSize: hp('1.5%'),
        color: "red",
    },
    overImg: {
        fontSize: hp('4%'),
        fontFamily: 'NotoSansDisplay_400Regular',
        color: colors.txtHeader,
        position: 'absolute',
        backgroundColor: colors.background,
        padding: wp('2%'),
        width: wp('95%'),
        textAlign: 'center',
    },
});

export default txtStyles;
