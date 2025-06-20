import React from 'react';
import { View, Text } from 'react-native';
import base from '../styles/base';
import { HorseListItem } from '../components/pressable';
import FakeHorseData from '../exampleData/horseData.json';
import ListComponent from '../components/flatlist';
import { Icons } from '../styles/icons';


export default function MyStable() {
  return (
    <View style={base.container}>
      <View style={base.logoHeader}>
       {Icons.horseHead}
       {Icons.barn}
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
