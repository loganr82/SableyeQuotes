import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { primary } from "../utils/colors.js";
import { quoteList } from "../utils/quotes.js";

const Main = () => {
  const [quotes, setQuotes] = useState();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.pictures}
        source={require("../assets/Sableye.gif")}
      />
      <Text style={styles.invisibleText}></Text>
      <TouchableHighlight
        onPress={() => {
          setQuotes(quoteList[Math.floor(Math.random() * quoteList.length)]);
        }}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Get Your Sableye Quote!</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.text}>{`Sableye says:`}</Text>
      <Text style={styles.grayText}>{quotes}</Text>

      <Text style={styles.quote}>Logan Technologies™</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  pictures: {
    width: 200,
    height: 200,
    padding: 100,
  },
  quote: {
    position: "absolute",
    bottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 35,
    paddingBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 1,
    color: "white",
  },
  button: {
    textAlign: "center",
    width: 250,
    height: 70,
    alignItems: "center",
    backgroundColor: "black",
    padding: 25,
    opacity: 1,
  },
  invisibleText: {
    color: primary,
    padding: 20,
  },
  grayText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Main;
