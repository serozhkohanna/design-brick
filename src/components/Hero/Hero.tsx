import React from "react";
import './Hero.scss';
import Notification from "../Notification/Notification";

const Hero = () => {
  const runAnimation = () => {
	console.log('run animation')
  }

  return <section className='hero-section'>
	<div className="hero-title">
	  Hi! Wanna some design?
	</div>
	<Notification setClick={runAnimation} text='Library with design ideas!' btnText='Got it!' />
  </section>
}

export default Hero;