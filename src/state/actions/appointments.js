import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/https";
import { resetNotifications, setErrorNotification } from "../reducers/error.reducer";

export const createAppointmentAction = createAsyncThunk(
    "appointment/new",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                doctor: response.data.createAppointment,
                success: true,
            };
        } catch (err) {
            console.log("CREATE DOCTOR ERROR: ", { err });
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);