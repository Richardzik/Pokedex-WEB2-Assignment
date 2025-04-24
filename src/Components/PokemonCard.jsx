import '../App.css';

const typeColors = {
  grass: '#a8e6a1',
  fire: '#fca29b',
  water: '#9bd9fc',
  bug: '#c7e78b',
  electric: '#fff599',
  poison: '#d6a2e8',
  normal: '#d3d3d3',
  ground: '#d8b26f',
  rock: '#c2b280',
  psychic: '#fcb0b3',
  ice: '#a6e9ff',
  dragon: '#9a8cf9',
  dark: '#8e8e8e',
  fairy: '#fbd3f7',
  fighting: '#fc9d9a',
  ghost: '#c0b6ff',
  steel: '#cccccc',
  flying: '#b0e0ff',
};
const badgeTypeColors = {
  grass: '#78C850',
  fire: '#F08030',
  water: '#6890F0',
  bug: '#A8B820',
  electric: '#F8D030',
  poison: '#A040A0',
  rock: '#B8A038',
  ice: '#98D8D8',
  psychic: '#F85888',
  dragon: '#7038F8',
  fairy: '#EE99AC',
  flying: '#A890F0',
  dark: '#705848',
  fighting: '#C03028',
  ghost: '#705898',
  steel: '#B8B8D0',
  normal: '#A8A878',
  ground: '#E0C068'
};

export default function PokemonCard({ data, onClick }) {

  if (!data) return null;

  const { name, type, image, id } = data;
  const backgroundColor = typeColors[type] || '#e0e0e0'; // sets gray if type does not match any type colors

  return (
    <div className="pokemon-card" style={{ backgroundColor }} onClick={onClick}
    >
      <p className="pokemon-id">#{id}</p>
      <img src={image} alt={name} className="pokemon-img" />
      <h2 className="pokemon-name">{name}</h2>
      <span className="type-badge" style={{ backgroundColor: badgeTypeColors[type] || '#aaa' }}> {type} </span>
    </div>
  );
}
