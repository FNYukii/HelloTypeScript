import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div>
        <a href='/'>Hello React</a>

        <ul>
          <li><NavLink to='/'>Top</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>

      </div>
    </header>
  )
}

export default Header