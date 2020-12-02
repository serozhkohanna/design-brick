import React, { FC, useState } from "react";
import './Notification.scss';
import StarIcon from '../../assets/icons/star.svg';

interface Props {
  text: string;
  btnText: string;
  setClick: Function;
}

const Notification: FC<Props> = ({text, btnText, setClick}) => {
  const [isAnimated, setAnimation] = useState(false);
  const handleBtn = () => {
	setClick();
	setAnimation(true);
  }

  return <div className='notification'>
	<img className={`icon ${isAnimated && 'is-spin'}`} src={StarIcon} alt="star-icon"/>
	<p>{text}</p>
	{!isAnimated && <button className="btn-link" onClick={handleBtn}>{btnText}</button>}
  </div>
}

export default Notification;