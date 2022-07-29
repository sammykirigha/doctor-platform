import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/https";
import {  resetNotifications, setErrorNotification, setMessageNotification } from "../reducers/error.reducer";

export const createDoctorAction = createAsyncThunk(
    "doctors/new",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                doctor: response.data.createDoctor,
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

export const getDoctorAction = createAsyncThunk(
    "doctors/get",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                doctor: response.data.getOneDoctor,
                success: true,
            };
        } catch (err) {
            console.log("GET DOCTOR ERROR: ", { err });
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

export const updateDoctorAction = createAsyncThunk(
    "doctors/update",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            thunkAPI.dispatch(setMessageNotification(response.data.updateDoctor));
            return {
                message: response.data.updateDoctor,
                success: true,
            };
        } catch (err) {
            console.log("GET DOCTOR ERROR: ", { err });
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);
