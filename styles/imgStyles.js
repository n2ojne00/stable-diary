import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "./color";

//Background containers
const photo = StyleSheet.create({

    logo: {
        width: wp("40%"),
        height: hp("18%"),
        resizeMode: 'center',
        borderRadius: wp("3%"),
    },


});

export default photo;