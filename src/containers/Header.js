import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarButton from '../components/SidebarButton';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <SidebarButton/>
        </div>
    )
};

export default Header;