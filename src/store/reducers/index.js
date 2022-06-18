import { combineReducers } from "@reduxjs/toolkit";
import channelReducer from "./channelReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer,
});

export default rootReducer;
