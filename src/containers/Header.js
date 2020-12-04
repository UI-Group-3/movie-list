import React from 'react';
import {useMediaQuery} from 'react-responsive'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Header = () => {
    const bIsDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    })

    return (
<<<<<<< HEAD
        <div>
            {bIsDesktop ? <Navbar/> : <Sidebar/>}
        </div>
=======
        <h1>This is Header</h1>
>>>>>>> 2186bf98ba576225def940cd7c2c39c7173560d5
    )
};

export default Header;