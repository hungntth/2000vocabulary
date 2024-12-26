import { Vocabulary } from "./vocabulary";

export interface Category {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  wordCount?: number;
  words: Vocabulary[];
}