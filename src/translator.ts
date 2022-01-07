import locale from '../public/locales/en/default.json';

const t = (label: string) => {
  const txt = (locale as any)[label]

  if (!txt) {
    console.log(`localization not found for label: ${label}`)
  }

  return txt || label
}

export const useTranslation = () => {
  return {
    t
  }
}
