import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {Provider} from "react-redux";
import {Main} from './navigation/Main';
import {store} from "./store";

//------------------------------
//    Root Component of App
//------------------------------
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider config={config}>
        {/* <StatusBar style="auto" /> */}
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}
