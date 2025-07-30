import React from 'react'
import { Navbar, WeeklyHighlights, TableDefault } from '../../components'
import { NavLink } from 'react-router-dom'
import './style.css'

import imagemLivro from '/src/assets/images/madame-bovary.jpg'

import imageFourStars from '/src/assets/vectors/Four-stars.svg'

export default function Book() {
  return (
    <>
      <Navbar />
      <div className='container-principal'>
        <div className='container-book'>
          <WeeklyHighlights
            bookImage={imagemLivro}
            bookName="Madame Bovary"
            readers="5K"
            libraries="150"
            likes="18K"
          />
          <div className='recommendation'>
            <TableDefault 
              culName="Onde Comprar?"
              item1="Amazon.com"
            />
          </div>
        </div>

        <div className='divider-vertical'></div>

        <div className='container-datails'>
          <div className='details-introduction'>
            <h1>Madame Bovary</h1>
            <h2>2010</h2>
            <h3>Escrito por: </h3>
            <h4>Gustave Flaubert</h4>
          </div>
        </div>
        <div className='container-rating'>
          <TableDefault 
              culName="Nota"
              item1='/src/assets/vectors/Four-stars.svg'
            />
        </div>
      </div>
      <Navbar />
    </>
  )
}