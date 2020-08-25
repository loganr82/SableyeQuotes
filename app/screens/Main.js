import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your code!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
