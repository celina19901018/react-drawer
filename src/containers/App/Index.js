import React from 'react';
import { Router, Route } from 'react-router-dom';
import App from './App';
import Login from '../Login';

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

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route component={NotFound} />
    </Router>
  )
}

export default AppRouter;
