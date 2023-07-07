import React from 'react' 
import './NavbarItem.scss';

const NavbarItem = (props) => {
  return (
		<li className='nav-item'>
			<a href={'#'+props.link}>{props.link}</a>
		</li>
	);
}

export default NavbarItem