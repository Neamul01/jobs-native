import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default class AuthScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>AuthScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
