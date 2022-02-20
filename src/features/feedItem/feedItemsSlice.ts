import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const loadFeedItems = createAsyncThunk(
  'feedItems/loadFeedItems',
  async () => {
    const response = await fetch('https://www.reddit.com/hot.json');
    const json = await response.json;
    return json;
  }
)

interface feedItemsState {
  feedItems: [],
  isLoadingFeedItems: boolean,
  hasError: boolean
}

const initialState = {
  feedItems: [],
  isLoadingFeedItems: false,
  hasError: false
} as feedItemsState

const feedItemsSlice = createSlice({
  name: 'feedItems',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFeedItems.pending, (state, action) => {
        state.isLoadingFeedItems = true;
        state.hasError = false;
      })
      .addCase(loadFeedItems.fulfilled, (state, action) => {
        state.isLoadingFeedItems = false;
        state.hasError = false;
      })
      .addCase(loadFeedItems.rejected, (state, action) => {
        state.isLoadingFeedItems = false;
        state.hasError = true;
      })
  }
});

export const {} = feedItemsSlice.actions
//export const isLoading = (state: RootState) => state.isLoadingFeedItems;
export const selectFeedItems = (state: RootState) => state.feedItems;


export default feedItemsSlice.reducer