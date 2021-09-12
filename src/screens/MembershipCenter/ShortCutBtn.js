import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import NormalText from "../../components/NormalText";
import plate from "../../styles/plate";

const ITEM_WIDTH = Math.floor(Dimensions.get("window").height / 10);

const ShortCutBtn = ({ icon, title, style, onPress }) => {
  return (
    <View style={[styles.outerContainer, style]}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {icon}
      </TouchableOpacity>
      <NormalText style={styles.btnText}>{title}</NormalText>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingEnd: 5,
  },
  container: {
    height: ITEM_WIDTH,
    width: ITEM_WIDTH,
    borderRadius: ITEM_WIDTH,
    borderWidth: 1,
    borderColor: plate.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default ShortCutBtn;
