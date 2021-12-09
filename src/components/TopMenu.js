import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Icon } from "react-native-elements";

export default function TopMenu() {
  return (
    <View style={styles.TopMenu}>
      <Icon name="menu" color="white" />
      <Text style={styles.title}>ARBO</Text>
      <Icon name="search" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  TopMenu: {
    backgroundColor: "#43AB6D",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
});
