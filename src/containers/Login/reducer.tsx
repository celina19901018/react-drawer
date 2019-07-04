import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './constant';

const initialState = {
  isFetching: false,
  error: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_INIT:
      return {
        ...state,
        isFetching: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}