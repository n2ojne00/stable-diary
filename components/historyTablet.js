import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const HistoryTablet = ({
  trainingDate,
  startingTime,
  horseName,
  trainingType,
  minutes,
  notes,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Text style={styles.date}>{trainingDate}</Text>
      <Text style={styles.time}>{startingTime}</Text>
      <Text style={styles.horse}>{horseName}</Text>
      <Text style={styles.type}>{trainingType}</Text>
      <Text style={styles.minutes}>{minutes} min</Text>

      {expanded && notes ? (
        <Text style={styles.notes}>{notes}</Text>
      ) : (
        <Text style={styles.showMore}>Paina {expanded ? 'piilottaaksesi' : 'nähdäksesi'} muistiinpanot</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    margin: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  date: { fontSize: 14, color: '#666' },
  time: { fontSize: 14, color: '#888' },
  horse: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 4 },
  type: { fontSize: 14, color: '#444', marginTop: 2 },
  minutes: { fontSize: 14, color: '#007AFF', fontWeight: '500', marginTop: 2 },
  notes: { marginTop: 8, fontSize: 13, color: '#444', lineHeight: 18 },
  showMore: {
    marginTop: 8,
    fontSize: 12,
    color: '#007AFF',
    fontStyle: 'italic',
  },
});