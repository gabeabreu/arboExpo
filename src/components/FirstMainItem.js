import React from "react";
import RenderItem from "./RenderItem.js";
import { StyleSheet, Text, ScrollView } from "react-native";

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
];

export default function FirstMainItem() {
  return (
    <ScrollView style={styles.listComponent}>
      <Text style={styles.listText}>Minha lista de interesses</Text>
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
