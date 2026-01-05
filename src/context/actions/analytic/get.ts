import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../../../store/store";
import {initGlobalSliceType} from "../../types";

type TResponse = {
    status: string,
    result: {
        status: string,
        resume?: {
            name: string,
            url: string,
            logo: string,
        }[],
    }
}

type TPayload = undefined

export const getAnalytics = createAsyncThunk<TResponse, TPayload,{state: RootState}>(
    "getAnalytics",
    async (payload,{dispatch,fulfillWithValue, rejectWithValue}):Promise<TResponse> => {
        try {
            const response = await axios.get<TResponse>(`https://request.denishik.ru/analytics`)
            return fulfillWithValue(response.data)
        } catch (error) {
            throw rejectWithValue(error)
        }
    }
)

export const ext = (builder: ActionReducerMapBuilder<initGlobalSliceType>) => {
    return builder
        .addCase(getAnalytics.pending, (state, action) => {
            state.resume.state = "pending"
        })
        .addCase(getAnalytics.fulfilled, (state, action) => {
            state.resume.state = "succeeded"
            state.resume.data = action.payload.result.resume?.find(({name}) => name === "PDF")?.url;
        })
        .addCase(getAnalytics.rejected, (state, action) => {
            state.resume.state = "failed"
        })
}