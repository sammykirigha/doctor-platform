import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./auth.reducer";
import errorReducer from "./error.reducer";
import doctorReducer from "./doctor.reducer";

export const rootReducer = combineReducers({
	notifications: errorReducer,
	auth: reducer,
	doctor: doctorReducer
})


