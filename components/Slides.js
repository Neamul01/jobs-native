import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";
import React, { Component } from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide) => {
      return (
        <View
          style={[
            styles.slide,
            {
              backgroundColor: slide.color,
            },
          ]}
          key={slide.text}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ height: "100%" }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: SCREEN_WIDTH,
  },
  slideText: {
    fontSize: 30,
    color: "white",
  },
});
