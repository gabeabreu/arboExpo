import React from "react";
import { StyleSheet, View } from "react-native";

export default function Lists() {
  return (
    <View style={styles.main}>
      <View style={styles.left}></View>
      <View style={styles.right}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    backgroundColor: "#43AB6D",
    width: "50%",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  right: {
    backgroundColor: "white",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
});
