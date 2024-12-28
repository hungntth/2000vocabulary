import { Category } from "../types/category";
import { charactorVocabulary } from "./categories/charactor";
import { wordsOfPeopleVocabulary } from "./categories/wordsOfPeople";
import { partsOfTheBodyVocabulary } from "./categories/partsOfTheBody";
import { faceAndHairVocabulary } from "./categories/faceAndHair";
import { appearanceVocabulary } from "./categories/appearance";
import { bodyMovementVocabulary } from "./categories/bodyMovement";
import { feelingsAndEmotionsVocabulary } from "./categories/feelingsAndEmotions";
import { healthAndDiseasesVocabulary } from "./categories/healthAndDiseases";

export const categories: Category[] = [
  charactorVocabulary,
  wordsOfPeopleVocabulary,
  partsOfTheBodyVocabulary,
  faceAndHairVocabulary,
  appearanceVocabulary,
  bodyMovementVocabulary,
  feelingsAndEmotionsVocabulary,
  healthAndDiseasesVocabulary,
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};
