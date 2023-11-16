import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modal.slice";

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer
    }
})

export const dispatch = store.dispatch.bind(store);
export type TState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;