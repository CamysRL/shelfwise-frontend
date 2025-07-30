import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './style.css'

import searchIcon from '/src/assets/vectors/Search.svg';

export default function navbar() {
    const location = useLocation()

    return (
        <div className="navbar">
            <div className='navbar-infos'>
                <div className="logotype"><NavLink to={'/'} className='logotype'>ShelfWise</NavLink></div>
                <div className="links">
                    <NavLink to={'/'} className={location.pathname === '/' ? 'active-page' : ''}>Início</NavLink>
                    <NavLink to={'/login'} className={location.pathname === '/login' ? 'active-page' : ''}>Login</NavLink>
                    <NavLink to={'/register'} className={location.pathname === '/register' ? 'active-page' : ''}>Cadastro</NavLink>
                    <NavLink to={'/register'} className={location.pathname === '/register' ? 'active-page' : ''}>Livros</NavLink>
                    <NavLink to={'/register'} className={location.pathname === '/register' ? 'active-page' : ''}>Bibliotecas</NavLink>
                    <NavLink to={'/register'} className={location.pathname === '/register' ? 'active-page' : ''}>Membros</NavLink>
                </div>
                <div className='input-search'>
                    <form action='' method='post'>
                        <div className='input-container'>
                            <input type='text' name='search' className='input-text' required />
                            <input type='image' src={searchIcon} alt='Search' />
                        </div>
                    </form>
                </div>
            </div>
            <div className='divider'></div>
        </div>
    )
}