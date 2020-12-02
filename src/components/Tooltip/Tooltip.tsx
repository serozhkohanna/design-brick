import React, { FC } from 'react';
import './Tooltip.scss';
import { connect } from 'react-redux';
import { removeTooltip } from "../../actions/action";
import CrossIcon from '../../assets/icons/cross.svg';

interface Props {
  type: string;
  message: string;
  removeTooltip: Function;
  index: number;
}

const Tooltip: FC<Props> = ({type, message, removeTooltip, index}) => {
  return <div className={`tooltip ${type}`}>
    <span className="btn-close" onClick={() => removeTooltip(index)}>
      <img src={CrossIcon} alt="close"/>
    </span>
    {message}</div>
}

const mapDispatchToPtops = {
  removeTooltip
}
export default connect(null, mapDispatchToPtops)(Tooltip);