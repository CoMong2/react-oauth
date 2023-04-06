/* eslint-disable */
import './Sidebar.scss';
import { useState } from 'react';

const Sidebar = () => {
    const handleLogout = async () => {
        window.location.href=process.env.REACT_APP_API_PATH + '/auth/logout';
      }

    return (
        <div className='Sidebar'>
            <section className='header'>
                <div>Zanmang</div>
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