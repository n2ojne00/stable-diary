import React from 'react';
import { FlatList } from 'react-native';

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