import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import plate from "../styles/plate";
import LoginPage from "../screens/Login";
import Entrance from "../screens/Entrance";
import RegisterPage from "../screens/Register";

const Tab = createStackNavigator();

export default function LoginStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerStyle: styles, headerTitleAlign: "center" }}
    >
      <Tab.Screen
        name="entrance"
        component={Entrance}
        options={{
          headerTitle: "台灣房地網 NEW",
        }}
      />
      <Tab.Screen
        name="register"
        component={RegisterPage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="login"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = {
  backgroundColor: plate.lightOrange,
};
