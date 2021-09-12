import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const picWidth = Math.floor(Dimensions.get("window").height / 5);

const Info = ({ grade, score }) => {
  return (
    <View style={styles.picture}>
      <Ionicons name="person" size={picWidth} color="black" />
      <Text>xxx</Text>
      <View style={styles.member}>
        <Text>會員等級:{grade}</Text>
        <Text>{"\t"}</Text>
        <Text>會員積分:{score}</Text>
      </View>
      <TouchableOpacity style={styles.edit}>
        <Text style={styles.text}>編輯個人檔案</Text>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingEnd: 5,
    borderWidth: 1,
    margin: 10,
    borderColor: "white",
    borderBottomColor: "black",
  },
  member: {
    flexDirection: "row",
    fontSize: 15,
  },
  edit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
  },
  text: { color: "#c4342d" },
});
export default Info;

//
