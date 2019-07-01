import React from 'react';
import { Router, Route } from 'react-router-dom';
import routers from '../config/route';


const RouterRefactor = ({history}) => {
  const getRouters = (props) => {
    const _router = routers.filter(item => props.location.pathname === item.path);
    const Component = _router.length > 0
      ? _router[0].component
      : () => (
        <div className="empty-component">{null}</div>
      );
    return (
      <Route
        location={props.location}
        key={props.location.pathname}
        path={props.path}
        component={Component} />
    )
  }
  return (
    <Router history={history}>
      <Route component={getRouters} />
    </Router>
  )
}

export default RouterRefactor;
