import React, {
    useState
} from "react";
import { List, Skeleton } from "antd";

import Preview from "./Preview";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";



import {
    AutoComplete,
    Button,
    Col,
    Icon,
    Row
} from "antd";

import DatasetList from "./DatasetList";
import {
    list
} from "../services/DatasetService";

export default function Discover() {
    //   const handleSubmit = e => {
    //     e.preventDefault();
    //   };

    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState(list);
    const onChange = (event, {
        newValue
    }) => setSearch(newValue);

    const getSuggestionName = (question) => question.short_title;


    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : list.filter(question =>
            question.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    const onSuggestionsFetchRequested = ({
        value
    }) => setSuggestions(getSuggestions(value));


    return (
      <> 
      <Autosuggest
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        suggestions={suggestions}
        inputProps={{
          placeholder:"Find a question:",
          value:search,
          onChange
        }}
        getSuggestionValue={getSuggestionName}
        alwaysRenderSuggestions={true}
        renderSuggestion={item => (
          <List.Item actions={[<a href="/">view</a>, <a href="/">save</a>]}>
            <Skeleton title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Preview url="https://via.placeholder.com/64" />
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              {/* <div>Hello world</div> */}
            </Skeleton>
          </List.Item>
        )}/>
      {search.length===0? <DatasetList list={list}/>: null}
      </>
    );
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
      <Autosuggest
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        suggestions={suggestions}
        inputProps={{
          placeholder:"Find a question:",
          value:search,
          onChange
        }}
        getSuggestionValue={getSuggestionName}
        renderSuggestion={
          item => (
          <List.Item actions={[<a href="/">view</a>, <a href="/">save</a>]}>
            <Skeleton title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Preview url="https://via.placeholder.com/64" />
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              {/* <div>Hello world</div> */}
            </Skeleton>
          </List.Item>
          )}
        />
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
