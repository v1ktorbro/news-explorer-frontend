import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ Component, loggedIn }) {
  return (
    <Route>
      {
          () => (loggedIn ? Component : <Redirect to="/" />)
      }
    </Route>
  );
}

export default ProtectedRoute;
