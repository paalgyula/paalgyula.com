var en = require("./translations.en.json");
var hu = require("./translations.hu.json");

const i18n = {
  translations: {
    en,
    hu,
  },
  defaultLang: "en",
  useBrowserDefault: false,
};

module.exports = i18n;
