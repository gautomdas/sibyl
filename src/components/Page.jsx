import PageLayout from './PageLayout';
// import PropTypes from "prop-types";
import React from 'react';
import SecurePage from './SecurePage';
import SplashPage from '../pages/SplashPage/SplashPage';

export default (WrappedComponent, securePage = false, splashPage = false, isWeb) => {
  const hocComponent = ({ ...props }) => (
    <PageLayout isSplash={splashPage} isWeb={isWeb}>
      {securePage ? (
        <SecurePage>
          <WrappedComponent {...props} />
        </SecurePage>
      ) : (
        <WrappedComponent {...props} />
      )}
    </PageLayout>
  );

  hocComponent.propTypes = {};

  return hocComponent;
};
