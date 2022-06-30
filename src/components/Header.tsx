import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import '../styles/header.css'

function Header() {
  return (
    <header>
      <div className='large-container'>
        <a href='/' className='logo'>Hello React TS</a>

        <ul className='global-nav'>
          <li><NavLink to='/'>Top</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>

        <button className='bars-button'>
          <FaBars className='bars'/>
        </button>

      </div>
    </header>
  )
}

export default Header