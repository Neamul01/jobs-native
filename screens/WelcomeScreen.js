import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  {
    text: "Welcome to JobApp",
    color: "#03a94f",
  },
  {
    text: "Welcome to JobApp, Slide to explore",
    color: "#009688",
  },
  {
    text: "Set Your Location, then swipe away",
    color: "#03a988",
  },
];

export default class WelcomeScreen extends Component {
  onSlideComplete = () => {
    this.props.navigation.navigate("Auth");
  };
  render() {
    return (
      <SafeAreaView>
        <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
