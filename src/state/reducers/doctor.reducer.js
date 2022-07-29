import { createSlice } from "@reduxjs/toolkit";
import { createDoctorAction, getDoctorAction, updateDoctorAction } from "../actions/doctors.action";

const initialState = {
    doctor: null,
    loading: false,
};

export const authSlice = createSlice({
    name: "doctor",
    initialState,
    extraReducers: (builder) => { 
        //builders
        builder.addCase(createDoctorAction.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(getDoctorAction.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(updateDoctorAction.pending, (state, action) => {
            state.loading = true;
         });

        //fullfilled
        builder.addCase(createDoctorAction.fulfilled, (state, action) => {
            state.loading = false;
            state.doctor = action.payload.doctor;
        });

        builder.addCase(getDoctorAction.fulfilled, (state, action) => {
            state.loading = false;
            state.doctor = action.payload.doctor;
        });

         builder.addCase(updateDoctorAction.fulfilled, (state, action) => {
            state.loading = false;
         });

        //rejected
        builder.addCase(createDoctorAction.rejected, (state, action) => {
            state.loading = false;
            state.doctor = null;
        });

        builder.addCase(getDoctorAction.rejected, (state, action) => {
            state.loading = false;
            state.doctor = null;
        });

        builder.addCase(updateDoctorAction.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

const { reducer } = authSlice;

export default reducer;
