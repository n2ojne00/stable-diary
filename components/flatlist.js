import React from 'react';
import { FlatList, } from 'react-native';

export default function StableListComponent({ listData, renderItem, sortBy }) {
    const sortedData = [...listData].sort((a, b) =>
        a[sortBy]?.localeCompare(b[sortBy])
    );

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={sortedData}
            keyExtractor={(item) => item.horse_ID?.toString() || item.id?.toString()}
            renderItem={renderItem}
        />
    );
}

export function TrainingHistoryList({ listHistory, renderItem, sortBy, inverted = false }) {
    const sortedData = [...listHistory].sort((a, b) => {
        return new Date(b[sortBy]) - new Date(a[sortBy]);
    });

    return (

        <FlatList
            inverted={inverted}
            showsVerticalScrollIndicator={false}
            data={sortedData}
            keyExtractor={(item, index) => `${item.date}-${index}`}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: 8 }}
        />

    );
}
