import React from 'react';
import { Tag } from 'antd';

export default function CategoryTag({ category }) {
  let color = 'red';
  color =
    {
      proteins: 'magenta',
      viruses: 'red',
      genes: 'volcano',
      genomics: 'orange',
      mris: 'gold',
      'ct scans': 'lime',
      dtis: 'green',
      csv: 'cyan',
      'time-series': 'blue',
      parkinsons: 'geekblue',
      alzheimers: 'purple',
      autism: 'magenta'
    }[category] || color;

  return (
    <Tag color={color} key={category}>
      {category.toUpperCase()}
    </Tag>
  );
}
