import React, { FC } from 'react';
import './Tooltip.scss';

interface Props {
  type?: string;
  message?: string;
}

const Tooltip: FC<Props> = ({type, message}) => {
  return <div className='tooltip'>{message}</div>
}

export default Tooltip;