import { useContext } from "react";
import { IPokemon } from "../../types/pokemons";
import { PokemonContext } from "../../contexts/PokemonContext";

interface TypeButtonProps {
  pokemons: IPokemon[];
  setFilteredPokemons: (filteredPokemons: IPokemon[]) => void;
}

export default function TypeButton({
  pokemons,
  setFilteredPokemons,
}: TypeButtonProps) {
  const { types } = useContext(PokemonContext);

  const filterByType = (type: string) => {
    const searchQuery = type.toLowerCase();
    const results = pokemons.filter((pokemon) =>
      pokemon.types.some((type: string) => type.toLowerCase() === searchQuery)
    );
    setFilteredPokemons(results);

    if (type === "all") setFilteredPokemons(pokemons);
  };

  const typeButtons = types.map((type) => (
    <button
      key={type}
      onClick={() => filterByType(type)}
      className={`bg-type-${type} rounded-full px-4 py-2 w-[90px] capitalize hover:opacity-80 transition-opacity`}
    >
      {type}
    </button>
  ));

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3 p-3">
        {typeButtons}
      </div>
    </>
  );
}
