import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";

import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "../../utils/animations";

const SLIDER_WIDTH = Dimensions.get("window").width - 20;
const SLIDER_HEIGHT = Dimensions.get("window").height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT / 5);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      entries: [
        {
          owner: "某某",
          image: require("../../../assets/types-of-homes-hero.jpg"),
        },
        {
          owner: "某某",
          image: require("../../../assets/types-of-homes-hero.jpg"),
        },
      ],
    };
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} resizeMode="cover" style={styles.image} />
        <Text style={styles.itemLabel}>{`${item.owner}`}</Text>
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
    flexGrow: 0,
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
    position: 'absolute',
    textAlign: "left",
    width: "100%",
    color: "#000",
    fontSize: 24,
    bottom: 0,
    backgroundColor: "#c4c4c4",
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: "rgba(196, 196, 196, 0.7)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
