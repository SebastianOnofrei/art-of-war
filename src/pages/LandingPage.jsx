import React from 'react'
import About from "../components/organisms/about/About";
import Battle_Requirements from "../components/organisms/battle-requirements/Battle_Requirements";
import Battles from "../components/organisms/battles/Battles";
import Hero from "../components/organisms/hero/Hero";
import Newsletter from "../components/organisms/newsletter/Newsletter";
import Testimonials from "../components/organisms/testimonials/Testimonials";
import Footer from "../components/organisms/footer/Footer";

const LandingPage = () => {
  return (
		<>
			{/* <Hero />
			<About />
			<Battles />
			<Battle_Requirements /> */}
			<Testimonials />
			{/* <Newsletter />
			<Footer /> */}
		</>
	);
}

export default LandingPage