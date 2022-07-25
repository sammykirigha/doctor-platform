import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/https";
import {
    resetMessageNotification,
    setMessageNotification,
} from "../reducers/error.reducer";
import { logoutUserSuccess } from "../reducers/auth.reducer";
    
export const signinUserAction = createAsyncThunk(
    "user/login",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetMessageNotification());
            const response = await apiPost(data);
            localStorage.setItem("auth-token", response.data.loginUser.token);
            return {
                user: response.data.loginUser,
                success: true,
            };
        } catch (err) {
            console.log("LOGIN ERROR: ", { err });
            thunkAPI.dispatch(setMessageNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

export const signUpUserAction = createAsyncThunk(
    "user/signup",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetMessageNotification());
            const response = await apiPost(data);
            return {
                user: response.data.registerUser,
                success: true,
            };
        } catch (err) {
            console.log("LOGIN ERROR: ", { err });
            thunkAPI.dispatch(setMessageNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

///////
export const logoutUserAction = () => async (dispatch) => {
    try {
        localStorage.clear();
        return dispatch(logoutUserSuccess());
    } catch (e) {
        return console.error(e.message);

    }

};
