import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main/Main';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<Nav />
				</header>
				<main className="container">
					<Main />
					<About />
					<Experience />
					<Skills />
					<Contact />
				</main>
			</div>
		</>
	);
}

export default App;
