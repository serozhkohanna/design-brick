import React, { FC, useState } from 'react';
import './Cards.scss';
import EyeIcon from '../../assets/icons/eye-open.svg';
import { connect } from "react-redux";
import { Design } from "../../constants/interfaces";

interface Props {
  designData: Design
}

const Cards: FC<Props> = ({designData}) => {
  console.log(designData, 'design data');
  const [deviceMode, setDevice] = useState('desktop-mode');

  const handlePreviewOpen = () => {

  }

  //@ts-ignore
  return designData.map(item => {
	return <section key={item.id} className='card-section'>
	  <div className={`card-main ${deviceMode}`}>
		<div className="card-title">
		  {item.name}
		</div>
		<div className="card-content">
		  <div className="left-side">
			<div className="name-holder">
			  <h3>{item.name}</h3>
			</div>
			<div className="pallet-holder">
			  <div className="pallet is-active">
				{item.colors.palette.map((color, i) => {
				  return <div className='pallet-item' key={i} style={{'background': color}}>

				  </div>
				})}
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
				Headline {item.font.name}
			  </div>
			  <div className="subheadline mb-auto">
				Subheadline {item.font.name}
			  </div>
			  <div className="text-muted mb-auto">
				Muted text {item.font.name}
			  </div>
			  <div className="text mb-auto">
				Body Text is just that, a style intended for the ordinary text of the body of a document. By default it
				is
				identical to Normal except for having 6 pts Spacing After.
				By default it is identical to Normal except for having 6 pts Spacing After.
			  </div>
			</div>
			<div className="colors">
			  {item.colors.palette.map((color, i) => {
				return <span className='colors-item' key={i} style={{'background': color}}>

				</span>
			  })}
			  <span className="colors-item" style={{'background': item.colors.bodyColor}}/>
			</div>
			<div className="gradient-range"
				 style={{'background': `linear-gradient(270deg, ${item.colors.palette[1]} 0.92%, ${item.colors.palette[0]} 101.15%)`}}>
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