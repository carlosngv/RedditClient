import { useEffect } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { SidebarItem } from "./SidebarItem";
import { store } from "../../store/store";
import { startRedditSearch } from "../../store/subreddits/thunks";
import { useUiStore } from "../../hooks/useUiStore";
import { InputModal } from "./InputModal";


export const Sidebar = ({ onToggle = false }) => {

    const { subreddits } = useAppSelector( state => state?.subReddits );

    useEffect(() => {

    }, [ onToggle ]);

    const { openModal } = useUiStore();

    const onClickSearch = () => {
        openModal();
    }

    const onInputValue = ( value: string ) => {
        // ? thunks are passed to store.dispatch (redux thunk overview documentation)
        store.dispatch( startRedditSearch( value ) );
        onToggle = false;
    }


    return (
        <aside
            className={`responsive-sidebar ${ onToggle ? 'sidebar-is-active' : '' }`}
        >
            <h2
                className="sidebar-title"
            >Communities</h2>

            <nav className="w-full">
                <ul className="mt-2 w-full">
                    { subreddits.map( sr => <SidebarItem
                        key={ sr.subreddit }
                        subreddit={ sr }
                    />)}
                </ul>
            <button
                    className="my-[1rem] search-button-sidebar"
                    onClick={ onClickSearch }
                >Add community</button>
            </nav>
            <InputModal onInputValue={ onInputValue }/>
        </aside>
    )
}
