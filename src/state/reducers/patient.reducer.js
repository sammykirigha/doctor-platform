
import { createSlice } from "@reduxjs/toolkit";
import { createNewPatientAccountAction, fetchSinglePatientAction } from "../actions/patient.action";



const initialState = {
    patient: null,
    loading: false,
};

export const createPatientAccountdSlice = createSlice({
    name: "create-patient-account",
    initialState,
    extraReducers: (builder) => {
        //builders
        builder.addCase(createNewPatientAccountAction.pending, (state, action) => {
            state.loading = true;
            state.patient = null;
        });
        builder.addCase(fetchSinglePatientAction.pending, (state, action) => {
            state.loading = true;
            state.patient = null;
        });

        //fullfilled
        builder.addCase(createNewPatientAccountAction.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload.patient;
        });
        builder.addCase(fetchSinglePatientAction.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload.patient;
        });

        //rejected
        builder.addCase(createNewPatientAccountAction.rejected, (state, action) => {
            state.loading = false;
            state.patient = null;
        });
        builder.addCase(fetchSinglePatientAction.rejected, (state, action) => {
            state.loading = false;
            state.patient = null;
        });

    },
});


const { reducer } = createPatientAccountdSlice;

export default reducer;
