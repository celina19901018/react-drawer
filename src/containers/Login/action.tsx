import request from '../../utils/request';
import { loginInApi } from '../../utils/api';
import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './constant';

// 开始登陆
export const loginStart = () => {
  return {
    type: LOGIN_INIT
  }
}

// 登陆成功
export const loginSuccess = (data?: object) => {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

// 登陆失败
export const loginFailure = (error?: string) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export const loginAction = (params?: object) => (dispatch: any, getState: any) => {
  dispatch(loginStart());
  let _promise = request('get', loginInApi, params);
  _promise.then(res => {
    if (res.resultCode === '000000') {
      dispatch(loginSuccess(res.body))
    } else {
      dispatch(loginFailure(res.message))
    }
  }).catch(err => {
    dispatch(loginFailure(err))
  });
  return _promise;
}