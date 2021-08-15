import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";

import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "../../utils/animations";

const SLIDER_WIDTH = Dimensions.get("window").width  - 20;
const SLIDER_HEIGHT = Dimensions.get("window").height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT / 5);

export default class App extends Component {
  state = {
    index: 0,
    entries: [0,1,2,3,4,5,6,7,8,9],
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
      </View>
    );
  }

  render() {
    return (
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
    height: ITEM_HEIGHT,
    flexGrow: 0
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    borderRadius: 10,

  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
