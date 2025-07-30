import React from 'react'
import './style.css'


import imagemComments from '/src/assets/vectors/Speech.svg'

import imagemLikes from '/src/assets/vectors/Heart-grey.svg'


export default function RecommendedLibraries({ imageBookOne, nameBookOne, imageBookTwo, nameBookTwo,imageBookThree, nameBookThree, imageBookFour, nameBookFour, imageBookFive, nameBookFive, libraryName, profilePhoto,  profileName, numComments, numLikes}) {
    return (
        <div className="container-library">
            <div className='container-library-books'>
                <img src={imageBookOne} alt={nameBookOne}/>
                <img src={imageBookTwo} alt={nameBookTwo} />
                <img src={imageBookThree} alt={nameBookThree}/>
                <img src={imageBookFour} alt={nameBookFour} />
                <img src={imageBookFive} alt={nameBookFive} />
            </div>
            <div className='container-library-name'> 
                <h4>{libraryName}</h4>
            </div>
            <div className='container-library-infos'>
                <img className='profile-photo' src={profilePhoto} alt={profileName} />
                <h4>{profileName}</h4>
                <div className='section'>
                    <img className='icons' src={ imagemLikes } alt='comentario' />
                    <p>{numLikes}</p>
                </div>
                <div className='section'>
                    <img className='icons' src={ imagemComments } alt='comentario' />
                    <p>{numComments}</p>
                </div>  
            </div>
        </div>
    )
}