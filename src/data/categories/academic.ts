import { Category } from '../../types/vocabulary';

export const academicVocabulary: Category = {
  id: "academic",
  title: "Academic Words",
  description: "Advanced vocabulary for academic writing",
  imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  wordCount: 40,
  words: [
    {
      word: "Empirical",
      phonetic: "/ɪmˈpɪr.ɪ.kəl/",
      audioUrl: "https://api.dictionaryapi.dev/media/pronunciations/en/empirical-us.mp3",
      meaning: "Based on observation or experience rather than theory",
      example: "The study provides empirical evidence for the hypothesis."
    },
    {
      word: "Paradigm",
      phonetic: "/ˈper.ə.daɪm/",
      audioUrl: "https://api.dictionaryapi.dev/media/pronunciations/en/paradigm-us.mp3",
      meaning: "A typical example or pattern of something",
      example: "This discovery represents a paradigm shift in our understanding."
    },
    {
      word: "Synthesis",
      phonetic: "/ˈsɪn.θə.sɪs/",
      audioUrl: "https://api.dictionaryapi.dev/media/pronunciations/en/synthesis-us.mp3",
      meaning: "Combination of ideas to form a theory or system",
      example: "The paper presents a synthesis of various research findings."
    }
  ]
};