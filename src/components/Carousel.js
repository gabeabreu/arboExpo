import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ImageBackground,
} from "react-native";
const carouselData = require("../data/carouselData");
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

function Slide({ data }) {
  return (
    <View
      style={{
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={{ uri: data.url }}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.4,
          alignItems: "start",
          justifyContent: "end",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            borderRadius: 8,
            marginBottom: 35,
            marginLeft: 3,
            padding: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: 600 }}>
            {data.title}
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>{data.text}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default function Carousel() {
  return (
    <FlatList
      data={carouselData}
      style={{ height: "1%" }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
