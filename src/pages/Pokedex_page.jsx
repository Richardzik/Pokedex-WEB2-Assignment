import '../App.css'
import PokemonCard from '../Components/PokemonCard';
import Pagination from '../Components/Pagination';
import PokemonDetailPop from '../Components/PokemonDetailPop';

export default function PokedexPage({pokemons, page, setPage, selected, setSelected}) {
    return (
    <>
      <h1 className="title">Pokédex</h1>
      <div className="card-grid">
        {pokemons.filter(p => p).map(p => ( <PokemonCard key={p.id} data={p.getData} onClick={() => setSelected(p.getData)} /> ))}
      </div>
      <Pagination page={page} setPage={setPage} />
      {selected && (    // Performs logical AND operation to check if selected is not null. If the selected is not null, it renders the Pop out window
        <PokemonDetailPop 
          pokemon={selected} 
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}   