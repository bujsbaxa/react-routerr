import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className="nav">
        <a href="#" className='logo'>Logo</a>
        <ul className="list">
            <li>
                <Link to="/" className="link">Главная</Link>
            </li>
            <li>
                <Link to="/products" className="link">Продукты</Link>
            </li>
            <li>
                <Link to="/users" className="link">Пользователи</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar