import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer'

const WebsitePage = () => {
  return (
    <div>
        <header>
            <Header />
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default WebsitePage