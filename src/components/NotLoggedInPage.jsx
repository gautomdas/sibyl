import { Link } from 'react-router-dom';
import React from 'react';

export default function NotLoggedInPage({ loggedIn, children }) {
  return !loggedIn ? (
    <div className="margin">
      <h1>Oops</h1>
      <p>You are not logged in.</p>
      <p>
        Maybe you should go back <Link to="/">home</Link>.
      </p>
    </div>
  ) : React.Children.count(children) ? (
    children
  ) : (
    <h1>Error</h1>
  );
}
