class Pokemon {
    constructor({ name, types, id, abilities }) {
      this.name = name;
      this.id = id;
      this.type = types[0].type.name; // primary type
      this.image = id <= 649
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
  