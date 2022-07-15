import { createSlice } from "reduxjs/toolkit";


const initialState = {
	user: null,
	loading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logoutUserSuccess: (state, action) => {
			state.loading = false;
				state.user = null;
		},
	},
	extraReducers: (builder) => {
		//builders
	}
})