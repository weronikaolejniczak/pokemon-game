import { useQuery } from "@apollo/react-hooks";

import { GET_POKEMONS } from "graphql/getPokemons";
import config from "config";
import { Pokemons } from "components";

const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: config.maxPokemons }
  });

  return (
    <div className="container">
      <Pokemons pokemons={pokemons} />
    </div>
  );
};

export default PokemonsContainer;
