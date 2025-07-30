import React from 'react'
import './style.css'

import imagemComments from '/src/assets/vectors/Speech.svg'

export default function ListReview({ imageBook, bookTittle, bookYear, imageProfile, nameProfile, star, heart, numComments, review, likes }) {
    return (
        <div className="container-review">
            <div className="imageBookReview">
                <img src={ imageBook } alt={ bookTittle } />
            </div>
            <div className='review-content'>
                <div className='book-details'>
                    <h4>{bookTittle}</h4>
                    <p>{bookYear}</p>
                </div>
                <div className='profile-details'>
                    <div className='profile-fist-line'>
                        <img className='profile-photo' src={imageProfile} alt='foto de perfil' />
                        <p>{nameProfile}</p>
                        <img className='icons' src={star} alt='estrela' />
                        {heart && (
                            <img className='icons' src={heart} alt='like' />
                        )}
                        <div className='comments-section'>
                            <img className='icons' src={ imagemComments } alt='comentario' />
                            <p>{numComments}</p>
                        </div>
                    </div>
                </div>
                <div className='review-details'>
                    <div className='text-review'>
                        <p>{review}</p>
                    </div>
                    <p className='likes'>{likes} likes</p>
                </div>

            </div>
        </div>
    )
}