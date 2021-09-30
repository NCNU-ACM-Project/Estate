import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import ShortCut from "./ShortCut";
import Info from "./Info";
const { width } = Dimensions.get("window");

const MembershipCenter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Info />
        </View>
        <View style={styles.contentContainer}>
          <ShortCut style={styles.content} navigation={navigation} />
        </View>
      </ScrollView>
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

export default MembershipCenter;