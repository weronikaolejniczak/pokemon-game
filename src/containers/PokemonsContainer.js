import { useQuery } from "@apollo/react-hooks";

import { GET_POKEMONS } from "graphql/getPokemons";
import { Pokemon } from "components";
import config from "config";

const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: config.maxPokemons }
  });

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={`pokemon-${pokemon.id}`} {...pokemon} />
        ))}
    </div>
  );
};

export default PokemonsContainer;
