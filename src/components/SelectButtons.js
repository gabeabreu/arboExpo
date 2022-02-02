import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "./CustomButton";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

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
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    height: 20,
    width: windowWidth,
    height: windowHeight * 0.2,
  },
  column: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#43AB6D",
    borderRadius: 10,
    width: 170,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
