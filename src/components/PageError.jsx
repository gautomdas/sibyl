import React from 'react';
import { Link } from 'react-router-dom';
export default function PageError() {
  return (
    <div className="margin">
      <h1>Oops! Something went wrong</h1>
      <p>
        We'll try our best to fix this error. Please let us know if you think we're doing something
        wrong.
      </p>
      <p>
        In the meantime, if you want to go back home, click <Link to="/">here</Link>.
      </p>
    </div>
  );
}
