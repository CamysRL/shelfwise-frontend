import React from 'react'
import { Navbar, FeatureSection, WeeklyHighlights, ListReview, RecommendedLibraries } from '../../components'
import { NavLink } from 'react-router-dom'
import './style.css'


import imagemLivro from '/src/assets/images/madame-bovary.jpg'

import imagemBook from '/src/assets/vectors/Open-book.svg'

import imagemLibrary from '/src/assets/vectors/Library-White.svg'

import imagemLike from '/src/assets/vectors/Heart-White.svg'

import imagemLikeRed from '/src/assets/vectors/Heart.svg'

import imagemList from '/src/assets/vectors/List.svg'

import imagemStar from '/src/assets/vectors/Star-White.svg'

import imagemCalendar from '/src/assets/vectors/Calendar.svg'

import imageFiveStars from '/src/assets/vectors/Five-stars.svg'

import imageFourStars from '/src/assets/vectors/Four-stars.svg'

import imageThreeStars from '/src/assets/vectors/Three-stars.svg'

import imageTwoStars from '/src/assets/vectors/Two-stars.svg'

import imageOneStar from '/src/assets/vectors/One-star.svg'


export default function Home() {
  return (
    <div className='principal'>
      <div className='introducion'>
        <h1>Salve os livros que já leu ou quer ler. Conte ao mundo o que você achou!</h1>
        <a href='/login'>Começar</a>
      </div>
      <div className='popular-books'>
        <h2>Veja os queridinhos de uma semana</h2>
        <div className='books'>
          <NavLink to={'/book'} className='link-book'>
            <WeeklyHighlights
              bookImage={imagemLivro}
              bookName="Madame Bovary"
              readers="5K"
              libraries="150"
              likes="18K"
            />
          </NavLink>
          <NavLink to={'/book'} className='link-book'>
            <WeeklyHighlights
              bookImage={imagemLivro}
              bookName="Madame Bovary"
              readers="5K"
              libraries="150"
              likes="18K"
            />
          </NavLink>
          <NavLink to={'/book'} className='link-book'>
            <WeeklyHighlights
              bookImage={imagemLivro}
              bookName="Madame Bovary"
              readers="5K"
              libraries="150"
              likes="18K"
            />
          </NavLink>
          <NavLink to={'/book'} className='link-book'>
            <WeeklyHighlights
              bookImage={imagemLivro}
              bookName="Madame Bovary"
              readers="5K"
              libraries="150"
              likes="18K"
            />
          </NavLink>
          <NavLink to={'/book'} className='link-book'>
            <WeeklyHighlights
              bookImage={imagemLivro}
              bookName="Madame Bovary"
              readers="5K"
              libraries="150"
              likes="18K"
            />
          </NavLink>
        </div>
      </div>


      <div className='features'>
        <h2>No ShelfWise você pode</h2>
        <div className='features-items'>
          <FeatureSection
            imageFeature={imagemBook}
            altFeature="livro aberto"
            textFeature="Acompanhar todos os livros que você já leu."
          />
          <FeatureSection
            imageFeature={imagemLike}
            altFeature="like"
            textFeature="Mostrar seu amor ao seus livros favoritos, bibliotecas e reviews com o “like”. "
          />
          <FeatureSection
            imageFeature={imagemList}
            altFeature="lista"
            textFeature="Escrever e compartilhar suas reviews, e seguir seus amigos e outros membros para ler a deles."
          />
          <FeatureSection
            imageFeature={imagemStar}
            altFeature="estrela"
            textFeature="Avaliar cada livro em uma escala de cinco estrelas para registrar sua reação."
          />
          <FeatureSection
            imageFeature={imagemCalendar}
            altFeature="calendario"
            textFeature="Manter um diario de leitura."
          />
          <FeatureSection
            imageFeature={imagemLibrary}
            altFeature="biblioteca icon"
            textFeature="Criar e compartilhar listas de livros sobre qualquer assunto e manter uma lista de livros para ler."
          />
        </div>
      </div>

      <div className='populars'>
        <div className='popular-review'>
          <div className='tittle'>
            <h3>Reviews populares da semana</h3>
            <a href=''>MAIS</a>
          </div>
          <div className='divider'></div>
          <div className='reviews'>
            <ListReview
              imageBook={imagemLivro}
              bookTittle="Madame Bovary"
              bookYear="2010"
              imageProfile={imagemLivro}
              nameProfile="Camilly Lima"
              star={imageFourStars}
              numComments="60"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              likes="110"
            />
          </div>
          <div className='divider'></div>
          <div className='reviews'>
            <ListReview
              imageBook={imagemLivro}
              bookTittle="Madame Bovary"
              bookYear="2010"
              imageProfile={imagemLivro}
              nameProfile="Pep3"
              star={imageFiveStars}
              heart={imagemLikeRed}
              numComments="120"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              likes="88"
            />
          </div>
        </div>

        <div className='popular-library'>
          <div className='tittle'>
            <h3>Bibliotecas populares da semana</h3>
            <a href=''>MAIS</a>
          </div>
          <div className='divider'></div>
          <div className='libraries'>
            <RecommendedLibraries 
              imageBookOne={imagemLivro}
              nameBookOne="Madame Bovary"
              imageBookTwo={imagemLivro}
              nameBookTwo="Madame Bovary"
              imageBookThree={imagemLivro}
              nameBookThree="Madame Bovary"
              imageBookFour={imagemLivro}
              nameBookFour="Madame Bovary"
              imageBookFive={imagemLivro}
              nameBookFive="Madame Bovary"
              libraryName="Com meu amor"
              profilePhoto={imagemLivro}
              profileName="Pep3"
              numComments="20"
              numLikes="104"
            />
          </div>
          <div className='divider'></div>
          <div className='libraries'>
            <RecommendedLibraries 
              imageBookOne={imagemLivro}
              nameBookOne="Madame Bovary"
              imageBookTwo={imagemLivro}
              nameBookTwo="Madame Bovary"
              imageBookThree={imagemLivro}
              nameBookThree="Madame Bovary"
              imageBookFour={imagemLivro}
              nameBookFour="Madame Bovary"
              imageBookFive={imagemLivro}
              nameBookFive="Madame Bovary"
              libraryName="Clube do Medo Literários"
              profilePhoto={imagemLivro}
              profileName="Camilly Lima"
              numComments="2"
              numLikes="10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}