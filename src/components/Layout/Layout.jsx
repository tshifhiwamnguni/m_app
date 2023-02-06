import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import classes from './Layout.module.scss'

function Layout() {
    return (
        <div className={classes.layout}>
            <Nav />

            <div className={classes.main}>
                <Outlet />
            </div>
            <Footer />

        </div>
    )
}

export default Layout