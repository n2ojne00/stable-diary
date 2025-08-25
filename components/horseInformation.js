//Change title to horse name
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import txtStyles from "../styles/text";
import ButtonStyles from "../styles/buttons";
import colors from "../styles/color";
import { TabIcons } from "../styles/icons";
import { useNavigation } from "@react-navigation/native";
import AlertModal from "./alertModal";

// Item to list of horses in stable view
export const HorseInformation = ({ onPress, title, onLongPress, dateOfBirth, breed, gender, owner }) => {

    return (
        <>
            <Pressable
                style={({ pressed }) => [
                    ButtonStyles.horseInformationTab,
                    pressed && ButtonStyles.pressed
                ]}
                onPress={onPress}
                onLongPress={onLongPress}
            >

                <View style={txtStyles.horseInfoTabTxt}>

                    <View style={{ flexDirection: 'row', marginLeft: wp('3%'), }}>
                        <View style={{ flex: 2 }}>
                            <Text style={txtStyles.body}>{breed}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={txtStyles.body}>{gender}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp('3%'), }}>
                        <View style={{ flex: 2 }}>
                            <Text style={txtStyles.title}>{title}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[txtStyles.subtitle, { flexShrink: 1, flexWrap: 'wrap' }]} numberOfLines={3}
                                ellipsizeMode="tail">{dateOfBirth}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end', marginRight: wp('3%'), }}>
                        <Text style={txtStyles.body}>
                            {TabIcons.Profile([colors.lightBrown], 16)} {owner}
                        </Text>
                    </View>

                </View>

            </Pressable>

         
        </>
    );
};

