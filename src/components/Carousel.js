import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from "react-native";
const carouselData = require("../data/carousel.json");
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

function Slide({ data }) {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: data.url }}
        style={{ width: windowWidth * 0.2, height: windowHeight * 0.2 }}
      ></Image>
      <Text style={{ fontSize: 20 }}>{data.title}</Text>
      <Text style={{ fontSize: 15 }}>{data.text}</Text>
    </View>
  );
}

export default function Carousel() {
  return (
    <FlatList
      data={carouselData}
      style={{ flex: 0.7 }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
