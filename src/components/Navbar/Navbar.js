import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <Link to="/"> <li className="items">Home</li> </Link>
     <Link to="account/signIn"> <li className="items">Login</li> </Link>
      <Link to="account/create"><li className="items">Join</li> </Link>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}