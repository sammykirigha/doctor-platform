import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/https";
import { parseError } from "../../utils/parseError";
import {
    resetNotifications,
    setErrorNotification,
} from "../reducers/error.reducer";

export const createNewPatientAccountAction = createAsyncThunk(
    "patient/create-account",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                user: response.data.createPatient,
                success: true,
            };
        } catch (err) {
            const error = parseError(err);
            thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

export const fetchSinglePatientAction = createAsyncThunk(
    "patient/get-one",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                patient: response.data.fetchSinglePatient,
                success: true,
            };
        } catch (err) {
            const error = parseError(err);
            thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

export const updatePatientAction = createAsyncThunk(
    "patient/update-one",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                patient: response.data.updatePatientInfo,
                success: true,
            };
        } catch (err) {
            const error = parseError(err);
            thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

