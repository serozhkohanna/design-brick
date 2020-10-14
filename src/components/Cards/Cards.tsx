import React, { FC } from 'react';
import './Cards.scss';
import EyeIcon from '../../assets/icons/eye-open.svg';
import { connect } from "react-redux";
import { Design } from "../../constants/interfaces";

interface Props {
  designData: Design
}

const Cards: FC<Props> = ({designData}) => {
  console.log(designData, 'design data');

  const handlePreviewOpen = () => {

  }

  //@ts-ignore
  return designData.map(item => {
	return <section key={item.id} className='card-section'>
	  <div className="card-main desktop-mode">
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
			<div className="preview-button" onClick={handlePreviewOpen}>
			  <img className='preview-icon' src={EyeIcon} alt="eye-open"/>
			  preview
			</div>
		  </div>
		  <div className="right-side">
			<div className="typography-block">
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
				Body Text is just that, a style intended for the ordinary text of the body of a document. By default it
				is
				identical to Normal except for having 6 pts Spacing After.
				By default it is identical to Normal except for having 6 pts Spacing After.
			  </div>
			</div>
			<div className="colors">
			  <span className="colors-item" style={{'background': 'pink'}}/>
			  <span className="colors-item" style={{'background': 'purple'}}/>
			  <span className="colors-item" style={{'background': 'grey'}}/>
			  <span className="colors-item" style={{'background': 'blue'}}/>
			</div>
			<div className="gradient-range"
				 style={{'background': 'linear-gradient(270deg, #EEA47F 0.92%, #00539C 101.15%)'}}>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="card-accordion">

	  </div>
	</section>
  })
}

// @ts-ignore
const mapStateToProps = ({design}) => {
  return {
	designData: design
  }
}

export default connect(mapStateToProps)(Cards);