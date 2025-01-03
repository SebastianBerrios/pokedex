import { useContext } from "react";
import { Link } from "react-router";
import { IPokemon } from "../../types/pokemons";
import { PokemonContext } from "../../contexts/PokemonContext";
import pokemonlogo from "../../assets/images/pokemonlogo.png";
import TypeButton from "../../components/TypeButton";
import SearchBar from "../../components/SearchBar";
import Loading from "../../components/Loading";
import PokemonName from "../../components/PokemonName";

export default function Home() {
  const { pokemons, loading, error, filteredPokemons, setFilteredPokemons } =
    useContext(PokemonContext);

  if (error) return <p>{error}</p>;

  return (
    <>
      <header className="bg-header-bg p-5">
        <Link to="/">
          <img
            className="w-40 m-auto mb-3"
            src={pokemonlogo}
            alt="pokemon-logo"
          />
        </Link>
        <TypeButton
          pokemons={pokemons}
          setFilteredPokemons={setFilteredPokemons}
        />
        <SearchBar
          pokemons={pokemons}
          setFilteredPokemons={setFilteredPokemons}
        />
      </header>
      <main className="bg-main-bg p-5 flex flex-wrap gap-2 justify-center">
        {loading ? (
          <Loading />
        ) : (
          filteredPokemons.map((pokemon: IPokemon) => (
            <Link key={pokemon.id} to={`pokemon/${pokemon.id}`}>
              <div className="size-56 grid rounded-lg bg-[#F6F0ED]">
                <PokemonName
                  name={pokemon.name}
                  order={pokemon.id}
                  color="red"
                />
                <img
                  className="h-36 justify-self-center"
                  src={pokemon.image}
                  alt={`${pokemon.image}`}
                />
              </div>
            </Link>
          ))
        )}
      </main>
    </>
  );
}
