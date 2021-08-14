import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Hr = ({style}) => {
  return <View style={[styles.container,style]}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: "black",
    margin: 3
  }
});

export default Hr;
