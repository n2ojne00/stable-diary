import React from "react";
import { Pressable, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import txtStyles from "../styles/text";
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonStyles from "../styles/buttons";


//<CustomButton title="This is Button" onPress={() => { }} />
//<CustomButton title="Small Button" onPress={() => { }} size="small" />
export const CustomButton = ({ title, onPress, size }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                ButtonStyles.base,
                ButtonStyles[size],
                pressed && ButtonStyles.pressed,
            ]}
            onPress={onPress}
        >
            <Text style={txtStyles.buttonSmall}>{title}</Text>
        </Pressable>
    );
};


//Change title to horse name
// <HorseListItem title="Horse name" onPress={() => { }} />
export const HorseListItem = ({ title, onPress, gender, dateOfBirth }) => {
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

/**
 * export const IconButton = ({ iconName, onPress, size = 24, color = "#fff" }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                ButtonStyles.baseReturn,
                ButtonStyles.return,
                pressed && ButtonStyles.basePressed,
            ]}
            onPress={onPress}
        >
            <AntDesign name={iconName} size={size} color={color} />
        </Pressable>
    );
};
 */
