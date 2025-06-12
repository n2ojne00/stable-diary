import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import txtStyles from '../styles/text';
import ButtonStyles from '../styles/buttons';
import colors from '../styles/color';

export const HistoryTablet = ({
  trainingDate,
  startingTime,
  horseName,
  trainingType,
  minutes,
  notes,
}) => {
  const [expanded, setExpanded] = useState(false);
  const seeMore = <MaterialIcons name="more-horiz" size={30} color={colors.txtSubtitle} />;

  const handleToggle = () => {
    if (notes) setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
      style={ButtonStyles.historyTabletContainer}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={txtStyles.body}>{startingTime}</Text>
        <Text style={txtStyles.body}>{trainingDate}</Text>

      </View>

      <Text style={txtStyles.title}>{horseName}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={txtStyles.subtitle}>{trainingType}</Text>
        <Text style={txtStyles.body}>{minutes} min</Text>
      </View>


      {notes && (
        expanded ? (
          <Text style={txtStyles.small}>{notes}</Text>
        ) : (
          <Text style={txtStyles.subtitle}>{seeMore}</Text>
        )
      )}

    </TouchableOpacity>
  );
};
