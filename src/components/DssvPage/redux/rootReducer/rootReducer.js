import { combineReducers } from "redux";
import { userReducer } from "../reducer/userReducer";

export let rootReducer = combineReducers({ userReducer: userReducer });
