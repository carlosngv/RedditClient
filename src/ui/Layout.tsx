import { useState } from 'react'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
import { useAppSelector } from '../hooks/hooks';
import { Grid } from './components/Grid';

export const Layout = () => {

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const { isLoading, activeSubreddit } = useAppSelector( state => state.subReddits );



    const onToggleSidebar = () => {
        setToggleSidebar( !toggleSidebar );
    }

    return (

            !isLoading
            ? (
                <div className="h-screen max-sm:pt-32 layout-grid">

                    <button
                        className="toggle-sidebar-btn w-[4rem] h-[3rem] hover:bg-[#334140]"
                        onClick={ onToggleSidebar }
                    ><i className="fa-solid fa-bars"></i></button>

                    <Sidebar onToggle={ toggleSidebar } />

                    <Grid activeSubreddit={ activeSubreddit } />

                    <Footer />

                </div>
            )
            : (
                <div
                    className="flex h-screen justify-center  items-center"
                >
                    <h1 className="font-bold text-3xl"> Loading... </h1>
                </div>
            )


    )
}
