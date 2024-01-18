export const fallbackLng = 'ko'
export const languages = [fallbackLng, 'ja', 'en']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export type AvailableLanguages = typeof languages[number]

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  }
}
