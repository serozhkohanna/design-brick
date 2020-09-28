import React, { FC } from "react";
import './Notification.scss';
import StarIcon from '../../assets/icons/star.svg';

interface Props {
  text: string;
  btnText: string;
  setClick: Function;
}

const Notification: FC<Props> = ({text, btnText, setClick}) => {
  return <div className='notification'>
	<img className='icon' src={StarIcon} alt="star-icon"/>
	<p>{text}</p>
	<button className="btn-link" onClick={() => setClick()}>{btnText}</button>
  </div>
}

export default Notification;