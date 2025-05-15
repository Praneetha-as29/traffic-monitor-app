import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TrafficStatusScreen from './screens/TrafficStatusScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Traffic Status" component={TrafficStatusScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
