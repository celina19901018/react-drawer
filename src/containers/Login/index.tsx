import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginAction } from './action';
import './style.scss';


export interface Props {
  login: Function
}

class Login extends React.Component<Props, object> {
  submitHandler = (e: any) => {
    e.preventDefault();
    this.props.login({
      username: 'zhangsan',
      password: '123456'
    });
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
    login: bindActionCreators(loginAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
