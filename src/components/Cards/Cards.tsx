import React from 'react';
import './Cards.scss';
import EyeIcon from '../../assets/icons/eye-open.svg';

const Cards = () => {
  return <section className='card-section'>
	<div className="card-main">
	  <div className="card-title">
		Classy
	  </div>
	  <div className="card-content">
		<div className="left-side">
		  <div className="name-holder">
			<h3>Classy</h3>
		  </div>
		  <div className="pallet-holder">
			<div className="pallet is-active">
			  <div className='pallet-item' style={{'background': 'pink'}}/>
			  <div className='pallet-item' style={{'background': 'grey'}}/>
			</div>
		  </div>
		  <div className="preview-button">
			<img className='preview-icon' src={EyeIcon} alt="eye-open"/>
			preview
		  </div>
		</div>
		<div className="right-side">
		  <div className="headline mb-auto">
			Headline Merriweather
		  </div>
		  <div className="subheadline mb-auto">
			Subheadline Merriweather
		  </div>
		  <div className="text-muted mb-auto">
			Muted text
		  </div>
		  <div className="text mb-auto">
			Body Text is just that, a style intended for the ordinary text of the body of a document. By default it is identical to Normal except for having 6 pts Spacing After.
			By default it is identical to Normal except for having 6 pts Spacing After.
		  </div>
		</div>
	  </div>
	</div>
	<div className="card-accordion">

	</div>
  </section>
}

export default Cards;