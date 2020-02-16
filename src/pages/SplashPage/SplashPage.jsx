import "./SplashPage.css";
import { Card } from "antd";

//import Logo from '../../components/Logo';
import React from "react";

import logo from "../../logos/logo.png";

export default function SplashPage() {
  return (
    <div className="splash" style={{ background: "#fff" }}>
      <div className="margin">
        <div className="main">
          <div className="description" style={{ paddingLeft: 60 }}>
            <div className="title">Sibyl</div>
            <p>
              Sheryl is a unique smart-escrow solution for secure peer to peer
              transactions of healthcare data.
            </p>
          </div>
        </div>
      </div>
      <div className="more">
        <p>More Splash Page Content</p>
      </div>
    </div>
  );
}
