import React from "react";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TodoItem() {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>lol</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
