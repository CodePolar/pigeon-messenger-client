import {configureStore} from "@reduxjs/toolkit";
import notificationReducer from "../features/notificationSlice";
import menuReducer from "../features/menuSlice";

export default  configureStore({
    reducer: {
        notificationReducer,
        menu: menuReducer
    }
});

