//Change title to horse name

import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import txtStyles from "../styles/text";
import ButtonStyles from "../styles/buttons";
import photo from "../styles/photoStyles";
import colors from "../styles/color";

// Item to list of horses in stable view
export const HorseInformation = ({ onPress, title, dateOfBirth, breed, gender, owner }) => {
    return (
        <Pressable
            style={ButtonStyles.horseInformationTab}
            onPress={onPress}
        >
            <ImageBackground
                source={require('../images/plank.jpg')}
                style={photo.horseInfoImg}
                resizeMode="cover"
            >
                <View style={txtStyles.horseInfoTabTxt}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={txtStyles.bodyWhite}>{breed}</Text>
                        <Text style={txtStyles.bodyWhite}>{gender}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                        <Text style={txtStyles.headerWhite}>{title}</Text>
                        <Text style={txtStyles.titleWhite}>{dateOfBirth}</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginRight: 20 }}>
                        <Text style={txtStyles.bodyWhite}>Omistaja: {owner}</Text>
                    </View>
                </View>
            </ImageBackground>

        </Pressable>
    );
};

