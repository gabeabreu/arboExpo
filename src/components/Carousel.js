import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import carouselData from "../data/carouselData";

export default function Carousel(props) {
  function renderItem({ item }) {
    return (
      <View style={styles.slider}>
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  return (
    <View style={styles.component}>
      <AppIntroSlider
        renderItem={renderItem}
        data={carouselData}
        showNextButton={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 0.7,
    backgroundColor: "#fff",
  },
  slider: {
    backgroundColor: "#000",
    height: "10%",
    width: "10%",
  },
});
