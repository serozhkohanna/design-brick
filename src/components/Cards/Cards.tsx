import React, { FC, useState } from 'react';
import './Cards.scss';
import EyeIcon from '../../assets/icons/eye-open.svg';
import EyeCloseIcon from '../../assets/icons/eye-close.svg';
import { connect } from "react-redux";
import { Design } from "../../constants/interfaces";

interface Props {
  designData: Design
}

const Cards: FC<Props> = ({designData}) => {
  console.log(designData, 'design data');
  const [deviceMode, setDevice] = useState('desktop');
  const [nightMode, setNightMode] = useState(false);
  const [isPreviewOpen, setPreview] = useState(false);

  const handlePreviewOpen = () => {
	setPreview(!isPreviewOpen);
  }

  const handleDeviceClick = (device) => {
	setDevice(device);
  }

  const handleNightClick = () => {
	setNightMode(!nightMode);
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
	  <div className={`card-accordion ${isPreviewOpen && 'is-open'} ${nightMode && 'night'}`}>
		<div className="card-accordion-content">
		  <div className="navigation">
			<div className={`day-mode ${nightMode && 'night'}`} onClick={handleNightClick}>
			  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
				  d="M29.9667 16.7194C29.9667 16.7194 21.7494 24.6799 14.0342 19.3394C3.15288 11.8075 13.7172 0 13.7172 0C13.7172 0 8.25478 0.355986 3.7677 5.05669C1.26429 7.67934 0 11.3749 0 14.9689C0 18.9837 1.59731 22.7583 4.49788 25.5975C7.39869 28.4365 11.2552 30 15.3574 30C19.03 30 22.6304 28.7624 25.3653 26.37C30.6924 21.7094 29.9667 16.7194 29.9667 16.7194Z"
				  fill="#444444"/>
			  </svg>
			</div>
			<div className="mode-buttons">
			  <button className={`${deviceMode === 'mobile' && 'is-active'} button`} onClick={() => handleDeviceClick('mobile')}>
				<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <path
					d="M8.52941 0H1.47059C1.0807 0.000432237 0.706903 0.153508 0.431209 0.425645C0.155515 0.697782 0.000437888 1.06675 0 1.45161V16.5484C0.000437888 16.9332 0.155515 17.3022 0.431209 17.5744C0.706903 17.8465 1.0807 17.9996 1.47059 18H8.52941C8.9193 17.9996 9.2931 17.8465 9.56879 17.5744C9.84449 17.3022 9.99956 16.9332 10 16.5484V1.45161C9.99956 1.06675 9.84449 0.697782 9.56879 0.425645C9.2931 0.153508 8.9193 0.000432237 8.52941 0ZM6.99419 0.580645L6.81772 1.45161H3.18232L3.00585 0.580645H6.99419ZM9.41177 16.5484C9.4115 16.7793 9.31846 17.0007 9.15304 17.164C8.98762 17.3272 8.76335 17.4191 8.52941 17.4194H1.47059C1.23665 17.4191 1.01238 17.3272 0.84696 17.164C0.681544 17.0007 0.588498 16.7793 0.588235 16.5484V1.45161C0.588498 1.2207 0.681544 0.999314 0.84696 0.836032C1.01238 0.67275 1.23665 0.580904 1.47059 0.580645H2.40592L2.65276 1.79887C2.66609 1.86469 2.70212 1.92391 2.7547 1.96646C2.80729 2.00901 2.87318 2.03226 2.94118 2.03226H7.05882C7.12682 2.03226 7.19271 2.00901 7.2453 1.96646C7.29788 1.92391 7.33391 1.86469 7.34724 1.79887L7.59408 0.580645H8.52941C8.76335 0.580904 8.98762 0.67275 9.15304 0.836032C9.31846 0.999314 9.4115 1.2207 9.41177 1.45161V16.5484Z"
					fill="#444444"/>
				  <path
					d="M3.23528 16.2581H1.47057C1.39257 16.2581 1.31776 16.2886 1.2626 16.3431C1.20744 16.3975 1.17645 16.4714 1.17645 16.5484C1.17645 16.6254 1.20744 16.6992 1.2626 16.7537C1.31776 16.8081 1.39257 16.8387 1.47057 16.8387H3.23528C3.31328 16.8387 3.38809 16.8081 3.44325 16.7537C3.49841 16.6992 3.52939 16.6254 3.52939 16.5484C3.52939 16.4714 3.49841 16.3975 3.44325 16.3431C3.38809 16.2886 3.31328 16.2581 3.23528 16.2581Z"
					fill="#444444"/>
				  <path
					d="M4.41178 16.2581H4.11766C4.03966 16.2581 3.96485 16.2886 3.90969 16.3431C3.85453 16.3975 3.82355 16.4714 3.82355 16.5484C3.82355 16.6254 3.85453 16.6992 3.90969 16.7537C3.96485 16.8081 4.03966 16.8387 4.11766 16.8387H4.41178C4.48979 16.8387 4.5646 16.8081 4.61976 16.7537C4.67491 16.6992 4.7059 16.6254 4.7059 16.5484C4.7059 16.4714 4.67491 16.3975 4.61976 16.3431C4.5646 16.2886 4.48979 16.2581 4.41178 16.2581Z"
					fill="#444444"/>
				</svg>
				Mobile
			  </button>
			  <button className={`${deviceMode === 'desktop' && 'is-active'} button`} onClick={() => handleDeviceClick('desktop')}>
				<svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <path
					d="M13.3334 13.5C13.3334 13.8314 12.9603 14.1 12.5001 14.1C12.0399 14.1 11.6667 13.8314 11.6667 13.5C11.6667 13.1687 12.0399 12.9 12.5001 12.9C12.9603 12.9 13.3334 13.1687 13.3334 13.5Z"
					fill="#444444"/>
				  <path d="M9.16667 15.9V17.4H6.25V18H18.75V17.4H15.8333V15.9H15V17.4H10V15.9H9.16667Z" fill="#444444"/>
				  <path
					d="M23.75 0H1.25C0.559896 0.000585937 0.000813802 0.403125 0 0.9V14.4C0.000813802 14.8969 0.559896 15.2994 1.25 15.3H23.75C24.4401 15.2994 24.9992 14.8969 25 14.4V0.9C24.9992 0.403125 24.4401 0.000585937 23.75 0ZM24.1667 14.4C24.1665 14.5657 23.9801 14.6999 23.75 14.7H1.25C1.0199 14.6999 0.833537 14.5657 0.833333 14.4V12.3H24.1667V14.4ZM24.1667 11.7H0.833333V0.9C0.833537 0.734326 1.0199 0.600146 1.25 0.6H23.75C23.9801 0.600146 24.1665 0.734326 24.1667 0.9V11.7Z"
					fill="#444444"/>
				</svg>
				Desktop
			  </button>
			</div>
			<div className='close-preview' onClick={handlePreviewOpen}>
			  <img className='preview-icon' src={EyeCloseIcon} alt="eye-close"/>
			  CLOSE PREVIEW
			</div>
		  </div>
		</div>
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