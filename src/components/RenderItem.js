import React from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

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
    marginHorizontal: 5,
    marginVertical: 5,
    height: windowHeight * 0.13,
    width: windowWidth * 0.22,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
