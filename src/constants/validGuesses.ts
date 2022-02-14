import { CONFIG } from './config'

export const VALIDGUESSES = [
    'ㅇㅏㅍㅏㅌㅡ',
    'ㅅㅓㅇㅅㅣㄹ',
    'ㄴㅡㅇㄹㅕㄱ',
    'ㅅㅓㅇㅈㅏㅇ',
    'ㅌㅏㅁㅇㅛㄱ',
    'ㄱㅜㄱㄱㅏㅁ',
    'ㅈㅓㅇㅇㅣㄴ',
    'ㅅㅏㅇㅁㅣㄴ',
    'ㅂㅕㅇㅎㅏㄱ',
    'ㅈㅜㄱㅓㄹㅐ',
    'ㅎㅡㅣㅂㅗㅇ',
    'ㅈㅜㅇㄱㅜㄱ',
    'ㅈㅐㅁㅜㅂㅜ',
    'ㅅㅜㅁㅏㄹㅡ'
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
