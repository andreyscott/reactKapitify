import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import image1 from '../../assets/images/image 1.svg'
// import image2 from '../../assets/images/image 2.svg'

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
      <Link to="/"> <image src={image1} /> </Link>
   
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}