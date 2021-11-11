import React from 'react'
import {Navbar} from '../components/Navbar/Navbar';
import {Header} from '../components/Header/Header';
import {Company} from '../components/Company/Company';
import {Projects} from '../components/Projects/Projects';
import {Footer} from '../components/Footer/Footer';

function Home() {
    return (
        <React.Fragment>
        <Navbar />
        <Header />
        <Company />
        <Projects />
        <Footer />
        </React.Fragment>
    )
}

export default Home
  