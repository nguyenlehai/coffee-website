import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import vi from "../src/locales/vi.json";
import kr from "../src/locales/kr.json";
import en from "../src/locales/en.json";

const resources = {
  vi: {
    translation: vi
  },
  kr: {
    translation: kr
  },
  en: {
    translation: en
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    lng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
