import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/Card/PokemonCard';
import { getPokemonData, getPokemonList } from './services/Pokemon.service';


function App() {

  const [paginatorURLs, setPaginatorURLs] = useState({
    current: "https://pokeapi.co/api/v2/pokemon/",
    next: null,
    previous: null,
  })
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    loadList()
  }, [])


  const loadList = async () => {
    const list = await getPokemonList(paginatorURLs.current)
    console.log(list);
    const pokemonsResponses = await Promise.allSettled(list.results.map(pokemon => getPokemonData(pokemon.name)))
    setPokemonList(pokemonsResponses.map(res => res.value))
    setPaginatorURLs({
      current: paginatorURLs.current,
      next: paginatorURLs.next,
      previous: paginatorURLs.previous
    })
  }

  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
        {pokemonList.map(pokemon =>
          <div className='col'>
            <PokemonCard pokemon={pokemon} />
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
