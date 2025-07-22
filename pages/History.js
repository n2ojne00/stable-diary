import React from 'react';
import base from '../styles/base';
import { TrainingHistoryList } from '../components/flatlist';
import HistoryData from '../exampleData/trainingHistory.json'
import { HistoryItem } from '../components/historyItem';
import { View } from 'react-native';

export default function History() {
  return (
    <View style={base.container}>

      <TrainingHistoryList
        listHistory={HistoryData} // Replace with actual data source
        sortBy="horseName"
        renderItem={({ item }) =>
          <HistoryItem
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