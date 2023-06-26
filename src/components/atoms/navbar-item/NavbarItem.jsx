import React from 'react' 
import './NavbarItem.scss';

const NavbarItem = (props) => {
  return (
		<li>
			<a href={'#'+props.link}>{props.link}</a>
		</li>
	);
}

export default NavbarItem