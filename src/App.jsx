import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // <-- changed here
import './App.css'
import fetchPokemon from './API/FetchPokemon_API';
import PokedexPage from './pages/Pokedex_page';
import AboutPage from './pages/About_page';
import NavigationBar from './Components/NavigationBar';

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
    <Router> 
      <div className="pokedex">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<PokedexPage pokemons={pokemons} page={page} setPage={setPage} selected={selected} setSelected={setSelected} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
