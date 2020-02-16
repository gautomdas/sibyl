// export const USER_LOADING = 'USER_LOADING';
// export const USER_LOADED = 'USER_LOADED';
// export const AUTH_ERROR = 'AUTH_ERROR';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAIL = 'LOGIN_FAIL';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// export const REGISTER_FAIL = 'REGISTER_FAIL';
// export const GET_ERRORS = 'GET_ERRORS';
// export const CLEAR_ERRORS = 'CLEAR_ERRORS';
// export const REGISTER_SUCCESS_HOSPITAL = 'REGISTER_SUCCESS_HOSPITAL';
// export const LOGIN_SUCCESS_HOSPITAL = 'LOGIN_SUCCESS_HOSPITAL';

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCEEDED = "LOGIN_USER_SUCCEEDED";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const LOGOUT_USER = "LOGOUT_USER";

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCEEDED = "REGISTER_USER_SUCCEEDED";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

export const CONFIRM_USER = "CONFIRM_USER";
export const CONFIRM_USER_SUCCEEDED = "CONFIRM_USER_SUCCEEDED";
export const CONFIRM_USER_FAILED = "CONFIRM_USER_FAILED";

export const USER_SEND_PASSWORD_RESET_EMAIL = "USER_SEND_PASSWORD_RESET_EMAIL";

export const USER_CLEAR_ERRORS = "USER_CLEAR_ERRORS";

export const login = (email, password) => {
  return {
    type: LOGIN_USER,
    payload: { email, password }
  };
};

export const logout = () => {
  return { type: LOGOUT_USER };
};

export const register = user => {
  return {
    type: REGISTER_USER,
    payload: { user }
  };
};

export const confirmUser = (token, tokenId) => {
  return {
    type: CONFIRM_USER,
    payload: {
      token,
      tokenId
    }
  };
};

export const sendPasswordResetEmail = email => {
  return {
    type: USER_SEND_PASSWORD_RESET_EMAIL,
    payload: {
      email
    }
  };
};

export const clearUserErrors = () => {
  return {
    type: USER_CLEAR_ERRORS
  };
};

export const clearErrors = () => {
  return {
    type: USER_CLEAR_ERRORS
  };
};

export const registerH = user => {
  return {
    type: REGISTER_USER,
    payload: { user }
  };
};
