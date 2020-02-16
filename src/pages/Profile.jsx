import React from 'react';
import AccountUpdate from '../components/AccountUpdate';
import { connect } from 'react-redux';

function Profile({ user }) {
  return (
    <div className="margin">
      <h1>Profile</h1>
      <AccountUpdate user={user} />
    </div>
  );
}

const mapStateToProps = state => {
  // name = state.researcher.name.split(' ');
  return {
    user: {
      firstName: 'John',
      lastName: 'Woodcomb'
    }
    // user: {
    //   firstName:  ? '',
    //   lastName: state.researcher.name.split(' ')[0] ? '',
    //   ...state.researcher
    // }
  };
};
export default connect(mapStateToProps)(Profile);
