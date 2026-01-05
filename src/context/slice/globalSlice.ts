import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {globalSliceInitialState} from "./init";

import {ext as getAnalyticsExt} from "../actions/analytic/get";

const globalSlice = createSlice({
    name: 'global',
    initialState: globalSliceInitialState,
    reducers: {
        clear: (state) => ({...globalSliceInitialState}),
    },
    extraReducers: (builder) => {
        getAnalyticsExt(builder)
    },
})

export const {clear} = globalSlice.actions
export default globalSlice.reducer