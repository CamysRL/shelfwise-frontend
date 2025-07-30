import React from 'react'
import { Navbar, InputDefault, ButtonDefault } from '../../components'
import { NavLink } from 'react-router-dom'
import './style.css'


export default function Login() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Entre</h1>
          <form className="login-form">
            <InputDefault type="email" label="Email" />
            <InputDefault type="password" label="Senha" />
            <ButtonDefault label="Entrar" />
          </form>
          <div className='container-info'>
            <p className='text'>Não possui conta? <NavLink to="/register" className='link'>Cadastre-se</NavLink></p>
          </div>
          <div className='container-info'>
            <NavLink to="/register" className='link'>Esqueceu a senha?</NavLink>
          </div>
        </div>
      </>
    );
  }