import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomDrawer from '../components/CustomDrawer'
import { Footer, Header } from '../components/Layout'

export default function MainLayout() {
    return (
        <>
            <Header/>
                <CustomDrawer/>
                <Outlet/>
            <Footer/>
        </>
    )
}
