import React, { Component } from "react";

import { Redirect } from "react-router-dom";

export default function Redirectable(WrappedComponent) {
  return class extends Component {
    state = {
      to: ""
    };

    redirect = to => {
      this.setState({ to: to });
    };

    render() {
      if (this.state.to !== "") {
        return <Redirect to={this.state.to} />;
      }
      return (
        <WrappedComponent {...this.props} redirect={r => this.redirect(r)} />
      );
    }
  };
}
