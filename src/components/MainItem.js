import React from "react";
import FirstMainItem from "./firstMainItem";
import SecondMainItem from "./SecondMainItem";

export default function MainItem(props) {
  if (props.showItem == 0) return <FirstMainItem />;
  else return <SecondMainItem />;
}
