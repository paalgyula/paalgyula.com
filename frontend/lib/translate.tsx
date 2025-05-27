interface ITranslation {
  t: (key: string) => string;
  setLanguage(lang: string): void;
  i18n: {
    language: string;
  };
}

const getTranslations = async () => {
  // const req = await fetch("/locales/hu/common.json");
  // return await req.json();
  return import("../public/locales/hu/common.json");
};

var translations = {};

export const useTranslation = (): ITranslation => {
  return {
    t: (key: string) => `$t:${key}`,
    setLanguage: (lang: string) => {},
    i18n: {
      language: "en",
    },
  };
};

getTranslations().then((data) => (translations = data));
