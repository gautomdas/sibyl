import React ,{ useState }from 'react';

import { Table, Tag } from 'antd';
// import Preview from '../components/Preview';
import Redirectable from './Redirectable';
import CategoryTag from './CategoryTag';

const CAN_REDIRECT=false;
function DatasetTable({ data, redirect }) {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question'
      // render: (text, record) => <a href={'/datasets/' + record.id}>{text}</a>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'q_status',
      render: status => (
            <CategoryTag key={status} category={status} />
      )
    }
  ];
  console.log(data);
  return (
    <Table
      dataSource={data}
      columns={columns}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            if(CAN_REDIRECT)redirect('/questions/' + record.id);
          }, // click row
          onDoubleClick: event => {}, // double click row
          onContextMenu: event => {}, // right button click row
          onMouseEnter: event => {}, // mouse enter row
          onMouseLeave: event => {} // mouse leave row
        };
      }}
    />
  );
}

export default Redirectable(DatasetTable);
