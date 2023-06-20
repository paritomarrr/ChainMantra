import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/Menu/Menu'
import Courses from '../components/Courses/Courses'
import Tutorials from '../components/Tutorials/Tutorials'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Menu />
        <Courses />
        <Tutorials />
        <Articles />
        <Footer />
    </div>
  )
}

export default Homepage