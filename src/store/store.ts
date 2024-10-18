import { configureStore } from '@reduxjs/toolkit'
import { subRedditsSlice } from './subreddits/subredditsSlice'
import { uiSlice } from './ui/uiSlice'

export const store = configureStore({
  reducer: {
    subReddits: subRedditsSlice.reducer,
    ui: uiSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
