import { useNavigate } from "react-router-dom"
import { startRedditSearch } from "./store/subreddits/thunks";
import { store } from "./store/store";
import { useUiStore } from "./hooks/useUiStore";
import { InputModal } from "./ui/components/InputModal";


export const RedditClientApp = () => {

    const navigate = useNavigate();
    const { openModal } = useUiStore();


    const onClickSearch = () => {
        openModal();
    }


    const onInputValue = ( value: string ) => {
        navigate("/subreddits");

        // ? thunks are passed to store.dispatch (redux thunk overview documentation)
        store.dispatch( startRedditSearch( value ) );
    }

    return (

            <main className="w-full max-msm:w-[100%] h-screen flex flex-col">
                <div
                    className="m-auto"
                >
                    <h1
                        className="max-msm:text-6xl text-7xl font-bold text-center"
                    >
                        Reddit Client
                    </h1>
                    <p
                        className="text-center max-msm:text-2xl text-4xl my-2"
                    >
                            By Carlos Ng
                    </p>

                    {/* <SearchBox onInputValue={ onInputValue } searchboxClass={ 'searchbox' } /> */}
                    <button
                        className="my-[1rem] search-button"
                        onClick={ onClickSearch }
                    >Search community</button>

                    <InputModal onInputValue={ onInputValue }/>

                    <section className="social-media-container">
                        <a
                            href="https://github.com/carlosngv/RedditClient"
                            target="_blank"
                            className="social-media-item"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="https://github.com/carlosngv/RedditClient"
                            target="_blank"
                            className="social-media-item"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </section>

                </div>

            </main>
    )
}
