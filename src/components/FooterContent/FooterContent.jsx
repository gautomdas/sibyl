import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./FooterContent.css";
import { routes } from "../../router";

export default function PageLayout() {
  return (
    <div className="footer">
      <Row type="flex" justify="space-around" align="middle">
        <Col style={{ textAlign: "left" }} span={8}>
          <h3 className="headerfooter">Pages</h3>
          {Object.keys(routes).map(k => {
            const e = routes[k];
            return e.footer ? (
              <div key={k}>
                <Link className="textvals" to={e.url ? e.url : "/"}>
                  {e.name}
                </Link>
                <br />
              </div>
            ) : null;
          })}
        </Col>
        <Col style={{ textAlign: "center" }} span={8}>
          &copy; Sibyl {new Date().getFullYear()}
        </Col>
        <Col span={8} />
      </Row>
    </div>
  );
}
