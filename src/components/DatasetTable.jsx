import React from 'react';

import { Table, Tag } from 'antd';
// import Preview from '../components/Preview';
import Redirectable from './Redirectable';
import CategoryTag from './CategoryTag';

function DatasetTable({ data, redirect }) {
  const columns = [
    {
      title: 'Hospital',
      dataIndex: 'hospital',
      key: 'hospital'
    },
    {
      title: 'Dataset Name',
      dataIndex: 'name',
      key: 'name'
      // render: (text, record) => <a href={'/datasets/' + record.id}>{text}</a>
    },
    {
      title: 'Categories',
      dataIndex: 'categories',
      key: 'categories',
      render: categories => (
        <span>
          {categories.map(c => {
            return <CategoryTag key={c} category={c} />;
          })}
        </span>
      )
    }
  ];
  return (
    <Table
      dataSource={data}
      columns={columns}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            redirect('/datasets/' + record.id);
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
