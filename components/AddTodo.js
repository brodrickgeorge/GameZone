import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

export default function AddTodo({handleSubmit}) {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={handleChange}
        placeholder="Add Todo..."
        style={styles.input}
      />
      <Button
        onPress={() => handleSubmit(text)}
        title="Add Todo"
        color="coral"
      />
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
