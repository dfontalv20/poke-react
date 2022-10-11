import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/Card/PokemonCard';
import PokemonNavBar from './components/Navbar/PokemonNavBar';
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
  }, [paginatorURLs.current])


  const loadList = async () => {
    const list = await getPokemonList(paginatorURLs.current)
    const pokemonsResponses = await Promise.allSettled(list.results.map(pokemon => getPokemonData(pokemon.name)))
    setPokemonList(pokemonsResponses.map(res => res.value))
    setPaginatorURLs({
      current: paginatorURLs.current,
      next: list.next,
      previous: list.previous
    })
  }

  return (
    <div className='background'>
      <div className='container'>
        <PokemonNavBar

          showNext={paginatorURLs.next}
          showPrevious={paginatorURLs.previous}
          onNext={() => setPaginatorURLs(prev => ({ current: prev.next }))}
          onPrevious={() => setPaginatorURLs(prev => ({ current: prev.previous }))}
        />
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
          {pokemonList.map((pokemon, key) =>
            <div className='col' key={key}>
              <PokemonCard pokemon={pokemon} />
            </div>)
          }
        </div>
      </div>
    </div>

  );
}

export default App;
