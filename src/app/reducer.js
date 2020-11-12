import { combineReducers } from "@reduxjs/toolkit";
import statusReducer from "./statusSlice";

const rootReducer = combineReducers({
  status: statusReducer,
});

export default rootReducer;