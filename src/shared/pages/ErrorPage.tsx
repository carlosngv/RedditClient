import { useNavigate } from "react-router-dom";
import { useUiStore } from "../../hooks/useUiStore";
import { store } from "../../store/store";
import { startRedditSearch } from "../../store/subreddits/thunks";
import { InputModal } from "../../ui/components/InputModal"

export const ErrorPage = () => {

    const { openModal } = useUiStore();


    const onClickSearch = () => {
        openModal();
    }
    const navigate = useNavigate();

    const onInputValue = ( value: string ) => {
        navigate("/subreddits");

        // ? thunks are passed to store.dispatch (redux thunk overview documentation)
        store.dispatch( startRedditSearch( value ) );
    }

    return (
        <div className="h-[100vh] p-4 flex flex-col items-center justify-center gap-4">
            <h1
                className="text-white font-bold text-7xl"
            >
                Oops!
            </h1>
            <p
                className="text-white sm:text-3xl msm:text-lg"
            >
                Sorry, an unexpected error has occurred.
            </p>
            <p
                className="text-white italic sm:text-3xl msm:text-lg"
            >
                Subreddit not found. Please, try again.
            </p>

            <button
                        className="my-[1rem] search-button w-[50%]"
                        onClick={ onClickSearch }
                    >Search community</button>

                    <InputModal onInputValue={ onInputValue }/>
        </div>
    )
}
