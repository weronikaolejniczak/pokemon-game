import { Pokemon } from "components";

const Pokemons = ({ pokemons }) => (
  <div className="pokemons">
    {pokemons &&
      pokemons.map((pokemon) => (
        <Pokemon key={`pokemon-${pokemon.id}`} {...pokemon} />
      ))}
  </div>
);

export default Pokemons;
