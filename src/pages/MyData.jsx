import React from 'react';

import { userDatasets } from '../services/DatasetService';
import DatasetTable from '../components/DatasetTable';

function MyData() {
  return (
    <div className="margin">
      <h1>My Data</h1>
      {/* <h3>Recommended Datasets</h3> */}
      <DatasetTable data={userDatasets} />
    </div>
  );
}

export default MyData;
