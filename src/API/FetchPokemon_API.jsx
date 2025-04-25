import Pokemon from '../entity/Pokemon.jsx'

export default async function fetchPokemon(currentPage) {
 const limit = 15;
 const offset = (currentPage - 1) * limit;
 const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
 try{
  const response = await fetch(url);
  const data = await response.json();
  const pokemonDetails = data.results.map(async (pokemon) => {
    const pokemonDetailsResponse = await fetch(pokemon.url);
    const pokemonDetailsData = await pokemonDetailsResponse.json();
    return new Pokemon(pokemonDetailsData);
  })
  return Promise.all(pokemonDetails); 
 }
  catch (error) {
    console.error('Error fetchinga Pokemon:', error);
    return [];
  }
}
