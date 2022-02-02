import React from "react";
import FirstMainItem from "./FirstMainItem";
import SecondMainItem from "./SecondMainItem";

export default function MainItem(props) {
  if (props.showItem == 0) return <FirstMainItem />;
  else return <SecondMainItem />;
}
