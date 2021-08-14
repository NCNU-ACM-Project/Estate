import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Fack from "../components/Fake2";

import plate from "../styles/plate";
const Tab = createStackNavigator();

export default function App1() {
  return (
    <Tab.Navigator styles={styles.container}>
      <Tab.Screen
        name="home"
        component={HomePage}
        options={({ navigation, route }) => {
          return {
            headerTitle: (navigation) => (
              <Header navigation={navigation} title="主頁" />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Fake"
        component={Fack}
        options={{
          headerStyle: styles,
          headerTitle: "租房",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = {
  backgroundColor: plate.lightOrange,
};
