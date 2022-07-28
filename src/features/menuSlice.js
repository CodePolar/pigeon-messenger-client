import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        show: false
    },
    reducers: {
        show: (state, action) => {
            state.show = action.payload;
        },
        hide: (state) => {
            state.show = false;
        }
    }
})

export const {show, hide} = menuSlice.actions;

export const selectMenu = (state) => state.menu.show;

export default menuSlice.reducer;