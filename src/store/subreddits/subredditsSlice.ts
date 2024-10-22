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
         // ! 10 subreddits max
         const currentSubreddit = state.subreddits.find( sr => sr.subreddit === payload.subreddit );
         // ? Refresh subreddit validation
         if(currentSubreddit) {
            state.isLoading = false;
            return;
         }
         state.subreddits.unshift( payload ); // ? add to the beggining of the array
         if( state.subreddits.length > 10 ){
            state.subreddits.pop();
         }
         state.isLoading = false;
      },
      deleteSubreddit: ( state, { payload }) => {
         console.log({payload})
         state.subreddits = state.subreddits.filter( sr => sr.subreddit !== payload );

         if( state.subreddits.length !== 0 ) {
            console.log(state.subreddits[0])
            state.activeSubreddit = state.subreddits[0];
         } else {
            state.activeSubreddit = { subreddit: '', children: [] };
         }

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
   deleteSubreddit,
} = subRedditsSlice.actions;
