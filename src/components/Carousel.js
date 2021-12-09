import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from "react-native";
const carouselData = require("../data/carouselData");
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

function Slide({ data }) {
  return (
    <View
      style={{
        width: windowWidth,
        justifyContent: "start",
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
      style={{ height: "10%" }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
