import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {globalSliceInitialState} from "./init";

import {ext as getAnalyticsExt} from "../actions/analytic/get";

const globalSlice = createSlice({
    name: 'global',
    initialState: globalSliceInitialState,
    reducers: {
        clear: (state) => ({...globalSliceInitialState}),
        setResume(state,action: PayloadAction<string>){
            state.resume.state = "succeeded"
            state.resume.data = action.payload
        }
    },
    extraReducers: (builder) => {
        getAnalyticsExt(builder)
    },
})

export const {clear,setResume} = globalSlice.actions
export default globalSlice.reducer