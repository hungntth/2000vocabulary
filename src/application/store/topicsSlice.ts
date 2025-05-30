import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Topic } from "../../domain/entities/topic.entity";
import { ApiTopicRepository } from "../../infrastructure/ApiTopicRepository";

interface TopicsState {
  selectedTopic: Topic | null;
  items: Topic[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TopicsState = {
  selectedTopic: null,
  items: [],
  status: "idle",
  error: null,
};

// Initialize the repository
const topicRepository = new ApiTopicRepository();

// Use repository in the async thunk
export const fetchTopics = createAsyncThunk("topics/fetchTopics", async () => {
  return await topicRepository.getTopics();
});

// Async thunk for fetching a topic by ID
export const fetchTopicById = createAsyncThunk(
  "topics/fetchTopicById",
  async (id: string) => {
    return await topicRepository.getTopicById(id);
  }
);

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Payload is already the array of topics
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch topics";
      })

      // Handle fetchTopicById
      .addCase(fetchTopicById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopicById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedTopic = action.payload as any; // Set the selected topic
      })
      .addCase(fetchTopicById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch topic by ID";
      });
  },
});

export default topicsSlice.reducer;
