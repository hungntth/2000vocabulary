import { Category } from '../types/vocabulary';
import { basicVocabulary } from './categories/basic';
import { businessVocabulary } from './categories/business';
import { academicVocabulary } from './categories/academic';

export const categories: Category[] = [
  basicVocabulary,
  businessVocabulary,
  academicVocabulary
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};