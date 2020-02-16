import NotLoggedInPage from "./NotLoggedInPage";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.user ? state.user.loggedIn : false
  };
};

const SecurePage = connect(mapStateToProps)(NotLoggedInPage);

export default SecurePage;
