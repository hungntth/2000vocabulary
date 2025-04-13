import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TopicResponse, Topic } from '../types/topic';

interface TopicsState {
  items: Topic[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TopicsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchTopics = createAsyncThunk('topics/fetchTopics', async () => {
  const response = await axios.get<TopicResponse>('http://localhost:3000/api/v1/topic');
  return response.data;
});

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.data;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch topics';
      });
  },
});

export default topicsSlice.reducer;