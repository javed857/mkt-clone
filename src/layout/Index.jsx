import React from 'react';
import Header from './header';
// import Footer from './footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

Layout.defaultProps = {
  children: {},
};

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

export default Layout;
