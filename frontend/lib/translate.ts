import { createContext } from "react";

interface ITranslateInstance {
  i18n: any;
}

var translateInstance: ITranslateInstance;

export function setI18n(instance: ITranslateInstance) {
  translateInstance.i18n = instance;
}

export function getI18n() {
  return translateInstance.i18n;
}

export const TranslateContext = createContext<ITranslateInstance>({
  i18n: null,
});

export const useTranslation = () => {
  return {
    t: (key: string) => `$t:${key}`,
  };
};
