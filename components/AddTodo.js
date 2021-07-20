import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={handleChange}
      />
      <Button
        onPress={() => handleSubmit(text)}
        title="Add Todo"
        color="coral"
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
