import React from 'react';
import { combineReducers, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { loginAction } from './action';
import { loginApi } from '../../utils/api'
import './style.scss';

export interface Props {
  login: Function
}

class Login extends React.Component<Props, object> {
  submitHandler = (e: any) => {
    e.preventDefault();
    // this.props.login();
    fetch('/api/user')
      .then(res => res.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <form className="login-wrap">
        <label htmlFor="username">
          <input
            id="username"
            placeholder="请输入用户姓名"
            type="text" />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            placeholder="请输入登陆密码"
            type="password" />
        </label>
        <button onClick={this.submitHandler}>登陆</button>
      </form>
    )
  }
}

const mapStateToProps = (state: { loginReducer: object; }) => state.loginReducer;
const mapDispatchToProps = (dispatch: any) => {
  return {
    login: () => dispatch(loginAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
