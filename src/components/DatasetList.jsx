import { List, Skeleton } from "antd";

import Preview from "./Preview";
import React from "react";
import { list } from "../services/DatasetService";

export default function DatasetList() {
  return (
    <div>
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
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
    </div>
  );
}
