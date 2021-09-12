import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ShortCutBtn from "./ShortCutBtn";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ITEM_WIDTH = Math.floor(Dimensions.get("window").height / 5);

const ShortCut = ({ style, navigation }) => {
  const onPress = (navigation, loc) => {
    navigation.push(loc);
  };

  return (
    <View style={[styles.container, style]}>
      <ShortCutBtn
        title="我的聯賣/市調"
        style={styles.btn}
        icon={
          <MaterialIcons
            name="house"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "MyObject");
            }}
          />
        }
      />

      <ShortCutBtn
        title="到期提醒物件"
        style={styles.btn}
        icon={
          <AntDesign
            name="filetext1"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, " ");
            }}
          />
        }
      />

      <ShortCutBtn
        title="強制下架物件"
        style={styles.btn}
        icon={
          <MaterialCommunityIcons
            name="alert-remove-outline"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "");
            }}
          />
        }
      />

      <ShortCutBtn
        title="已成交物件"
        style={styles.btn}
        icon={
          <Feather
            name="unlock"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, " ");
            }}
          />
        }
      />

      <ShortCutBtn
        title="自行下架物件"
        style={styles.btn}
        icon={
          <MaterialCommunityIcons
            name="layers-triple"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "");
            }}
          />
        }
      />

      <ShortCutBtn
        title="審核訊息"
        style={styles.btn}
        icon={
          <MaterialCommunityIcons
            name="message-processing-outline"
            size={ITEM_WIDTH / 2}
            color="black"
            onPress={() => {
              onPress(navigation, "");
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
    width: "50%",
  },
});

export default ShortCut;
