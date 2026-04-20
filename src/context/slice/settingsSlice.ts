import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppLanguage} from "../../i18n/languages";

export interface ISettingsSliceState {
    lang?: AppLanguage;
}

const initialState: ISettingsSliceState = {
    lang: undefined
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<AppLanguage | undefined>) => {
            state.lang = action.payload;

            if (typeof window !== "undefined") {
                if (action.payload) {
                    window.localStorage.setItem("lang", action.payload);
                } else {
                    window.localStorage.removeItem("lang");
                }
            }
        }
    }
});

export const {setLang} = settingsSlice.actions;
export default settingsSlice.reducer;
