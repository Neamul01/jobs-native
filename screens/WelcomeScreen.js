import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>WelcomeScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
