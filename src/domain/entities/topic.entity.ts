import { Vocabulary } from "./vocabulary.entity";

export interface Topic {
  id: string;
  title: string;
  name: string;
  description: string;
  image: string;
  numContents: number;
  no: number;
  created_at: string;
  vocabularies: Vocabulary[];
}
