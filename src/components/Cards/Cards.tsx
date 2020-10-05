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

		</div>
	  </div>
	</div>
	<div className="card-accordion">

	</div>
  </section>
}

export default Cards;