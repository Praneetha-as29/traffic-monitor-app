import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';

const mockData = [
  { id: '1', location: 'Location A', level: 'Low' },
  { id: '2', location: 'Location B', level: 'Medium' },
  { id: '3', location: 'Location C', level: 'High' },
];

export default function TrafficStatusScreen() {
  const [loading, setLoading] = useState(true);
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTrafficData(mockData);
      setLoading(false);
    }, 1500);
  }, []);

  const getColor = (level) => {
    switch (level) {
      case 'Low': return '#4CAF50';
      case 'Medium': return '#FFC107';
      case 'High': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={trafficData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: getColor(item.level) }]}>
              <Text style={styles.cardText}>{item.location}</Text>
              <Text style={styles.cardText}>Traffic: {item.level}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 20, marginVertical: 10, borderRadius: 10 },
  cardText: { fontSize: 18, color: 'white' },
});
