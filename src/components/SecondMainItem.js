import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import RenderItem from "./RenderItem";

const interesses = [
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
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];
const dengue = [
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
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];
const zica = [
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
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];
const chiku = [
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
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];

export default function SecondMainItem() {
  return (
    <ScrollView style={styles.listComponent}>
      <Text style={styles.listText}>lista</Text>
      <RenderItem data={interesses} />
      <Text style={styles.listText}>Relacionados à dengue</Text>
      <RenderItem data={dengue} />
      <Text style={styles.listText}>Relacionados à zica</Text>
      <RenderItem data={zica} />
      <Text style={styles.listText}>Relacionados à chikungunya</Text>
      <RenderItem data={chiku} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listComponent: {
    backgroundColor: "#43AB6D",
    height: 40,
  },
  listText: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 7,
  },
});
