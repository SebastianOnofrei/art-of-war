import React from 'react'
import './Hero.scss';
import Navbar from '../../molecules/navbar/Navbar';
import scrollDownTriangle from '../../../assets/scrollDown.svg';

const Hero = () => {
  return (
		<main>
			<Navbar />
			<div className="hero-text-container">
				<h1>THE ART OF WAR</h1>
				<h3>
					“When one treats people with benevolence, justice, and righteousness,
					and reposes confidence in them, the army will be united in mind and
					all will be happy to serve their leaders.” ―Sun Tzu
				</h3>
			</div>
			<button className="story-button">The story</button>
			<img src={scrollDownTriangle} alt=""  className='scrollDownTriange-image'/>
		</main>
	);
}

export default Hero