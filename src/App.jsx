import { useState, useEffect } from 'react';
import './App.css'
import PokemonCard from './Components/PokemonCard';
import fetchPokemon  from './API/FetchPokemon_API';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadPokemons = async () => {
      const ids = Array.from({ length: 15 }, (_, i) => i + 1); // Get IDs 1–15
      const results = await Promise.all(ids.map(id => fetchPokemon(id)));
      setPokemons(results.filter(Boolean)); // Remove nulls
    };

    loadPokemons();
  }, []);
  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <div className="card-grid">
        {pokemons.map(p => (
          <PokemonCard
            key={p.id}
            data={p.getData}
            onClick={() => setSelected(p)}
          />
        ))}
      </div>
    </div>
  );
}



export default App
