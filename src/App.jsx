import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Main from './components/Main/Main';
import Nav from './components/Nav';
import Skills from './components/Skills/Skills';

function App() {
	return (
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
	);
}

function AppContainer() {
	return (
		<ParallaxProvider>
			<App />
		</ParallaxProvider>
	);
}

export default AppContainer;
