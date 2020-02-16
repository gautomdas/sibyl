import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Discover from "./components/Discover.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage/";
import Page from "./components/Page";
import React from "react";
import SignOut from "./pages/SignOut";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyData from "./pages/MyData.jsx";
import DatasetPage from "./pages/DatasetPage.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import ConfirmEmailPage from "./pages/ConfirmEmailPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import DevPage from "./pages/DevPage.jsx";

export const routes = {
  home: {
    name: "Home",
    url: "/",
    component: SplashPage,
    exact: true,
    splash: true,
    footer: true
  },
  login: {
    name: "Sign In",
    url: "/signin",
    component: LoginPage
  },
  signup: {
    name: "Sign Up",
    url: "/signup",
    component: SignUpPage
  },
  dashboard: {
    name: "Dashboard",
    url: "/dashboard",
    component: Dashboard,
    secure: true,
    nav: true
  },
  discover: {
    name: "Discover",
    url: "/discover",
    component: Discover,
    secure: true,
    nav: true
  },
  myData: {
    name: "My Data",
    url: "/myData",
    component: MyData,
    secure: true,
    nav: true
  },
  dataset: {
    name: "Dataset Viewer",
    url: "/datasets/:id",
    component: DatasetPage
    secure: true
  },
  profile: {
    name: "Profile",
    url: "/profile",
    component: Profile,
    secure: true,
    footer: true
  },
  logout: {
    name: "Sign Out",
    url: "/signout",
    component: SignOut
  },
  about: {
    name: "About",
    url: "/about",
    component: About,
    footer: true
  },
  confirmEmail: {
    name: "Confirm Email",
    url: "/emailConfirmed",
    component: ConfirmEmailPage
  },
  resetPassword: {
    name: "Reset Password",
    url: "/reset-password",
    component: ResetPasswordPage
  },
  devPage: {
    name: "Dev Page",
    url: "/dev",
    component: DevPage
  }
};

export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        <div>
          {Object.keys(routes).map((key, i) => (
            <Route
              key={i}
              exact={routes[key].exact}
              path={routes[key].url}
              component={Page(
                routes[key].component,
                routes[key].secure,
                routes[key].splash,
                props.isWeb
              )}
            />
          ))}
        </div>
        )}
      </Switch>
    </Router>
  );
}
