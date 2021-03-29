import { useTranslate } from '@/_helpers/i18n'
const { t } = useTranslate(['sync'])
export type pronSource = {
  name: string
  url: string
  trans: string
}
export const ankiProns = {
  index: { shanbayAmE: 0, shanbayBrE: 1 },
  list: [
    {
      name: 'shanbayAmE',
      url: 'http://media.shanbay.com/audio/us/{word}.mp3',
      trans: t('sync:ankiconnect.prons.shanbayAmE')
    },
    {
      name: 'shanbayBrE',
      url: 'http://media.shanbay.com/audio/uk/{word}.mp3',
      trans: t('sync:ankiconnect.prons.shanbayBrE')
    }
  ] as pronSource[]
}
