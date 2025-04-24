class Pokemon {
    constructor({ name, types, id, abilities }) {
      this.name = name;
      this.id = id;
      this.type = types[0].type.name; // primary type
      this.image = id <= 649 // Animated sprites are only available for the first 649 Pokemon then the static image needs to be used
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      this.abilities = abilities.map(a => a.ability.name);
    }
  
    get getData() {
      return {
        name: this.name,
        id: this.id,
        type: this.type,
        image: this.image,
        abilities: this.abilities,
      };
    }
  }
  
  export default Pokemon;
  