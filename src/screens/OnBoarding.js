import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import CustomButton from "../components/CustomButton";

const slides = [
  {
    key: "1",
    title: "exemplo de título",
    text: "exemplo de texto",
  },
  {
    key: "2",
    title: "mais um exemplo de título",
    text: "outro exemplo de texto",
  },
];

export default function OnBoarding() {
  function renderNext() {
    return (
      <View>
        <CustomButton
          text="Próximo"
          backgroundColor="#ffffff"
          color="#00AC6A"
        />
      </View>
    );
  }

  function renderDone() {
    return (
      <View>
        <CustomButton
          text="Começar"
          backgroundColor="#ffffff"
          color="#00AC6A"
        />
      </View>
    );
  }

  function RenderSlides({ item }) {
    return (
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <AppIntroSlider
        renderItem={RenderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: "#ffffff",
          width: 30,
        }}
        renderNextButton={renderNext}
        renderDoneButton={renderDone}
        bottomButton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 70,
    marginHorizontal: 25,
    paddingTop: 80,
    paddingHorizontal: "5%",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    borderRadius: 15,
    height: "75%",
  },

  title: {
    fontSize: 20,
  },

  main: {
    flex: 1,
    backgroundColor: "#00AC6A",
  },
});
