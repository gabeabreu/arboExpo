import React from "react";
import { View, StyleSheet } from "react-native";

export default function TopMenu() {
  return <View style={styles.TopMenu}></View>;
}

const styles = StyleSheet.create({
  TopMenu: {
    backgroundColor: "#43AB6D",
    flex: 0.07,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
