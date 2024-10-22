import { useState } from "react";
import { Subreddit  } from "../../store/subreddits/subredditsSlice"
import { DropdownMenu } from "./DropdownMenu";
import { GridItem } from "./GridItem";

interface Props {
    activeSubreddit: Subreddit;
}

export const Grid = ( { activeSubreddit }: Props ) => {
    const { subreddit, children } = activeSubreddit;

    const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

    const toggleDropwdownMenu = () => {
        setOpenDropdownMenu( !openDropdownMenu );
    }

    return (
        <div className="content-grid">
            <span className="mb-[3rem] flex flex-row justify-between">
                <h1 className="subreddit-title">r/{subreddit}</h1>
                <span onClick={ toggleDropwdownMenu } className="dropwdown-menu-button"><i className="fa-solid fa-ellipsis"></i></span>
                { openDropdownMenu && <DropdownMenu subreddit={ subreddit } toggleDropwdownMenu={ toggleDropwdownMenu } />}
                {/* <DropdownMenu /> */}
            </span>

            {
                children.map( child => ( <GridItem key={ child.name } childSubreddit={ child } /> ))
            }

        </div>
    )
}
