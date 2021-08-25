import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SellTogether, ObjectDetail } from "../screens";

const Tab = createStackNavigator();

export default function App1() {
  return (
    <Tab.Navigator screenOptions={headerStyle}>
      <Tab.Screen
        name="SellTogether"
        component={SellTogether}
        options={{
          title: "聯賣中物件"
        }}
      />

      <Tab.Screen
        name="ObjectDetail"
        component={ObjectDetail}
        options={{
          headerTitle: "物件詳情",
        }}
      />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

const headerStyle = {
  headerStyle: {
    backgroundColor: "#F3E2C8",
  },
  headerTintColor: "black",
  headerTitleStyle: {
    fontWeight: "bold",
    color: "black",
  },
};