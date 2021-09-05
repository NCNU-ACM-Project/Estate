// import React from "react";
// import {createStackNavigator} from "@react-navigation/stack";
// import AddObject from "../screens/AddObject";
// import AddObjectFillData from "../screens/AddObjectFillData";
// import AddObjectShowData from "../screens/AddObjectShowData";
// import plate from "../styles/plate";

// const Tab = createStackNavigator();
// const styles = {   backgroundColor: plate.lightOrange };
// export default function App1(){
//     return(
//         <Tab.Navigator styles={styles.container}
//             screenOptions={{
//                 tabBarStyle: { backgroundColor: plate.lightOrange },
//                 tabBarActiveTintColor: "red",
//             }}
//         >
//             <Tab.Screen
//                 name="addObject"
//                 component={AddObject}
//                 options={{
//                   headerStyle: styles,
//                   headerTitle: "新增市調物件",
//                 }}
//             />
//             <Tab.Screen
//                 name="addObjectFillData"
//                 component={AddObjectFillData}
//                 options={{
//                   headerStyle: styles,
//                   headerTitle: "聯絡人資訊",
//                 }}
//             />
//             <Tab.Screen
//                 name="addObjectShowData"
//                 component={AddObjectShowData}
//                 options={{
//                   headerStyle: styles,
//                   headerTitle: "資料預覽確認",
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }

