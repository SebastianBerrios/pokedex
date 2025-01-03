import axios from "axios";
import { API_BASE_URL } from "./apiUrl";
import { fetchPokemonCount } from "./fetchPokemonCount";

export async function fetchAllPokemonDetails() {
  try {
    const numberPokemons = await fetchPokemonCount();

    const { data } = await axios.get(`${API_BASE_URL}/pokemon/`, {
      params: { limit: numberPokemons },
    });

    const pokemons = data.results;

    const allPokemons = await Promise.all(
      pokemons.map(async (pokemon: any) => {
        try {
          const { data: details } = await axios.get(pokemon.url);
          const { data: speciesData } = await axios.get(details.species.url);
          const descriptionData =
            speciesData?.flavor_text_entries[0]?.flavor_text.replace(
              /[\n\f]/g,
              " "
            );
          const types = details.types.map(
            (type: { type: { name: string } }) => type.type.name
          );

          return {
            id: details.id,
            name: details.name,
            height: details.height,
            weight: details.weight,
            image: details.sprites.other?.["official-artwork"]?.front_default,
            description: descriptionData,
            types: types,
            stats: {
              hp: details.stats[0]?.base_stat,
              attack: details.stats[1]?.base_stat,
              defense: details.stats[2]?.base_stat,
              ["special-attack"]: details.stats[3]?.base_stat,
              ["special-defense"]: details.stats[4]?.base_stat,
              speed: details.stats[5]?.base_stat,
            },
          };
        } catch (error) {
          console.error(`Error fetching details for ${pokemon.name}:`, error);
          return null;
        }
      })
    );

    return allPokemons;
  } catch (error) {
    console.error("Error in getPokemons:", error);
    return [];
  }
}
