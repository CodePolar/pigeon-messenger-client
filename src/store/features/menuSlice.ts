import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuState } from "../../types/menu";
import type { RootState } from "../store";

const initialState: MenuState = {
    show: false
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        show: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
        hide: (state) => {
            state.show = false;
        }
    }
})

export const {show, hide} = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.show;

export default menuSlice.reducer;