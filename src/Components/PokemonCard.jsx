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

export default function PokemonCard({ data, onClick }) {
  const { name, type, image } = data;
  const backgroundColor = typeColors[type] || '#e0e0e0';

  return (
    <div className="pokemon-card" style={{ backgroundColor }} onClick={onClick}
    >
      <img src={image} alt={name} className="pokemon-img" />
      <h2 className="pokemon-name">{name}</h2>
    </div>
  );
}
