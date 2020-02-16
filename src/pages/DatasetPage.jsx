import React from 'react';
import { Carousel, Icon, Tag } from 'antd';
import { getDataset } from '../services/DatasetService';

export default function DatasetPage({ match, dataset = getDataset(match.params.id) }) {
  return (
    <div className="margin">
      <h1>{dataset.name}</h1>
      <h3>{dataset.keywords && dataset.keywords.map(k => <Tag key={k}>{k}</Tag>)}</h3>
      <h3>
        <Icon type="medicine-box" /> &nbsp;
        {dataset.hospital}
      </h3>
      <Carousel autoplay>
        <div className="center">
          <img src="https://via.placeholder.com/750x150" alt="placeholder" />
        </div>
        <div className="center">
          <img src="https://via.placeholder.com/750x150" alt="placeholder" />
        </div>
        <div className="center">
          <img src="https://via.placeholder.com/750x150" alt="placeholder" />
        </div>
        <div className="center">
          <img src="https://via.placeholder.com/750x150" alt="placeholder" />
        </div>
      </Carousel>
      <h3>Description</h3>
      <p>{dataset.description}</p>
      <h3>Stats</h3>
      <h3>License</h3>
    </div>
  );
}
