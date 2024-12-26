import { basicVocabulary } from "./categories/basic";
import { businessVocabulary } from "./categories/business";
import { academicVocabulary } from "./categories/academic";
import { Category } from "../types/category";
import { charactorVocabulary } from "./categories/charactor";

export const categories: Category[] = [
  basicVocabulary,
  businessVocabulary,
  academicVocabulary,
  charactorVocabulary,
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};
