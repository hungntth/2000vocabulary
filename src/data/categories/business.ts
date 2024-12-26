import { Category } from "../../types/category";

export const businessVocabulary: Category = {
  id: "business",
  title: "Business English",
  description: "Professional vocabulary for the workplace",
  imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  wordCount: 30,
  words: [
    {
      word: "Delegation",
      phonetic: "/ˌdel.ɪˈɡeɪ.ʃən/",
      audioUrl:
        "https://api.dictionaryapi.dev/media/pronunciations/en/delegation-us.mp3",
      meaning: "The assignment of responsibility to others",
      example: "Effective delegation is key to good management.",
    },
    {
      word: "Initiative",
      phonetic: "/ɪˈnɪʃ.ə.tɪv/",
      audioUrl:
        "https://api.dictionaryapi.dev/media/pronunciations/en/initiative-us.mp3",
      meaning: "The ability to assess and initiate things independently",
      example: "She showed great initiative in solving the client's problem.",
    },
    {
      word: "Leverage",
      phonetic: "/ˈlev.ər.ɪdʒ/",
      audioUrl:
        "https://api.dictionaryapi.dev/media/pronunciations/en/leverage-us.mp3",
      meaning: "Use something to maximum advantage",
      example: "We can leverage our network to expand the business.",
    },
  ],
};
