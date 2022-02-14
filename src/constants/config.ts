export const CONFIG = {
  tries: 6, // This changes how many tries you get to finish the wordle
  language: 'korean', // This changes the display name for your language
  wordLength: 6, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: 'juice', // Put your name here so people know who made this Wordle!
  authorWebsite: '', // Put a link to your website or social media here
  wordListSource: 'MoneyGame', // Describe the source material for your words here
  wordListSourceLink: 'http://program.tving.com/tvn/moneygame', // Put a link to the source material for your words here
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: '', // You can use this if you use Google Analytics
  shuffle: true, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
  startDate: 'January 1, 2022 00:00:00', // what date and time to start your game from
  defaultLang: 'ko', // the default interface language
  availableLangs: ['en', 'ko'], // the options available to the user for translation languages
}
