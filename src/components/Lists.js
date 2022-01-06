import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Lists(props) {
  const [list1, setList1] = useState("#43AB6D");
  const [list2, setList2] = useState("#fff");

  var button1 = 1;
  var button2 = 0;

  function toggle(click) {
    if (click == 0) {
      button1 = 1;
      button2 = 0;
      setList1("#43AB6D");
      setList2("#fff");
      props.list(0);
    } else {
      button1 = 0;
      button2 = 1;
      setList2("#43AB6D");
      setList1("#fff");
      props.list(1);
    }
  }

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          toggle(0);
        }}
        style={[styles.left, { backgroundColor: list1 }]}
      >
        <Icon name="list-alt" size={20} color={list2}></Icon>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          toggle(1);
        }}
        style={[styles.right, { backgroundColor: list2 }]}
      >
        <Icon name="play-circle" size={20} color={list1}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "6.5%",
  },
  left: {
    width: "50%",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  right: {
    width: "50%",
    backgroundColor: "",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
