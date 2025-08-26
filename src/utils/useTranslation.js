"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export function useTranslation() {
  const params = useParams();
  const [messages, setMessages] = useState({});
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    if (params?.locale) {
      setLocale(params.locale);
      import(`../locales/${params.locale}.json`).then((module) => {
        setMessages(module.default);
      });
    }
  }, [params?.locale]);

  const t = (key) => {
    return messages[key] || key;
  };

  const changeLanguage = (newLocale) => {
    // В Next.js с app router мы используем программную навигацию
    window.location.href = `/${newLocale}`;
  };

  return {
    t,
    locale,
    changeLanguage,
    messages,
  };
}
