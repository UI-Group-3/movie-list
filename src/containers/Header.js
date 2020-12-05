import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Header = () => {
    const bIsDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    })

    return (

        <div>
            {bIsDesktop ? <Navbar /> : <Sidebar/>}
        </div>
    )
};

export default Header;