import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { UrgentObject } from '../screens/UrgentObject'

const MainStack = createNativeStackNavigator();

export const Main = () => (
  <MainStack.Navigator screenOptions={HeaderStyle}>
    <MainStack.Screen name="Home" component={Home} 
      options={{ 
        title: '主頁',
      }}
    />
    <MainStack.Screen name="UrgentObject" component={UrgentObject} 
      options={{ 
        title: '急售物件',     
      }}
    />
  </MainStack.Navigator>
);

const HeaderStyle = {
  headerStyle: {
    backgroundColor: '#F3E2C8',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'black'
  },
}