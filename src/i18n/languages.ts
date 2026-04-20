export const supportedLanguages = ["en", "ru", "kk"] as const;

export type AppLanguage = typeof supportedLanguages[number];

export const fallbackLanguage: AppLanguage = "en";

export const normalizeLanguage = (value?: string | null): AppLanguage | undefined => {
    if (!value) {
        return undefined;
    }

    const normalized = value.toLowerCase().split("-")[0];

    if (supportedLanguages.includes(normalized as AppLanguage)) {
        return normalized as AppLanguage;
    }

    return undefined;
};
