import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const user = useSelector(state => state.auth.user);

  if (!user && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (user && !isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
