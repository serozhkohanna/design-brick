import React, { useState } from "react";
import './Header.scss';

const Header = () => {
  const [isVisible, setVisible] = useState(false);

  return <header>
	<h1>Brick</h1>
	<p className={`text ${isVisible && 'is-visible'}`}>
	  LIBRARY WITH INSPIRATIONAL UI combinations FOR YOU WEBSITES!
	</p>
  </header>
}

export default Header;