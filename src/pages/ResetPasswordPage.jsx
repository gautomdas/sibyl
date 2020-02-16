import React, { useState } from 'react';
// import { confirmUser } from '../services/LoginService';
import { confirmUser } from '../redux/user/actions';
import { connect } from 'react-redux';
import { message, Input, Button } from 'antd';
import Redirectable from '../components/Redirectable';
import { routes } from '../router';
import { resetPassword } from '../services/LoginService';

function ConfirmEmailPage({ location, confirmUser, confirmed, redirect, error }) {
  let params = new URLSearchParams(location.search);

  const token = params.get('token');
  const tokenId = params.get('tokenId');
  const [NewPassword, setNewPassword] = useState('');

  if (confirmed) {
    message.success('Successfully reset password');
    redirect(routes.login.url);
  }
  if (error) {
    message.error('Error: ' + error.message);
  }
  function reset() {
    if (token && tokenId && error == undefined) {
      const r = { token, tokenId, newPassword: NewPassword };
      console.log(r);

      resetPassword(r);
    } else {
      message.error('Whoops! Could not reset password');
    }
  }
  return (
    <div className="margin">
      <h1>Reset Password</h1>
      <p>Reset password for your account below</p>
      <Input
        type="password"
        value={NewPassword}
        onChange={e => {
          setNewPassword(e.target.value);
        }}
      />
      <Button onClick={reset}>Submit</Button>
    </div>
  );
}

export default Redirectable(
  connect(
    state => ({
      confirmed: state.user ? state.user.confirmed : false,
      error: state.user ? state.user.error : null
    }),
    { confirmUser }
  )(ConfirmEmailPage)
);
