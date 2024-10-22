
export const ErrorPage = () => {

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center gap-4">
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
                Not found
            </p>
        </div>
    )
}
