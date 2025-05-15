import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚦 Traffic Monitor</Text>
      <Button title="Traffic Status" onPress={() => navigation.navigate('Traffic Status')} />
      <View style={styles.spacer} />
      <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 30 },
  spacer: { height: 20 },
});
