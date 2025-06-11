import React from 'react';

import base from '../styles/base';
import { TrainingHistoryList } from '../components/flatlist';
import HistoryData from '../exampleData/trainingHistory.json'
import { HistoryTablet } from '../components/historyTablet';
import { View } from 'react-native';

export default function History() {
  return (
    <View style={base.container}>

      <TrainingHistoryList
        listHistory={HistoryData}
        sortBy="horseName"
        renderItem={({ item }) =>
          <HistoryTablet
            trainingDate={item.date}
            startingTime={item.starting}
            horseName={item.horseName}
            trainingType={item.trainingType}
            minutes={item.durationMinutes}
            notes={item.notes}
          />}
      />

    </View>
  );
}