import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./auth.reducer";
import errorReducer from "./error.reducer";

export const rootReducer = combineReducers({
	notifications: errorReducer,
    auth: reducer
})


