import React from 'react';
import { View, Text } from 'react-native';
import base from '../styles/base';
import { HorseListItem } from '../components/pressable';
import FakeHorseData from '../exampleData/horseData.json';
import ListComponent from '../components/flatlist';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../styles/color';


export default function MyStable() {
  return (
    <View style={base.container}>
      <View style={base.logoHeader}>
        <MaterialCommunityIcons name="horse-variant" size={90} color={colors.lightBrown} />
        <MaterialCommunityIcons name="barn" size={100} color={colors.lightBrown} />

      </View>
      <View style={base.bodyContainer}>
        <ListComponent
          listData={FakeHorseData}
          sortBy="horseName"
          renderItem={({ item }) => (
            <HorseListItem title={item.horseName} onPress={() => { }} />
          )}
        />
      </View>

    </View>
  );
}
