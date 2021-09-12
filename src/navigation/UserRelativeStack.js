import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import Fake from "../components/Fake2";
import UserRelative from "../screens/MembershipCenter";
import MyObject from "../screens/MyObject";
import plate from "../styles/plate";
import GoodNews from "../screens/GoodNews";
const Tab = createStackNavigator();

export default function App1() {
  return (
    <Tab.Navigator
      screenOptions={{ headerStyle: styles, headerTitleAlign: "center" }}
    >
      <Tab.Screen name="MembershipCenter" component={UserRelative} />

      <Tab.Screen
        name="fake"
        component={MyObject}
        options={{
          headerTitle: "我的物件",
        }}
      />

      {/* <Tab.Screen
        name="fake"
        component={Fake}
        options={{
          headerTitle: "賣家回覆",
        }}
      /> */}

      {/*}
      <Tab.Screen
        name="fake"
        component={Fack}
        options={{
          headerTitle: "買家回覆",
        }}
      />

      <Tab.Screen
        name="fake"
        component={Fack}
        options={{
          headerTitle: "推播訊息",
        }}
      />

      <Tab.Screen
        name="fake"
        component={Fack}
        options={{
          headerTitle: "付費中心",
        }}
      />

      <Tab.Screen
        name="fake"
        component={Fack}
        options={{
          headerTitle: "積分紀錄",
        }}
      />

      <Tab.Screen
        name="fake"
        component={Fack}
        options={{
          headerTitle: "我的行程",
        }}
      />

      <Tab.Screen
        name="fake"
        component={Fack}
        options={{
          headerTitle: "買方租方",
        }}
      />

      <Tab.Screen
        name="fake"
        component={Fack}
        options={{
          headerTitle: "我的追蹤",
        }} 
      /> */}
    </Tab.Navigator>
  );
}

const styles = {
  backgroundColor: plate.lightOrange,
};
