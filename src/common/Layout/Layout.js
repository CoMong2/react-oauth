/* eslint-disable */
import './Layout.scss';
import { useEffect, useState } from 'react';
import PageTitle from './PageTitle/PageTitle';
import Sidebar from './SideBar/Sidebar';


const Layout = ({ title }) => {
    return (
        <div className='Layout'>
            <Sidebar/>
            <div className='Page'>
                <PageTitle title={ title } />
            </div>
        </div>
    )
}

export default Layout;