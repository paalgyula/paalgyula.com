import languageDetector from 'next-language-detector'

export default languageDetector({
  fallbackLng: 'en',
  supportedLngs: ['en', 'hu'],
})