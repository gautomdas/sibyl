import React from 'react';

import { getRecommendedOffers } from '../services/DatasetService';
import DatasetTable from '../components/DatasetTable';

function Dashboard() {
  return (
    <div className="margin">
      <h1>Dashboard</h1>
      <h3>Recommended Datasets</h3>
      <DatasetTable data={getRecommendedOffers()} />
    </div>
  );
}

export default Dashboard;
