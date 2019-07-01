import React from 'react';
import {Route} from 'react-router-dom';
import App from '../containers/App';
import Login from '../containers/Login';


// Status
const Status = ({ code, children }) => {
  return (
    <Route render={({ statusContext }) => {
      if (statusContext) statusContext.status = code;
      return children;
    }} />
  )
}

// not found
const NotFound = () => {
  return (
    <Status code={404}>
      <div>哎呀，页面走丢了！</div>
    </Status>
  )
}

export default [
  {
    path: '/',
    component: App
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: 404,
    component: NotFound
  }
]