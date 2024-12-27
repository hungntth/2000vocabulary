import { Category } from "../types/category";
import { charactorVocabulary } from "./categories/charactor";

export const categories: Category[] = [charactorVocabulary];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};
