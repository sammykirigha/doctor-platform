import { createAsyncThunk } from "@reduxjs/toolkit";


// export const loginUserAction = createAsyncThunk({
// 	"user/login",
// 	async(data, thunkAPI) => {
// 	thunkAPI.dispatch("the errrir")
// 	}
// })





///////
export const logoutUser = () => async (dispatch) => {
	try {
		localStorage.clear();
		// return dispatch(logoutUserSuccess)
	} catch (error) {
		return console.error(error.message)
	}
}