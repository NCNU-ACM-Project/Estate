import React from "react";
import { View, StyleSheet, Card } from "react-native";
import SmallText from "../SmallText";

const SystemInfoEntry = ({ systemInfo }) => {
  const FormatDate = (date) => {
    const today = new Date(date);
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    return { year, month, day };
  };

  return (
    <View style={styles.outerContaner}>
      {systemInfo.map((item, idx) => {
        const { date, content } = item;
        const today = FormatDate(date);
        return (
          <View key={idx} style={styles.container}>
            <SmallText style={styles.dateContent}>
              {`${today.month} 月${today.day} 日${today.year} 年`}
            </SmallText>
            <View style={styles.verticleLine} />
            <SmallText style={styles.dataContent}>{content}</SmallText>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContaner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  verticleLine: {
    display: "flex",
    alignSelf: "stretch",
    margin: 3,
    width: 1,
    backgroundColor: "#000",
  },
  dateContent: {
    flex: 2,
  },
  dataContent: {
    flex: 9,
  },
});

export default SystemInfoEntry;
