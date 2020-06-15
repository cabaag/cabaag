import React from 'react';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

export default function App() {
   return (
      <div className="App">
         <header className="App-header">
            <Nav />
         </header>
         <main className="container">
            <Main />
            <About odd />
            <Experience />
            <Skills odd />
            <Projects />
            <Contact odd />
         </main>
         <Footer />
      </div>
   );
}
