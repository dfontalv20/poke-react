import React from 'react'

const PokemonCardStat = ({stat}) => {
  return (
    <div className='card__stat-container'>
        <span className='card__stat-text card__stat-name'>{stat.stat.name}</span>
        <span className='card__stat-text card__stat-value'>{stat.base_stat}</span>
    </div>
  )
}

export default PokemonCardStat