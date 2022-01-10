import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

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
        <div>
                    <Link  class="items" to="/Login">
                      Login
                    </Link>
                
                    <Link  class="items" to="/Register">
                      Register
                    </Link>
                    <Link  class="items" to="/Dashboard">
                      Dashboard
                    </Link>
                    </div>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}