import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Fack2 from "../components/Fake2";

const Tab = createStackNavigator();

export default function App1() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Fake1"
        title="聯賣中物件"
        component={Fack2}
        options={({navigation, route})=>{
            console.log(navigation, route);
            return ({
                
            })
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
