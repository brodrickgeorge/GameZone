import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Brodrick", id: "1" },
    { name: "Cynthia", id: "2" },
    { name: "Jarod", id: "3" },
    { name: "Derrick", id: "4" },
    { name: "Ryan", id: "5" },
    { name: "Nicole", id: "6" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person) => (
          <View key={person.id}>
            <Text style={styles.personName}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  personName: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
