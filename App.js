import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Brodrick");
  const [age, setAge] = useState(23);

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        onChangeText={(val) => setName(val)}
        placeholder="e.g. John Doe"
        style={styles.input}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="e.g. 99"
        style={styles.input}
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        name: {name}, age: {age}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
