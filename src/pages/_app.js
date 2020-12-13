import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/globals.scss';
import { useRedux } from '../store/store';

/* eslint-disable react/jsx-props-no-spreading */

function MyApp({ Component, pageProps }) {
  const store = useRedux(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

MyApp.defaultProps = {
  pageProps: {},
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
