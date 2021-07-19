import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Brodrick", id: "1" },
    { name: "Cynthia", id: "2" },
    { name: "Jarod", id: "3" },
    { name: "Derrick", id: "4" },
    { name: "Ryan", id: "5" },
    { name: "Nicole", id: "6" },
    { name: "Brenden", id: "7" },
    { name: "Bradley", id: "8" },
    { name: "Duan", id: "9" },
    { name: "Jennifer", id: "10" },
  ]);

  const handlePress = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <Text style={styles.personName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

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
    marginTop: 24,
    marginHorizontal: 10,
  },
});
