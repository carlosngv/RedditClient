
import subredditApi from "../../helpers/subredditApi";
import { RedditData, SubredditChildData } from "../../interfaces/subreddit.interface";
import { AppDispatch } from "../store";
import { addingNewSubreddit, addSubreddit, capturingSubredditError, setActiveSubreddit } from "./subredditsSlice"


export const startRedditSearch = ( subredditInput: string ) => {

    return async ( dispatch: AppDispatch  ) => {

        dispatch( addingNewSubreddit() );

        subredditInput = subredditInput.trim().replace( ' ', '' );
        try {
            const res = await subredditApi.get(`/${ subredditInput }.json`)
            const { data } = res.data ;
            const { children }  = data as RedditData;
            const subredditChildren: SubredditChildData[] = children.map( child => {
                const { subreddit, selftext, author_fullname, title, downs, name, upvote_ratio, ups, score, thumbnail, created, subreddit_id, author, num_comments, permalink, url, subreddit_subscribers, preview,} = child.data;
                return { subreddit, selftext, author_fullname, title, downs, name, upvote_ratio, ups, score, thumbnail, created, subreddit_id, author, num_comments, permalink, url, subreddit_subscribers, preview }
            });

            const newSubreddit = { subreddit: subredditInput, children: subredditChildren };
            dispatch( addSubreddit( newSubreddit ) );
            dispatch( setActiveSubreddit( newSubreddit ));




        } catch (error) {
            console.log( { error } )
            dispatch(capturingSubredditError());
        }

    }

}
