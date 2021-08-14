import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import plate from '../styles/plate';

const width = Dimensions.get('window').width;

const Title = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: plate.lightOrange,
  },
  headerContainer:{
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  }
});

export default Title;
