import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import txtStyles from '../styles/text';
import ButtonStyles from '../styles/buttons';
import colors from '../styles/color';
import { Icons } from '../styles/icons';

export const HistoryItem = ({
  trainingDate,
  startingTime,
  horseName,
  trainingType,
  minutes,
  notes,
}) => {
  const [expanded, setExpanded] = useState(false);


  const handleToggle = () => {
    if (notes) setExpanded(!expanded);
  };

  return (

    //Training history item with expandable notes

    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
      style={ButtonStyles.historyTabletContainer}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={txtStyles.body}>{startingTime}</Text>
        <Text style={txtStyles.body}>{trainingDate}</Text>
      </View>

      <Text style={txtStyles.subtitle}>{horseName}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={txtStyles.body}>{trainingType}</Text>
        <Text style={txtStyles.body}>{minutes} min</Text>
      </View>

      {//Note expansion
      }
      {notes && (
        expanded ? (
          <Text style={txtStyles.small}>{notes}</Text>
        ) : (
          <Text style={txtStyles.subtitle}>{Icons.seeMore}</Text>
        )
      )}

    </TouchableOpacity>
  );
};
