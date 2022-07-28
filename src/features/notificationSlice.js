import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        bells: []
    },
    reducers: {
        add: (state, action) => {
            state.bells.push(action.payload);
        }
    }
})

export const {add} = notificationSlice.actions;

export default notificationSlice.reducer;