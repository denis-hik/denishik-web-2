import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import {fallbackLanguage, normalizeLanguage, supportedLanguages} from "./languages";
import en from "./langs/en.json";
import ru from "./langs/ru.json";
import kk from "./langs/kk.json";

const i18nInstance = i18n as any;
const resources = {en, ru, kk};

i18nInstance
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: fallbackLanguage,
        supportedLngs: [...supportedLanguages],
        nonExplicitSupportedLngs: true,
        load: "languageOnly",
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ["navigator", "htmlTag", "localStorage"],
            lookupLocalStorage: "lang",
            caches: []
        }
    });

const currentLanguage = i18nInstance.language as string | undefined;
const detectedLanguage = normalizeLanguage(i18nInstance.resolvedLanguage ?? currentLanguage);

if (detectedLanguage && detectedLanguage !== currentLanguage) {
    void i18nInstance.changeLanguage(detectedLanguage);
}

export default i18n;
