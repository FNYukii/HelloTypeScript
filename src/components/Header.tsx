import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import '../styles/header.css'

function Header() {
  return (
    <header>
      <div className='large-container'>
        <a href='/' className='logo'>Hello React TS</a>

        <ul className='global-nav'>
          <li><NavLink to='/'>Read</NavLink></li>
          <li><NavLink to='/read-realtime'>Read Realtime</NavLink></li>
          <li><NavLink to='/create'>Create</NavLink></li>
        </ul>

        <button className='bars-button'>
          <FaBars className='bars'/>
        </button>

      </div>
    </header>
  )
}

export default Header