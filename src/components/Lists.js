import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

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
      ></TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          toggle(1);
        }}
        style={[styles.right, { backgroundColor: list2 }]}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    width: "50%",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  right: {
    width: "50%",
    backgroundColor: "",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
});
