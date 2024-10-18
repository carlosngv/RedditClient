import { useAppDispatch } from "../../hooks/hooks";
import { setActiveSubreddit, Subreddit } from "../../store/subreddits/subredditsSlice";

interface Props {
  subreddit: Subreddit;
}
export const SidebarItem = ( { subreddit } : Props ) => {

  const useDispatch = useAppDispatch();

  const onClickSubreddit = () => {
    useDispatch( setActiveSubreddit( subreddit ) );
  }

  return (
    <li
      className="sidebar-item first-line:sidebar-item-text hover:cursor-pointer"
      onClick={ onClickSubreddit }
    >
      r/{ subreddit.subreddit }

    </li>
  )
}
