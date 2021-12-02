import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "../components/Carousel";
import TopMenu from "../components/TopMenu.js";
import FirstMainItem from "../components/firstMainItem";
import carouselData from "../assets/data/carouselData";
import SelectButtons from "../components/selectButtons";
import Lists from "../components/Lists";

export default function Home() {
  return (
    <View style={styles.mainView}>
      <TopMenu />
      <Carousel data={carouselData} />
      <SelectButtons />
      <Lists />
      <FirstMainItem />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
