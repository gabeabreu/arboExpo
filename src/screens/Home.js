import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Carousel from "../components/Carousel";
import TopMenu from "../components/TopMenu.js";
import FirstMainItem from "../components/FirstMainItem";
import SelectButtons from "../components/SelectButtons";
import SecondMainItem from "../components/SecondMainItem";
import Lists from "../components/Lists";
import MainItem from "../components/MainItem";

export default function Home() {
  const [listSwitch, setListSwitch] = useState(0);

  function listHandle(index) {
    setListSwitch(index);
    console.log(index);
  }
  return (
    <View style={styles.mainView}>
      <StatusBar />
      <TopMenu />
      <Carousel />
      <SelectButtons />
      <Lists onChange list={listHandle} />
      <MainItem showItem={listSwitch} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
