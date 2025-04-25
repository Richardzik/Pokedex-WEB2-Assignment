import '../App.css'
import PokemonCard from '../Components/PokemonCard';
import Pagination from '../Components/Pagination';

export default function PokedexPage({pokemons, page, setPage}) {
    return (
    <>
      <h1 className="title">Pokédex</h1>
      <div className="card-grid">
        {pokemons.filter(p => p).map(p => (
          <PokemonCard key={p.id} data={p.getData} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}   