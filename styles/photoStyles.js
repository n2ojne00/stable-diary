import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";

//Background containers
const photo = StyleSheet.create({

    logo: {
        width: wp("65%"),
        height: hp("30%"),
        resizeMode: 'cover',
        borderRadius: wp("5%"),
        
    },
    pressHome: {
        width: wp('95%'),
        height: hp('17%'),
        overflow: 'hidden',
        borderRadius: wp('2%'),
    }


});

export default photo;