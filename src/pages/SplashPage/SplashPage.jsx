import "./SplashPage.css";
import { Card } from "antd";
import logo from "../../logos/logo.png";
import { Box, Text, Flex } from "@chakra-ui/core";
//import Logo from '../../components/Logo';
import React from "react";

export default function SplashPage() {
  return (
    <div className="splash" style={{ background: "#fff" }}>
      <div className="margin">
        <div className="main">
          <div className="description">
            <div style={{ margin: "auto" }}>
              <img src={logo} width="500px" />
              <div className="title" style={{ textAlign: "center" }}>
                Sibyl
              </div>
            </div>

            <p>
              Sibyl is our idea for the future of large scale analytics and
              forecasting. Based on the New York Times Best Seller,{" "}
              <i>Superforecasting</i> by Gardner and Tetlock, our platform
              allows anyone who considers their expertise applicable. We collect
              this data of individuals to also feed into our own models in order
              to understand the tactics superforecasters use themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
