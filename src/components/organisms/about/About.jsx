import React from 'react'
import './About.scss';
import aboutImg1 from '../../../assets/about1.png';
import aboutImg2 from "../../../assets/about2.png";
import aboutImg3 from "../../../assets/about3.png";
import nextArrow from '../../../assets/switch.svg';

const About = () => {
  return (
		<section className="about" id="About">
			<div className="about-text">
				<h3>Who is general Sun Tzu?</h3>
				<h1>The greatest military strategist</h1>
				<p>
					The oldest available sources disagree as to where Sun Tzu was born.
					The Spring and Autumn Annals and Sima Qian's later Records of the
					Grand Historian (Shiji) state that Sun Tzu was born in Qi. Both
					sources also agree that Sun Tzu was born in the late Spring and Autumn
					period and that he was active as a general and strategist, serving
					King Helü of Wu in the late sixth century BC, beginning around 512 BC.
					Sun Tzu's victories then inspired him to write The Art of War. The Art
					of War was one of the most widely read military treatises in the
					subsequent Warring States period, a time of constant war among seven
					ancient Chinese states–Zhao, Qi, Qin, Chu, Han, Wei, and Yan–who
					fought to control the vast expanse of fertile territory in Eastern
					China.
				</p>
			</div>
			<div className="about-slideshow">
				<img src={aboutImg1} className="about-image-1" alt="about image 1" />
				<img src={aboutImg2} className="about-image-2" alt="about image 2" />
				<img src={aboutImg3} className="about-image-3" alt="about image 3" />
				<img
					src={nextArrow}
					alt=""
					className="about-slideshow__next-photo-arrow"
				/>
			</div>
		</section>
	);
}

export default About