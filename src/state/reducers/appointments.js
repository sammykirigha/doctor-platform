import { createSlice } from "@reduxjs/toolkit"
import { createAppointmentAction, getAppointmentsByDate } from "../actions/appointments"

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
			state.loading = true
		})
		builder.addCase(getAppointmentsByDate.pending, (state, action) => {
			state.loading = true;
		})

		//fulfilled
		builder.addCase(createAppointmentAction.fulfilled, (state, action) => {
			state.loading = false;
			state.appoitment = action.payload;
		})
		builder.addCase(getAppointmentsByDate.fulfilled, (state, action) => {
			state.loading = false;
			state.appoitments = action.payload
		})

		builder.addCase(createAppointmentAction.rejected, (state, action) => {
			state.loading = false;
			state.appoitment = null
		})
		builder.addCase(getAppointmentsByDate.rejected, (state, action) => {
			state.loading = false;
			state.appoitments = []
		})
	}
})

export const {} = AppointmentSlice.actions;
const { reducer } = AppointmentSlice;

export default reducer;