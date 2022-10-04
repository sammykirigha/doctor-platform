import { createSlice } from "@reduxjs/toolkit"
import { createAppointmentAction } from "../actions/appointments"

const initialState = {
	appoitments: [],
	appoitment: null,
	loading: false
}

export const AppointmentSlice = createSlice({
	name: "appointment",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(createAppointmentAction.pending, (state, action) => {
			state.loading = false
		})
		builder.addCase(createAppointmentAction.fulfilled, (state, action) => {
			state.loading = true;
			state.appoitment = action.payload;
		})
		builder.addCase(createAppointmentAction.rejected, (state, action) => {
			state.loading = false;
			state.appoitment = null
		})
	}
})

export const {} = AppointmentSlice.actions;
const { reducer } = AppointmentSlice;

export default reducer;