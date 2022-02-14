import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ㄱ',
  'ㄴ',
  'ㄷ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅅ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
  'ㅏ',
  'ㅑ',
  'ㅓ',
  'ㅕ',
  'ㅗ',
  'ㅛ',
  'ㅜ',
  'ㅠ',
  'ㅡ',
  'ㅣ',
  'ㅐ',
  'ㅔ'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
