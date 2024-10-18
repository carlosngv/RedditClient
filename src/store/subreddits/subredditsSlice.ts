import { createSlice } from '@reduxjs/toolkit';
import { SubredditChildData } from '../../interfaces/subreddit.interface';

export interface Subreddit {
   subreddit: string,
   children: SubredditChildData[]
}

export interface SubredditsState {
   isLoading: boolean,
   activeSubreddit: Subreddit
   subreddits: Subreddit[]
}

const initialState: SubredditsState = {
   isLoading: true,
   activeSubreddit: { subreddit: '', children: [] },
   subreddits: [],
}
export const subRedditsSlice = createSlice({
   name: 'subReddits',
   initialState,
   reducers: {
      addingNewSubreddit: ( state ) => {
         state.isLoading = true;
      },
      setActiveSubreddit: ( state, { payload } ) => {
         const currentSubreddit = state.subreddits.find( sr => sr.subreddit === payload.subreddit );
         state.activeSubreddit = currentSubreddit!;
         state.isLoading = false;
      },
      addSubreddit: ( state, { payload } ) => {
         // ! 4 subreddits max
         state.subreddits.unshift( payload );
         if( state.subreddits.length > 4 ){
            state.subreddits.pop();
         }
         state.isLoading = false;
      },
      clearSubreddits: ( state ) => {
         state.subreddits = [];
      },
      capturingSubredditError: ( state ) => {
         state.isLoading = false;
      }
   }
});

export const {
   addSubreddit,
   addingNewSubreddit,
   clearSubreddits,
   setActiveSubreddit,
   capturingSubredditError,
} = subRedditsSlice.actions;
