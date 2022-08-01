import {configureStore} from "@reduxjs/toolkit";
import notificationReducer from "./features/notificationSlice";
import menuReducer from "./features/menuSlice";

export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        menu: menuReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch




