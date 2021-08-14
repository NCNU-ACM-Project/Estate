import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';

import { Main } from './navigation/Main';

import { Provider } from "react-redux";
import { store } from "./store";

//------------------------------
//    Root Component of App
//------------------------------
export default function App() {
  return (
  <Provider store={store}>
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
          <Main />
      </NavigationContainer>
    </NativeBaseProvider>
  </Provider>
  );
}