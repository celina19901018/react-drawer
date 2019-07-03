import React from 'react';
import { combineReducers } from 'redux';
import { connect } from 'react-redux';

import { loginAction } from './action';
import './style.scss';

class Login extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();
    this.props.login({
      username: 'zhangsan',
      password: '123456'
    })
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

const mapStateToProps = (state) => state.loginReducer;
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(loginAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)