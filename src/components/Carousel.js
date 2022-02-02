import React from "react";
import {
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        maxHeight: windowHeight * 0.25,
        margin: 0,
      }}
    >
      <ImageBackground
        source={{ uri: data.url }}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.25,
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "#505050aa",
            borderRadius: 8,
            marginBottom: 9,
            marginLeft: 10,
            padding: 5,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>
            {data.title}
          </Text>
          <Text style={{ color: "#fff", fontSize: 12 }}>{data.text}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default function Carousel() {
  return (
    <FlatList
      data={carouselData}
      style={{ maxHeight: windowHeight * 0.25 }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
