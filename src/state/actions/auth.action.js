import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/https";
import {
    resetNotifications,
    setErrorNotification,
    setMessageNotification,
} from "../reducers/error.reducer";
import { logoutUserSuccess } from "../reducers/auth.reducer";
import { parseError } from "../../utils/parseError";

//login user action
export const signinUserAction = createAsyncThunk(
    "user/login",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            localStorage.setItem("auth-token", response.data.loginUser.token);
            return {
                user: response.data.loginUser,
                success: true,
            };
        } catch (err) {
            const error = parseError(err)
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);


//register user action
export const signUpUserAction = createAsyncThunk(
    "user/signup",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                user: response.data.registerUser,
                success: true,
            };
        } catch (err) {
           const error = parseError(err)
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);


//forgotpassword
export const forgotPasswordAction = createAsyncThunk(
    "user/forgetPassword",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            thunkAPI.dispatch(setMessageNotification(response.data.forgotUserPasssword));
            return {
                message: response.data.forgotUserPasssword,
                success: true,
            };
        } catch (err) {
            //  const error = parseError(err)
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);


//resetpassord action
export const resetPasswordAction = createAsyncThunk(
    "user/resetPassord",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            thunkAPI.dispatch(setMessageNotification(response.data.resetUsersPassword));
            return {
                message: response.data.resetUsersPassword,
                success: true,
            };
        } catch (err) {
            const error = parseError(err)
            thunkAPI.dispatch(setErrorNotification(err));
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
