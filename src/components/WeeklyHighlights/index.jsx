import React from 'react'
import './style.css'

import heart from '/src/assets/vectors/Heart.svg'
import read from '/src/assets/vectors/Read.svg'
import library from '/src/assets/vectors/Library.svg'

export default function WeeklyHighlights({ bookImage, bookName, readers, libraries, likes }) {
    return (
        <div className="image-container">
            <img className='book' src={bookImage} alt={bookName} />
            <div className='container-features'>
                <div className='item'>
                    <img src={read} alt='like' />
                    <p>{readers}</p>
                </div>
                <div className='item'>
                    <img src={library} alt='like' />
                    <p>{libraries}</p>
                </div>
                <div className='item'>
                    <img src={heart} alt='like' />
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    )
}