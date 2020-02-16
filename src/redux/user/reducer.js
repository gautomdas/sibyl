import {
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCEEDED,
  LOGOUT_USER,
  CONFIRM_USER_SUCCEEDED,
  CONFIRM_USER_FAILED,
  REGISTER_USER_SUCCEEDED,
  REGISTER_USER_FAILED,
  USER_CLEAR_ERRORS
} from './actions';

const initialState = null;

export default function users(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type) {
    case LOGIN_USER_SUCCEEDED:
      return {
        ...(state || {}),
        loggedIn: true,
        ...action.payload.user
      };
    case LOGIN_USER_FAILED:
      return {
        ...(state || {}),
        error: action.error
      };
    case CONFIRM_USER_SUCCEEDED:
      return {
        ...(state || {}),
        confirmed: true
      };
    case CONFIRM_USER_FAILED:
      return {
        ...(state || {}),
        error: action.error
      };
    case REGISTER_USER_FAILED:
      return {
        ...(state || {}),
        error: action.error
      };
    case REGISTER_USER_SUCCEEDED:
      return {
        ...(state || {}),
        registered: true
      };
    case USER_CLEAR_ERRORS:
      return {
        ...(state || {}),
        error: undefined
      };
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
