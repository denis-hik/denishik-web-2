import {RootState} from "../../store/store";

export const resumeSelector = (root: RootState) => root.global.resume.data
export const langSelector = (root: RootState) => root.settings.lang
