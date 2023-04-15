import { I18NConfig } from "next/dist/server/config-shared";

const config = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hu'],
  } satisfies I18NConfig,
} 

export default config