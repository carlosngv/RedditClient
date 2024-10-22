import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { store } from "../../store/store";
import { deleteSubreddit } from "../../store/subreddits/subredditsSlice";
import { startRedditSearch } from "../../store/subreddits/thunks";

interface Props {
    subreddit: string;
    toggleDropwdownMenu: () => void;
}

export const DropdownMenu = ( { subreddit, toggleDropwdownMenu }: Props ) => {

    const { subreddits } = useAppSelector( state => state.subReddits );
    const navigate = useNavigate();

    const onClickRefresh = ( ) => {
        store.dispatch( startRedditSearch( subreddit ) );
        toggleDropwdownMenu();
    }

    const onClickRemove = () => {
        store.dispatch( deleteSubreddit( subreddit ) );
        toggleDropwdownMenu();
        if( (subreddits.length - 1) === 0 ) navigate('/');
    }

    return (
        <div className="dropdown-menu dropdown-menu-position-responsive">
            {/* <span className="dropdown-button"><i className="fa-solid fa-ellipsis-vertical"></i></span> */}
            <ul className="dropdown-menu-list">

                <li className="dropdown-menu-item" onClick={ onClickRefresh }>
                    <span><i className="fa-solid fa-arrows-rotate"></i> Refresh</span>
                </li>
                <li className="dropdown-menu-item" onClick={ onClickRemove }>
                    <span><i className="fa-solid fa-trash"></i> Remove</span>
                </li>
            </ul>
        </div>
    )
}
