import { Vocabulary } from "../../domain/entities/vocabulary.entity";

interface VocabulariessState {
  items: Vocabulary[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: VocabulariessState = {
    items: [],
    status: "idle",
    error: null,
  };
