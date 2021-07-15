import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import { Example } from '../example/example';
import SignInButton from '../signInButton/SignInButton';
import SignUpButton from '../signUpButton/SignUpButton';
import FindAStore from '../findAStore/FindAStore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice.js';
import LogoutButton from '../logoutButton/LogoutButton';

function Header({ menuPage }) {
  const user = useSelector(selectUser)

  return (
    <div className={`header ${menuPage && 'header__menuPage'}`}>
      <div className='header__left'>
        <Link className='header__logo' to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
            alt=''
          />
        </Link>
        <Link to='/menu' className='header__link'>
          Menu
        </Link>
        <Link className='header__link' to='/'>Rewards</Link>
        <Link className='header__link' to='/'>Gift Cards</Link>
      </div>
      <div className='header__right'>
        <Example />
        <FindAStore />
        {!user ? (
          <>
            <Link to='/account/signin'>
              <SignInButton />
            </Link>
            <Link to='/account/create'>
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div className='header__logout'>
            {menuPage ? <LogoutButton /> : <Link to='/menu'>Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
