/* eslint-disable */
import './Sidebar.scss';
import { useState } from 'react';
import Logo from '../../../asset/logo.png';

const Sidebar = () => {
    const handleLogout = async () => {
        window.location.href=process.env.REACT_APP_API_PATH + '/auth/logout';
    }

    return (
        <div className='Sidebar'>
            <section className='header' onClick={() => { }}>
                <img className='logo' src={Logo}/>
            </section>

            <section className='center'>
                <div className='center-box'>
                    what
                </div>
            </section>

            <section className='menu'>
                <div className='menu-title'>
                    <span>menu</span>
                </div>
            </section>

            <section className='logout' onClick={handleLogout}>
                <div className='logout-box'>
                Logout
                </div>
            </section>
        </div>
    )
}

export default Sidebar;