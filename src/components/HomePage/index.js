import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "./Carousel";
import HomeShortCut from "./HomeShortCut";
import SystemInfo from "./SystemInfo";

const { width } = Dimensions.get("window");

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Carousel />
      <View style={styles.contentContainer}>
        <HomeShortCut style={styles.content} navigation={navigation}/>
      </View>
      <View style={styles.contentContainer}>
        <SystemInfo style={styles.content} />
      </View>
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
  contentContainer: {
    width: "100%",
    marginTop: 10,
    flex: 1,
  },
  content: {
    flex: 1,
    flexGrow: 1,
  },
});

export default HomePage;
