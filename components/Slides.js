import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";
import React, { Component } from "react";
import { Button } from "@rneui/themed";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          buttonStyle={styles.buttonStyle}
          title={"Onwards"}
          raised
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, i) => {
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
          {this.renderLastSlide(i)}
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
  buttonStyle: {
    backgroundColor: "#0288D1",
  },
});
