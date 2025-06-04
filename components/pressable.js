import React from "react";
import { Pressable, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import ButtonStyles from "../styles/buttons";
import txtStyles from "../styles/text";
import AntDesign from '@expo/vector-icons/AntDesign';


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

//      <IconButton iconName="arrowleft" onPress={() => { }} size={28} color={colors.txtWhite} />
export const IconButton = ({ iconName, onPress, size = 24, color = "#fff" }) => {
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

//Change title to horse name
// <HorseListItem title="Horse name" onPress={() => { }} />
export const HorseListItem = ({ title, onPress,}) => {
    return (
        <Pressable
            style={({ pressed }) => [
                ButtonStyles.horseBase,
                pressed && ButtonStyles.horsePressed,
            ]}
            onPress={onPress}
        >
            <Text style={txtStyles.title}>{title}</Text>
        </Pressable>
    );
};

/**
 * <CustomButton title="This is Button" onPress={() => {}} size="small" />
 */