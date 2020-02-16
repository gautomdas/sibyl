import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { sendPasswordResetEmail } from '../services/LoginService';

export default function DevPage() {
  const [email, setEmail] = useState('');
  function changePassword() {
    console.log('====================================');
    console.log('Resetting: ' + email);
    console.log('====================================');
    sendPasswordResetEmail(email)
      .then(r => {
        console.log(r);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="margin">
      <Input type={email} value={email} onChange={e => setEmail(e.target.value)} />
      <Button onClick={changePassword}>Change Password</Button>
    </div>
  );
}
