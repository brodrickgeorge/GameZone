import React from "react";

import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function Sandbox() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 10,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 10,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 10,
  },
});
