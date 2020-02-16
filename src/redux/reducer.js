import { combineReducers } from 'redux';
import userReducer from './user/reducer';
// import hospitalReducer from "./user/reducer";

const appReducer = combineReducers({
  user: userReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
