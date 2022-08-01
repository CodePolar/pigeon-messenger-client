import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationState } from "../../types/notifications";
import { RootState } from "../store";

const initialState: NotificationState = {
    notifications: []
}

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<any>) => {
            state.notifications.push(action.payload);
        }
    }
})

export const {add} = notificationSlice.actions;

export default notificationSlice.reducer;