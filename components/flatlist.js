import React from 'react';
import { FlatList, View } from 'react-native';

export default function ListComponent({ listData, renderItem, sortBy }) {
    const sortedData = [...listData].sort((a, b) =>
        a[sortBy]?.localeCompare(b[sortBy])
    );

    /** Item rendering need to add when using component currently (example) 
         * renderItem={({ item }) => (
                   <HorseListItem title={item.horseName} onPress={() => {}} />
                 )}
         */
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={sortedData}
            keyExtractor={(item) => item.horse_ID?.toString() || item.id?.toString()}
            renderItem={renderItem}
        />
    );
}

export function TrainingHistoryList({ listHistory, renderItem, sortBy }) {
    const sortedData = [...listHistory].sort((a, b) => {
        const aDate = new Date(`${a.date}T${a.starting}`);
        const bDate = new Date(`${b.date}T${b.starting}`);
        return bDate - aDate; // Newest first
    });

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={sortedData}
                keyExtractor={(item, index) => `${item.date}-${index}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: 8 }}
            />
        </View>
    );
}


/**
 * If want to add Item rendering here
 * <FlatList
      data={sortedData}
      keyExtractor={(item) => item.horse_ID?.toString() || item.id?.toString()}
      renderItem={({ item }) => (
        <ItemComponent title={item[titleKey]} onPress={() => {}} />
      )}
    />

    <ListComponent
  listData={FakeHorseData}
  ItemComponent={Horse}
  sortBy="horseName"
  titleKey="horseName"
/>
 */