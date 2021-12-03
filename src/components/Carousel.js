import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const imageW = width * 0.7;
const imageH = height * 1.54;

export default function Carousel(props) {
  return (
    <View style={styles.component}>
      <FlatList
        data={props.data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={{ uri: img }}
                style={{
                  width: imageW,
                  height: imageH,
                  resizeMode: "cover",
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 0.7,
    backgroundColor: "#000",
  },
});
