import { useState, useEffect } from 'react';
import './App.css'
import PokemonCard from './Components/PokemonCard';
import fetchPokemon  from './API/FetchPokemon_API';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPage = async () => {
      const results = await fetchPokemon(page);
      setPokemons(results)
    };
    loadPage();
  }, [page]);
  return (
    <div className="pokedex">
      <h1 className="title">Pokédex</h1>
      <div className="card-grid">
        {pokemons.filter(p => p).map(p => (
          <PokemonCard key={p.id} data={p.getData} onClick={() => setSelected(p)}/>
        ))}
      </div>
      <div className='pagination-container'>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
         {'<'}  
        </button>
        <span className="page-number">{page}</span>
        <button onClick={() => setPage(page + 1)}>
         {'>'}
        </button>
      </div>
    </div>
  );
}



export default App
