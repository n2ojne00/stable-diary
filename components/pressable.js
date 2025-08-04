import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import txtStyles from "../styles/text";
import ButtonStyles from "../styles/buttons";
import photo from "../styles/photoStyles";


//<CustomButton title="This is Button" onPress={() => { }} />
//<CustomButton title="Small Button" onPress={() => { }} size="small" />
export const CustomButton = ({ title, onPress, size, addIcon, reStyle }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                ButtonStyles.base,
                ButtonStyles[size],
                pressed && ButtonStyles.pressed,
                reStyle
            ]}
            onPress={onPress}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: wp("70%"), position: 'relative' }}>
                <View style={{ position: 'absolute', left: wp("5%"), }}>
                    {addIcon}
                </View>
                <Text style={[txtStyles.buttonSmall, { textAlign: 'center', flex: 1 }]}>{title}</Text>
            </View>
        </Pressable>
    );
};


export const HomeTabButton = ({ title, img, onPress }) => {
    return (
        <Pressable
            style={ButtonStyles.pressImg}
            onPress={onPress}>
            <Image
                source={img}
                style={photo.pressHome}
                resizeMode="cover"
            />
            <Text style={txtStyles.overImg}>{title}</Text>
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
