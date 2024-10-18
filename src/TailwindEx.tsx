import { MouseEvent } from "react";


export const TailwindEx = () => {

    const toggleDarkmode = ( e: MouseEvent ) => {
        e.preventDefault();
        document.documentElement.classList.toggle('dark');
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <h2 className="bg-slate-900 text-[#cbd5e1]">Tailwind</h2>

            <button
                className="bg-slate-500/80 text-white p-4 rounded w-24 block mx-auto my-8
                hover:bg-slate-900"
            >Click</button>


            <button
                className=" text-white p-4 rounded w-50 block mx-auto my-8
                bg-gradient-to-r from-slate-500 to-slate-900 hover:from-orange-300 hover:to-orange-500"
            >Button w/ Gradient</button>


            <button
                className="transition duration-150 ease-in-out hover:duration-700
                hover:bg-slate-900 hover:w-42
                bg-slate-500/80 text-white p-4 rounded w-40 block mx-auto my-8"
            >Click</button>

            <form className="bg-slate-300 w-80 mx-auto mt-8 rounded-lg p-6">

                <input className="border border-slate-400 w-full px-3 py-2 mb-4 rounded-md focus:outline-none" type="text" placeholder="Name" />

                <input className="border border-slate-400 w-full px-3 py-2 rounded-md invalid:bg-red-200 peer" type="email" placeholder="Email" />
                <p className="text-red-400 hidden peer-invalid:block">Correo inválido</p>

                <input className="border border-slate-400 w-full px-3 py-2 mt-4 mb-4 rounded-md" type="password" placeholder="Password" />

                <input className="bg-violet-500 text-slate-200 w-full rounded-md py-2 cursor-pointer hover:bg-violet-600" type="submit" value="Submit" />
            </form>

            <button
                className="bg-orange-500 block w-40 mx-auto my-10 rounded-md p-4 relative after:content-['hola']
                after:absolute after:left-0"
            >
                PseudoElements
            </button>

            <div className="border-2 border-black p-6 w-80 mx-auto mt-10 lg:w-96">
                <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Responsive Div</h2>
                <p className="mt-4 md:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatum explicabo, nam in aperiam enim cumque quae hic quidem excepturi, blanditiis accusamus distinctio nesciunt fugiat, sed iure dolor odio? Ullam.</p>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <h1 className="font-bold underline">Flex</h1>

            <div className="flex gap-4 mt-10">
                <div className="card shrink-0 basis-1/4 sm:basis-1/3">1</div>
                <div className="card shrink-0 basis-1/4 sm:basis-1/3">2</div>
                <div className="card shrink-0 basis-1/2 sm:basis-1/3">3</div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <h1 className="font-bold underline">Grid</h1>


            <div className="p-4">
                <div className="grid grid-cols-4 gap-8">
                    <div className="card2 col-span-2">1</div>
                    <div className="card2">2</div>
                    <div className="card2">3</div>
                    <div className="card2 row-[3/5] col-start-4">4</div>
                    <div className="card2">5</div>
                    <div className="card2">6</div>
                    <div className="card2 col-start-2 col-end-4">7</div>
                    <div className="card2">8</div>
                    <div className="card2">9</div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <h1 className="font-bold underline">Darkmode</h1>

            <div
                className="bg-white w-[100%] h-100 dark:bg-slate-900"
            >

                <button
                    className="dark:bg-slate-500 dark:text-white"
                    onClick={ toggleDarkmode }
                >
                    Toggle Darkmode
                </button>

            </div>


        </>
    )
}
