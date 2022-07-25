import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/https";
import { resetMessageNotification, setMessageNotification } from "../reducers/error.reducer";

export const createDoctorAction = createAsyncThunk(
    "doctors/new",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetMessageNotification());
            const response = await apiPost(data);
            return {
                doctor: response.data.createDoctor,
                success: true,
            };
        } catch (err) {
            console.log("CREATE DOCTOR ERROR: ", { err });
            thunkAPI.dispatch(setMessageNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);
