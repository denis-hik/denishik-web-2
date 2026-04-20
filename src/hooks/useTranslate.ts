import {useMemo} from "react";
import {useSelector} from "react-redux";
import i18n from "../i18n/i18n";
import {fallbackLanguage, normalizeLanguage} from "../i18n/languages";
import {RootState} from "../store/store";
import {ISettingsSliceState} from "../context/slice/settingsSlice";

export function useTranslate() {
    const lang = useSelector((state: RootState): ISettingsSliceState["lang"] => state.settings.lang);

    return useMemo(() => {
        const i18nInstance = i18n as any;
        const resolvedLanguage = i18nInstance.resolvedLanguage as string | undefined;
        const currentLanguage = i18nInstance.language as string | undefined;
        const detectedLanguage =
            normalizeLanguage(lang) ??
            normalizeLanguage(resolvedLanguage) ??
            normalizeLanguage(currentLanguage) ??
            fallbackLanguage;

        void i18nInstance.changeLanguage(detectedLanguage);

        return (t: string, k?: any): string => i18nInstance.t(t, k) as string;
    }, [lang]);
}
