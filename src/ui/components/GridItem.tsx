import { SubredditChildData } from "../../interfaces/subreddit.interface"

interface Props {
    childSubreddit: SubredditChildData;
}

export const GridItem = ( { childSubreddit }: Props ) => {
    return (
        <article className="card">
            <h2 className="subreddit-post-title">
                { childSubreddit.title }
            </h2>
            <h4 className="my-2">{ childSubreddit.author }</h4>
            <p className="mb-2">

                { childSubreddit.selftext.length !== 0 ? `${childSubreddit.selftext.substring(0, 100)}...`: '' }
            </p>
            { childSubreddit.preview !== undefined && childSubreddit.preview.enabled? (
                <div className="subreddit-img-container">
                    <img className="post-img" src={ childSubreddit.url } />
                </div>
            ) : '' }

            <section className="flex gap-2 items-center">
                <span className="bg-black bg-opacity-50 rounded-xl p-2">
                    <i className="fa-solid fa-arrow-up" /> { childSubreddit.ups }
                </span>
                <span className="bg-black bg-opacity-50 rounded-xl p-2">
                    <i className="fa-regular fa-comment" /> { childSubreddit.num_comments }
                </span>

                <span className="bg-black bg-opacity-50 rounded-xl p-2 ">
                    <a
                        href={ `https://www.reddit.com${childSubreddit.permalink}` }
                        className="px-2 fa-solid fa-arrow-up-right-from-square"
                        target="_blank"
                    ></a>
                </span>
            </section>



        </article>
    )
}
