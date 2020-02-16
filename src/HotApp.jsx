import { hot } from "react-hot-loader/root";
import React from "react";
import AppRouter from "./router";

function HotApp(props) {
  return <AppRouter isWeb={props.isWeb} />;
}

export default hot(HotApp);
