import { Subreddit  } from "../../store/subreddits/subredditsSlice"
import { GridItem } from "./GridItem";

interface Props {
    activeSubreddit: Subreddit;
}

export const Grid = ( { activeSubreddit }: Props ) => {
    const { subreddit, children } = activeSubreddit;

    return (
        <div className="content-grid">
            <h1 className="subreddit-title">r/{subreddit}</h1>

            {
                children.map( child => ( <GridItem key={ child.name } childSubreddit={ child } /> ))
            }

        </div>
    )
}
