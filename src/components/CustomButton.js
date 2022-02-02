import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({ text, backgroundColor, color, width }) {
  return (
    <TouchableOpacity
      style={[
        (styles.width = { width }),
        styles.button,
        (styles.backgroundColor = { backgroundColor }),
      ]}
    >
      <Text style={[styles.buttonText, (styles.color = { color })]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 23,
    textAlign: "center",
  },
});
