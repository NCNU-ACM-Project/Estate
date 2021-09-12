import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import ShortCutBtn from "./ShortCutBtn";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ITEM_WIDTH = Math.floor(Dimensions.get("window").height / 10);
const ShortCut = ({ style, navigation }) => {
  const onPress = (navigation, loc) => {
    navigation.push(loc);
  };

  return (
    <View style={[styles.container, style]}>
      <ShortCutBtn
        title="我的物件"
        style={styles.btn}
        icon={
          <AntDesign
            name="shoppingcart"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />
      <ShortCutBtn
        title="賣家回覆"
        style={styles.btn}
        icon={
          <AntDesign
            name="mail"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />
      <ShortCutBtn
        title="買家回覆"
        style={styles.btn}
        icon={
          <MaterialIcons
            name="question-answer"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />

      <ShortCutBtn
        title="推播訊息"
        style={styles.btn}
        icon={
          <Ionicons
            name="information-circle-outline"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />
      <ShortCutBtn
        title="付費中心"
        style={styles.btn}
        icon={
          <MaterialIcons
            name="payment"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />
      <ShortCutBtn
        title="積分紀錄"
        style={styles.btn}
        icon={
          <FontAwesome
            name="history"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />

      <ShortCutBtn
        title="我的行程"
        style={styles.btn}
        icon={
          <MaterialCommunityIcons
            name="timetable"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />
      <ShortCutBtn
        title="買方租方"
        style={styles.btn}
        icon={
          <MaterialIcons
            name="group"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />
      <ShortCutBtn
        title="我的追蹤"
        style={styles.btn}
        icon={
          <MaterialIcons
            name="track-changes"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "fake");
            }}
          />
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  btn: {
    fontSize: ITEM_WIDTH,
    width: "33%",
  },
});

export default ShortCut;
