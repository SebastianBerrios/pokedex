import pokeball from "../../assets/images/pokeball.png";
import { IPokemon } from "../../types/pokemons";

interface SearchBarProps {
  pokemons: IPokemon[];
  setFilteredPokemons: (filteredPokemons: IPokemon[]) => void;
}

export default function SearchBar({
  pokemons,
  setFilteredPokemons,
}: SearchBarProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    const results = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery)
    );
    setFilteredPokemons(results);
  };

  return (
    <div className="flex w-60 relative mt-4">
      <input
        className="w-60 rounded-full p-3"
        type="search"
        placeholder="Search your Pokémon..."
        onChange={handleSearch}
      />
      <img
        className="size-12 absolute right-0"
        src={pokeball}
        alt="pokeball"
        loading="lazy"
      />
    </div>
  );
}
