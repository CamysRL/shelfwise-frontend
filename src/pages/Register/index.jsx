import React from 'react'
import { Navbar, InputDefault, ButtonDefault, InputCheckbox } from '../../components'
import { NavLink } from 'react-router-dom'
import './style.css'


export default function Register() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Cadastre-se</h1>
          <form className="login-form">
            <InputDefault type="email" label="Email" name='email'/>
            <InputDefault type="text" label="Nome Completo" name='nomeCompleto'/>
            <InputDefault type="date" label="Data de Nascimento" name='dataNasc' />
            <InputDefault type="password" label="Senha" name='senha'/>
            <InputDefault type="password" label="Corfirme sua Senha" name='senhaCorfimada'/>
            <InputCheckbox
            type="checkbox"
            label="Aceito a Política de Privacidade e concordo com o processamento das minhas informações pessoais de acordo com a mesma."
            name="politica"
            value="aceito"/>
            <ButtonDefault label="Cadastrar" />
          </form>
          <div className='container-info'>
            <p className='text'>Já possui conta? <NavLink to="/login" className='link'>Entrar</NavLink></p>
          </div>
        </div>
      </>
    )
  }