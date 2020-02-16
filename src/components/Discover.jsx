import { AutoComplete, Button, Col, Icon, Row } from "antd";

import DatasetList from "./DatasetList";
import React from "react";
import { list } from "../services/DatasetService";

export default function Discover() {
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //   };

  return (
    <div className="margin">
      <h1>Discover</h1>
      {/* <p>Start finding some data.</p> */}

      <Row>
        <Col span={24} className="flex">
          <AutoComplete
            dataSource={list.map(i => i.name)}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Search for data"
            className="grow"
            style={{ marginRight: "1rem" }}
          />
          <Button type="primary">Search</Button>
          {/* <Form onSubmit={handleSubmit} layout="inline" col={{ span: 24 }}>
            <Form.Item
              wrapperCol={
                {
                  // xs: { span: 12, offset: 5 }
                  // sm: { span: 12 }
                }
              }
            >
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form> */}
        </Col>
        {/* <Col span={12}>col-12</Col> */}
      </Row>
      <Row gutter={40} style={{ marginTop: "1rem" }}>
        <Col span={12}>
          <h3>Top Datasets</h3>
          <DatasetList />
        </Col>
        <Col span={12}>
          <h3>Featured</h3>
          <DatasetList />
        </Col>
      </Row>
    </div>
  );
}
