import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ContactForm from "../screens/CollaborationForm";
import plate from "../styles/plate";

const Tab = createStackNavigator();

export default function App1() {
  return (
    <Tab.Navigator
      screenOptions={{ headerStyle: styles, headerTitleAlign: "center" }}
    >
      <Tab.Screen
        name="collaborationForm"
        component={ContactForm}
        options={{
          headerTitle: "合作專區",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = {
  backgroundColor: plate.lightOrange,
};
