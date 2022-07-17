import { createSlice } from "@reduxjs/toolkit";
import { signinUserAction } from "../actions/auth.action";

const initialState = {
    user: null,
    loading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutUserSuccess: (state, action) => {
            state.loading = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        //builders
        builder.addCase(signinUserAction.pending, (state, action) => {
            state.loading = true;
            state.user = null;
        });
        builder.addCase(signinUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(signinUserAction.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
        });
    },
});

export const { logoutUserSuccess } = authSlice.actions

export default authSlice.reducer
