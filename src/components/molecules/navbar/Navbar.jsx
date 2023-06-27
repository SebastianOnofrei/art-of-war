import React from 'react'
import './Navbar.scss';
import logo from '../../../assets/ArtOfWarLogo.png';
import NavbarItem from '../../atoms/navbar-item/NavbarItem';

const Navbar = () => {

  let links= ['About','Battles','Battle Requirements','Opinions'];

  return (
    <nav>
      <img src={logo} alt="Art of war logo" />
      <ul className='links'>
        {links.map((link,index)=><NavbarItem key={index} link={link}/>)}
      </ul>
    </nav>
  )
}

export default Navbar