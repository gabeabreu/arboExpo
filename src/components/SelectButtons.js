import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

export default function SelectButtons() {
  return (
    <View style={styles.main}>
      <View style={styles.column}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dengue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Chikungunya</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.column}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Zika</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Arboviroses</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    justifyContent: "space-evenly",
    height: "20%",
    marginTop: "0%",
  },
  column: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#43AB6D",
    borderRadius: 10,
    width: "40%",
    height: "150%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: 500,
  },
});
