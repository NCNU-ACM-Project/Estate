import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/HomePage";
import Fack from "../components/Fake2";
import News from "../screens/News";
import GoodNews from "../screens/GoodNews";

import plate from "../styles/plate";
const Tab = createStackNavigator();

export default function App1() {
  return (
    <Tab.Navigator
      screenOptions={{ headerStyle: styles, headerTitleAlign: "center" }}
    >
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen
        name="fake"
        component={Fack}
        options={{
          headerTitle: "租房",
        }}
      />

      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerTitle: "業界新聞",
        }}
      />

      <Tab.Screen
        name="GoodNews"
        component={GoodNews}
        options={{
          headerTitle: "好康消息",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = {
  backgroundColor: plate.lightOrange,
};
