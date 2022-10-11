import React from 'react'
import PokemonCardStat from './PokemonCardStat'
import './styles.css'

const PokemonCard = ({ pokemon }) => {
  return (
      <div className='card__container'>
        <div className='card__image-container'>
          <img className='card__image'
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`${pokemon.name}`} />
        </div>
        <span className='card__title'>{pokemon.name}</span>
        <div className='card__description'>
          {pokemon.stats.map(stat => <PokemonCardStat stat={stat}/>)}
        </div>
      </div>
  )
}

export default PokemonCard