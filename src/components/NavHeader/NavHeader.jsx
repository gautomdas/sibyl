import "./NavHeader.css";

import { Icon, Menu } from "antd";
import { Link } from "react-router-dom";

import ButtonLink from "../ButtonLink";
import React from "react";
import { connect } from "react-redux";
import { routes } from "../../router";

import logo from "../../logos/logo.png";

function NavHeader({ loggedIn }) {
  return (
    <div className="navHeader">
      <Link to="/">
        <div className="brand mr">
          {/* <img width={32} height={32} src={logo} alt={'logo'} /> */}
          <h1>Sibyl</h1>
        </div>
      </Link>

      <div className="menu">
        {loggedIn ? (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            style={{ lineHeight: "64px" }}
          >
            {/* Generate header items based on router config */}
            {Object.keys(routes).map(k => {
              const e = routes[k];
              return e.nav ? (
                <Menu.Item key={k}>
                  <Link to={e.url ? e.url : "/"}>{e.name}</Link>
                </Menu.Item>
              ) : null;
            })}
          </Menu>
        ) : null}
      </div>
      {!loggedIn ? (
        <div className="login">
          <ButtonLink className="mr" to={routes.login.url}>
            {routes.login.name}
          </ButtonLink>
          <ButtonLink type="primary" to={routes.signup.url}>
            {routes.signup.name}
          </ButtonLink>
          <ButtonLink
            to={routes.about.url}
            shape="circle"
            icon="question"
            style={{ marginLeft: "0.5rem" }}
          />
        </div>
      ) : (
        <div className="login">
          <ButtonLink to={routes.logout.url}>{routes.logout.name}</ButtonLink>
          <ButtonLink
            to={routes.profile.url}
            shape="circle"
            icon="user"
            style={{ marginLeft: "0.5rem" }}
          />
          <ButtonLink
            to={routes.about.url}
            shape="circle"
            icon="question"
            style={{ marginLeft: "0.5rem" }}
          />
        </div>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return { loggedIn: state.user ? state.user.loggedIn : false };
};
export default connect(mapStateToProps)(NavHeader);
