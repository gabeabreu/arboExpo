import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login.js";
import OnBoarding from "./src/screens/OnBoarding.js";
import Home from "./src/screens/Home.js";

export default function App() {
  var logged = true;
  var firstTime = false;

  function changeLogin() {
    logged = !logged;
  }

  function changeFirstTime() {
    firstTime = !firstTime;
  }

  if (logged == false) return <Login />;
  else {
    if (firstTime == true) return <OnBoarding />;
    else return <Home />;
  }
}
