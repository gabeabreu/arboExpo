import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function TopMenu() {
  return (
    <View style={styles.TopMenu}>
      <TouchableOpacity>
        <Ionicons name="menu-outline" size={40} style={styles.icon}></Ionicons>
      </TouchableOpacity>
      <Text style={styles.title}>ARBO</Text>
      <TouchableOpacity>
        <Ionicons
          name="search-outline"
          size={35}
          style={styles.icon}
        ></Ionicons>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TopMenu: {
    backgroundColor: "#43AB6D",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
    width: windowWidth,
    height: 45,
  },
  icon: {
    marginHorizontal: 10,
    color: "#fff",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    color: "#fff",
  },
});
