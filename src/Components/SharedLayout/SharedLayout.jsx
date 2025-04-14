import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import YoutubeVideos from '../YoutubeVideos/YoutubeVideos'
import Footer from '../Footer/Footer'

function SharedLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <YoutubeVideos/>
        <Footer/>
 
    
    </div>
  )
}

export default SharedLayout