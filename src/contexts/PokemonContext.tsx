import { createContext, useEffect, useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import { IPokemon } from "../types/pokemons";
import { useType } from "../hooks/useTypes";

interface PokemonContextType {
  pokemons: IPokemon[];
  loading: boolean;
  error: string | null;
  filteredPokemons: IPokemon[];
  setFilteredPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>;
  types: string[];
}

export const PokemonContext = createContext<PokemonContextType>(
  {} as PokemonContextType
);

interface PokemonContextProps {
  children: React.ReactNode;
}

export default function PokemonProvider({ children }: PokemonContextProps) {
  const { pokemons, loading, error } = usePokemons();
  const { types } = useType();

  const [filteredPokemons, setFilteredPokemons] =
    useState<IPokemon[]>(pokemons);

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
        error,
        filteredPokemons,
        setFilteredPokemons,
        types,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
