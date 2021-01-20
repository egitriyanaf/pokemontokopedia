import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";

function PokemonsContainer() {
    const { data: { pokemons = [] } = {}
    } = useQuery(GET_POKEMONS, {
        variables: { limit: 2, offset: 1, },
    });

    return (
        <div className="pokemons">
            {pokemons && pokemons.map(pokemon => JSON.stringify(pokemon))}
        </div>
    )
}
export default PokemonsContainer;
