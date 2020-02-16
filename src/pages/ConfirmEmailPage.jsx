import React from 'react';
// import { confirmUser } from '../services/LoginService';
import { confirmUser, clearUserErrors } from '../redux/user/actions';
import { connect } from 'react-redux';
import { message } from 'antd';
import Redirectable from '../components/Redirectable';
import { routes } from '../router';

function ConfirmEmailPage({ location, confirmUser, confirmed, redirect, error, clearUserErrors }) {
  let params = new URLSearchParams(location.search);

  const token = params.get('token');
  const tokenId = params.get('tokenId');

  if (confirmed) {
    message.success('Successfully confirmed email');
    redirect(routes.login.url);
  } else if (token && tokenId && error == undefined) {
    confirmUser(token, tokenId);
  } else if (error) {
    message.error('Error: ' + error.message);
    clearUserErrors();
  } else {
    message.error('Whoops! Could not confirm email');
  }
  return (
    <div className="margin">
      <h1>Confirming Email ...</h1>
    </div>
  );
}

export default Redirectable(
  connect(
    state => ({
      confirmed: state.user ? state.user.confirmed : false,
      error: state.user ? state.user.error : null
    }),
    { confirmUser, clearUserErrors }
  )(ConfirmEmailPage)
);
