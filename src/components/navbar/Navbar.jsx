import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

//for reuseble code  make const menu use code by <Menu/> further  
// #Home #wgpt links are connected to ids for redirect pages

const Menu = () => (
  <>
  <p><a href='#Home'>Home</a></p>
  <p><a href='#wgpt4'>What is GPT?</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)


//Bem --> Block Element Modifier 

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false); 

// className='gpt4__navbar' for laptop view  & className='gpt4__navbar-menu' for mobile view  toggle

  return (
    <div className='gpt4__navbar'>
      <div className='gpt4__navbar-links'>
       <div className='gpt4__navabar-links_logo'>
        <img src={logo} alt='logo' />
       </div>
       <div className='gpt4__navbar-links_container'>
        <Menu/>
       </div>
       </div>
       <div className='gpt4__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      
       <div className='gpt4__navbar-menu'>
        {toggleMenu 
         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) }/>
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true) }/>
        }
        {toggleMenu && (
          <div className='gpt4__navbar-menu_container scale-up-center'>
            <div className='gpt4__navbar-menu_container-links'>
               <Menu />
      <div className='gpt4__navbar-menu_container-links-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
            </div>
          </div>
        )}

       </div>
    </div>
  )
}

export default Navbar
