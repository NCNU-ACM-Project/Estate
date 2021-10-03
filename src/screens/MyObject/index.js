import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import ShortCut from "./ShortCut";

const { width } = Dimensions.get("window");

const Myobject = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ShortCut style={styles.content} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    flex: 1,
  },

  content: {
    flex: 1,
    flexGrow: 1,
  },
});

export default Myobject;
