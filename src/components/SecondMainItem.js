import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import RenderItem from "./RenderItem";

const lista = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

export default function SecondMainItem() {
  return (
    <ScrollView style={styles.listComponent}>
      <Text style={styles.listText}>Assistidos por último</Text>
      <RenderItem data={lista} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listComponent: {
    flex: 0.1,
    backgroundColor: "#43AB6D",
    height: 40,
  },
  listText: {
    color: "#fff",
    fontSize: 15,
  },
});
