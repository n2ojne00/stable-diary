import React from "react";
import { Pressable, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import ButtonStyles from "../styles/buttons";
import txtStyles from "../styles/text";
import AntDesign from '@expo/vector-icons/AntDesign';


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

export const IconButton = ({ iconName, onPress, size = 24, color = "#fff" }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                ButtonStyles.base,
                ButtonStyles.return,
                pressed && ButtonStyles.pressed,
            ]}
            onPress={onPress}
        >
            <AntDesign name={iconName} size={size} color={color} />
        </Pressable>
    );
};

/**
 * <CustomButton title="This is Button" onPress={() => {}} size="small" />
 */