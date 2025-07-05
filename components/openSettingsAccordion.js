import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { CustomButton } from './pressable';
import txtStyles from '../styles/text';
import ButtonStyles from '../styles/buttons';
import { Icons } from '../styles/icons';

 // Accordion item for settings

export const SettingsAccordionItem = ({ title, buttons, AddIcon = [] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
      style={ButtonStyles.historyTabletContainer}
    >
     
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: hp("1%")}}>
        <Text style={txtStyles.subtitle}>{title}</Text>
        {expanded ? [Icons.minus] : [Icons.plus]} 
      </View>

      {/* drop-down menu with buttons */}
      {expanded && (
        <View style={{ marginTop: 10 }}>
          {buttons.map((btn,) => (
            <CustomButton title={btn.title} onPress={btn.onPress} />
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};