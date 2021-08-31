import React from "react";
import {Dimensions} from "react-native";
import { Home } from "../screens/Home";
import { UrgentObject } from "../screens/UrgentObject";

import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// stack navigator
import HomeStack from "./HomeStack";
import userRelativeStack from "./UserRelativeStack";
import sellTogetherStack from "./SellTogetherStack";
import collectStack from "./CollectStack";
import collaborationStack from "./CollaborationStack";
import plate from "../styles/plate";

const Tab = createBottomTabNavigator();
// const MainStack = createNativeStackNavigator();

const {width} = Dimensions.get('window');

export const Main = () => (
  <Tab.Navigator       
    screenOptions={{
      keyboardHidesTabBar: true,
      headerShown: false,
      tabBarStyle: [
        {
          "display": "flex"
        },
        { backgroundColor: plate.lightOrange, width: width }
      ],
      tabBarActiveTintColor: "red",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen name="userRelative" component={userRelativeStack} />
    <Tab.Screen name="sellTogether" component={sellTogetherStack} />
    <Tab.Screen name="collect" component={collectStack} />
    <Tab.Screen name="collaboration" component={collaborationStack} />
  </Tab.Navigator>

  // <MainStack.Navigator screenOptions={HeaderStyle}>
  //   <MainStack.Screen name="Home" component={Home}
  //     options={{
  //       title: '主頁',
  //     }}
  //   />
  //   <MainStack.Screen name="UrgentObject" component={UrgentObject}
  //     options={{
  //       title: '急售物件',
  //     }}
  //   />
  // </MainStack.Navigator>
);

const HeaderStyle = {
  headerStyle: {
    backgroundColor: "#F3E2C8",
  },
  headerTintColor: "black",
  headerTitleStyle: {
    fontWeight: "bold",
    color: "black",
  },
};
