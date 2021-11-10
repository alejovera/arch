import React from 'react'
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {AboutUs} from './components/AboutUs/AboutUs';
import {Projects} from './components/Projects/Projects';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <AboutUs />
      <Projects />
      <Footer />
    </React.Fragment>
  )
}

export default App
