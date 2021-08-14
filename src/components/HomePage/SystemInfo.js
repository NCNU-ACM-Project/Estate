import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NormalText from "../NormalText";
import Hr from "../Hr";
import SystemInfoEntry from "./SystemInfoEntry";
import { useSelector } from "react-redux";

const SystemInfo = ({ style }) => {
  const {systemInfo} = useSelector(state => state.home);

  return (
    <View style={[styles.container, style]}>
      <NormalText style={styles.titleText}>系統公告</NormalText>
      <Hr></Hr>
      <SystemInfoEntry systemInfo={systemInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleText: {
    textAlign: "center",
    width: "100%",
    fontSize: 20,
  }
});

export default SystemInfo;
