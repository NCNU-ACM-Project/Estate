import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NormalText from "../components/NormalText";

const SubmitBtn = ({ label, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <NormalText style={styles.label}> {label} </NormalText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFCB2",
    padding: 10,
  },
  label: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default SubmitBtn;
