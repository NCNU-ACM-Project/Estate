import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { fonts, scalingFactors } from "../styles/fonts";

let { width } = Dimensions.get("window");

class NormalText extends Component {
  static displayName = "NormalText";
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Text style={[fonts.normal, scaled.normal, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const scaled = StyleSheet.create({
  normal: { fontSize: width * 1.0 / scalingFactors.normal }
});

export default NormalText;