import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/https";
import { resetMessageNotification, setMessageNotification } from "../reducers/error.reducer";
import { logoutUserSuccess } from "../reducers/auth.reducer";

export const signinUserAction = createAsyncThunk(
    "user/login",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetMessageNotification());
            const res = await apiPost(data);
            return res.data;
		} catch (error) {
			thunkAPI.dispatch(setMessageNotification({message: error}))
		}
    }
);

///////
export const logoutUser = () => async (dispatch) => {
    try {
        localStorage.clear();
        return dispatch(logoutUserSuccess);
    } catch (error) {
        return console.error(error.message);
    }
};
