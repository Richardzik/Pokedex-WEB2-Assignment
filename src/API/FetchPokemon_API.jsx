import Pokemon from '../entity/Pokemon.jsx'

export default async function fetchPokemon(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error("Failed to fetch Pokémon");
    const data = await res.json();
    return new Pokemon(data); // Return an instance of your wrapped class
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
