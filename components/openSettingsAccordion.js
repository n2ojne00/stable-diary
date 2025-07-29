import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { CustomButton } from './pressable';
import txtStyles from '../styles/text';
import ButtonStyles from '../styles/buttons';
import { Icons } from '../styles/icons';

// Accordion item for settings

export const SettingsAccordionItem = ({ title, buttons = [] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
      style={ButtonStyles.historyTabletContainer}
    >

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: hp("1%") }}>
        <Text style={txtStyles.subtitle}>{title}</Text>
        {expanded ? [Icons.minus] : [Icons.plus]}
      </View>

      {/* drop-down menu with mapped buttons */}
      {expanded && (
        <View style={{ marginTop: 10 }}>
          {buttons.map((btn,) => (
            <CustomButton
              addIcon={btn.addIcon}
              key={btn.title} // Ensure unique key for each button, currently using title
              title={btn.title}
              onPress={btn.onPress}
            />
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};