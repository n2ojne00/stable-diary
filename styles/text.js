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
    //WHITE VERSIO
    headerWhite: {
        fontSize: hp('4%'),
        fontFamily: 'NotoSansDisplay_400Regular',
        color: colors.txtWhite,
    },
    titleWhite: {
        fontSize: hp('3%'),
        fontFamily: 'NotoSansDisplay_400Regular',
        color: colors.txtWhite,
    },
    subtitleWhite: {
        fontSize: hp('2.5%'),
        fontFamily: 'NotoSansDisplay_400Regular',
        color: colors.txtWhite,
    },
    bodyWhite: {
        fontSize: hp('2%'),
        color: colors.txtWhite,
        fontFamily: 'NotoSansDisplay_400Regular',
    },
    smallWhite: {
        fontSize: hp('1.8%'),
        color: colors.txtWhite,
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
        textTransform: 'uppercase',
        fontSize: hp('4%'),
        fontFamily: 'NotoSansDisplay_400Regular',
        color: colors.txtHeader,
        position: 'absolute',
        backgroundColor: colors.background,
        padding: wp('2%'),
        width: wp('95%'),
        textAlign: 'center',
    },
    horseInfoTabTxt: {
        padding: 5,
        justifyContent: 'space-around',
        backgroundColor: colors.inputBg,
        width: wp('95%'),
        minHeight: hp('13%'),
        textAlign: 'center',
        borderColor: colors.lightBrown,
        borderWidth: 1,
        borderRadius: wp('2%'),
    },
});

export default txtStyles;
