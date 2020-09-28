import React, { useState } from "react";
import './Hero.scss';
import Notification from "../Notification/Notification";
import Confetti from 'react-confetti'

const Hero = () => {
  const [isAnimated, setAnimated] = useState(false);
  const runAnimation = () => {
	setAnimated(true);
  }

  return <section className='hero-section'>
	<div className="hero-title">
	  Hi! Wanna some design?
	</div>
	<Notification setClick={runAnimation} text='Library with design ideas!' btnText='Got it!'/>
	{isAnimated && <Confetti recycle={false} tweenDuration={1000}/>}
  </section>
}

export default Hero;