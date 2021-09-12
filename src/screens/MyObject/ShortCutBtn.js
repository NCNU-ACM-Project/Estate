import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
//import { LinearGradient } from "react-native-svg";
import NormalText from "../../components/NormalText";
import plate from "../../styles/plate";
import { LinearGradient } from "expo-linear-gradient";
//import LinearGradient from "react-native-linear-gradient";
const ITEM_WIDTH = Math.floor(Dimensions.get("window").height / 4);

const ShortCutBtn = ({ icon, title, style, onPress }) => {
  return (
    <View style={[styles.outerContainer, style]}>
      <LinearGradient colors={["#FF8C00", "#FFF8DC"]}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          {icon}
          <NormalText style={styles.btnText}>
            {"\n"}
            {title}
          </NormalText>
        </TouchableOpacity>
      </LinearGradient>
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
    height: ITEM_WIDTH * 1.08,
    width: ITEM_WIDTH,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
  },
});
export default ShortCutBtn;
