import React from 'react'
import './styles.css'
import pokeballNext from '../../assets/pokeball-next.png'
import pokeballPrevious from '../../assets/pokeball-previous.png'

const PokemonNavBar = ({ onNext, onPrevious, showNext, showPrevious }) => {
    return (
        <div className='navbar__container'>
            {showPrevious &&
                <div>
                    <a href='#' onClick={() => onPrevious()}>
                        <img className='navbar__paginator-icon' src={pokeballPrevious} alt='previous' />
                    </a>
                </div>
            }

            <h1 className='navbar__title'>POKE-REACT</h1>
            {showNext &&
                <div>
                    <a href='#' onClick={() => onNext()}>
                        <img className='navbar__paginator-icon' src={pokeballNext} alt='next' />
                    </a>
                </div>
            }
        </div>
    )
}

export default PokemonNavBar