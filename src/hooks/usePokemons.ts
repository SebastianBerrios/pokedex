import { useEffect, useState } from "react";
import { fetchAllPokemonDetails } from "../api/fetchAllPokemonDetails";
import { IPokemon } from "../types/pokemons";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAllPokemonDetails();
        setPokemons(data);
      } catch (error) {
        setError("Error fetching Pokémon data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, setPokemons, loading, error };
};
