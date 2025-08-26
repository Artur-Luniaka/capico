import en from "../locales/en.json";
import pl from "../locales/pl.json";
import ru from "../locales/ru.json";

const translations = { en, pl, ru };

export function getTranslation(locale, key) {
  const localeKey = locale.toLowerCase();
  return translations[localeKey]?.[key] || key;
}

export function detectLocale() {
  if (typeof window !== "undefined") {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && ["en", "pl", "ru"].includes(savedLocale)) {
      return savedLocale;
    }

    const browserLang = navigator.language.split("-")[0];
    if (["en", "pl", "ru"].includes(browserLang)) {
      return browserLang;
    }
  }
  return "en";
}

export function getCurrentLocale() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("locale") || detectLocale();
  }
  return "en";
}
