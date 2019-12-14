import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import i18n from './i18n';

function App() {
	return (
		<I18nextProvider i18n={i18n}>
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
		</I18nextProvider>
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
