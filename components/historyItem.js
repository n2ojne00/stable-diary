import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import txtStyles from '../styles/text';
import ButtonStyles from '../styles/buttons';
import colors from '../styles/color';
import { Icons } from '../styles/icons';

export const HistoryItem = ({
  trainingDate,

  horseName,
  trainingType,
  minutes,
  notes,
}) => {
  const [expanded, setExpanded] = useState(false);


  const handleToggle = () => {
    if (notes) setExpanded(!expanded);
  };

  // Format the date and time for user-friendly display (Finnish locale)
  const dateObj = new Date(trainingDate);
  const formattedDate = dateObj.toLocaleDateString('fi-FI');
  const formattedTime = dateObj.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });
  
  
  return (

    //Training history item with expandable notes

    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
      style={ButtonStyles.historyTabletContainer}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={txtStyles.subtitle}>{formattedTime}</Text>
        <Text style={txtStyles.subtitle}>{formattedDate}</Text>
      </View>

      <Text style={txtStyles.title}>{horseName}</Text>

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
