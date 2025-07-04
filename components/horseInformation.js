//Change title to horse name

import { Pressable, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import txtStyles from "../styles/text";
import ButtonStyles from "../styles/buttons";

// Item to list of horses in stable view
export const HorseInformation = ({ title, onPress, gender, dateOfBirth }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                ButtonStyles.horseBase,
                pressed && ButtonStyles.horsePressed,
            ]}
            onPress={onPress}
        >
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: wp("90%"), }}>
                <Text style={[txtStyles.title, { alignSelf: 'center' }]}>{title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={txtStyles.body}>{gender}</Text>
                    <Text style={txtStyles.body}>{dateOfBirth}</Text>
                </View>
            </View>
        </Pressable>
    );
};