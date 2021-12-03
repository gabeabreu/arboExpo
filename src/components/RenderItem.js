import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default function RenderItem(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#fff",
    borderRadius: 3,
    marginHorizontal: 10,
    marginVertical: 5,
    height: 90,
    width: 70,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});