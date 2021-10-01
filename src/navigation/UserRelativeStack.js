import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Fack2 from '../components/Fake2';

import { MyScheduleCard } from '../components'


const Tab = createStackNavigator();

export default function App1() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MySchedule" component={MyScheduleCard} />
      <Tab.Screen name="Fake2" component={Fack2} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
