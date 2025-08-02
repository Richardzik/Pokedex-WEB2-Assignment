import '../App.css'
import PokemonCard from '../Components/PokemonCard';
import Pagination from '../Components/Pagination';
import PokemonDetailPop from '../Components/PokemonDetailPop';
import LoadingPage from './Loading_page';

export default function PokedexPage({pokemons, page, setPage, selected, setSelected, isLoading}) {
  if (isLoading) {
    return <LoadingPage />;
  }
     return (
    <>
      <h1 className="title">Pokédex</h1>
      <Pagination page={page} setPage={setPage} />
      {selected && (    // Performs logical AND operation to check if selected is not null. If the selected is not null, it renders the Pop out window
        <PokemonDetailPop 
          pokemon={selected} 
          onClose={() => setSelected(null)}
        />
      )}
      <div className="card-grid">
        {pokemons.filter(p => p).map(p => ( <PokemonCard key={p.id} data={p.getData} onClick={() => setSelected(p.getData)} /> ))}
      </div>
      
    </>
  );
}   