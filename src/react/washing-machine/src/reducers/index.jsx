import { combineReducers } from "redux";
import machine from "./machine";
import { reducer as formReducer } from "redux-form";
import {users} from "./users"

export default combineReducers({
  machine,
  users,
  form: formReducer
});
