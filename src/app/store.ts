import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import feedItemsSlice from '../features/feedItem/feedItemsSlice';

export const store = configureStore({
  reducer: {
    feedItems: feedItemsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
