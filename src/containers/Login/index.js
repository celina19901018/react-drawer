import React from 'react';
import './style.less';

class Login extends React.Component {
  render() {
    return(
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
        <button>登陆</button>
      </form>
    )
  }
}

export default Login