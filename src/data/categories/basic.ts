import { Category } from "../../types/category";

export const basicVocabulary: Category = {
  id: "basic",
  title: "Basic Vocabulary",
  description: "Essential words for everyday communication",
  imageUrl: "https://images.unsplash.com/photo-1477322524744-0eece9e79640",
  wordCount: 50,
  words: [
    {
      word: "Accomplish",
      phonetic: "/əˈkʌm.plɪʃ/",
      audioUrl: "https://api.dictionaryapi.dev/media/pronunciations/en/accomplish-us.mp3",
      meaning: "To succeed in doing something",
      example: "She accomplished her goal of running a marathon."
    },
    {
      word: "Brevity",
      phonetic: "/ˈbrev.ə.ti/",
      audioUrl: "https://api.dictionaryapi.dev/media/pronunciations/en/brevity-us.mp3",
      meaning: "Shortness or conciseness of expression",
      example: "The brevity of his speech made it more powerful."
    },
    {
      word: "Candid",
      phonetic: "/ˈkæn.dɪd/",
      audioUrl: "https://api.dictionaryapi.dev/media/pronunciations/en/candid-us.mp3",
      meaning: "Truthful and straightforward",
      example: "I appreciate your candid feedback about my presentation."
    }
  ]
};