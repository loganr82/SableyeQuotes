import React from "react";
import { StyleSheet, Text } from "react-native";

import { secondary } from "../utils/colors";

export default ({ children }) => {
  return <Text style={styles.text}> ( ͡° ͜ʖ ͡°)ᕤ</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});
