import {configureStore} from '@reduxjs/toolkit'
import globalSlice from "../context/slice/globalSlice";
import settingsSlice from "../context/slice/settingsSlice";

export const store = configureStore({
    reducer: {
        global: globalSlice,
        settings: settingsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// @ts-ignore
window.getStore = store.getState

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const dispatch = store.dispatch
