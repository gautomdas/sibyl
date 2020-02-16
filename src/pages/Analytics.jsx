import React, { useState } from "react";

import { userDatasets } from "../services/DatasetService";
import DatasetTable from "../components/DatasetTable";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

function Analytics() {
  const { value: type, bind: bindType, reset: resetType } = useInput("");

  const {
    value: sentence,
    bind: bindSentence,
    reset: resetSentence
  } = useInput("");

  const [data, setData] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();

    fetch(`http://localhost:9000/${type}`, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: sentence
    })
      .then(res => res.text())
      .then(setData);
    resetType();
    resetSentence();
  };

  return (
    <div className="margin">
      <h1>Analytics</h1>
      {/* <h3>Recommended Datasets</h3> */}
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <input type="text" {...bindType} />
        </label>
        <label>
          Sentence:
          <input type="text" {...bindSentence} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <p>{data}</p>
    </div>
  );
}

export default Analytics;
