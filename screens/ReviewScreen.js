import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class ReviewScreen extends Component {
  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}
ReviewScreen.navigationOptions = {
  title: "Review Jobs",
};

const styles = StyleSheet.create({});
