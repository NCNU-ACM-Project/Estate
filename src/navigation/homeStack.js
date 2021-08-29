import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Fack from "../components/Fake2";
import News from "../screens/News";
import GoodNews from "../screens/GoodNews";
import AddObject from "../screens/AddObject";

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

      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerStyle: styles,
          headerTitle: "業界新聞",
        }}
      />

      <Tab.Screen
        name="GoodNews"
        component={GoodNews}
        options={{
          headerStyle: styles,
          headerTitle: "好康消息",
        }}
      />
      <Tab.Screen
        name="AddObject"
        component={AddObject}
        options={{
          headerStyle: styles,
          headerTitle: "新增市調物件",
        }}
      />
    </Tab.Navigator>

    
  );
}

const styles = {
  backgroundColor: plate.lightOrange,
};
