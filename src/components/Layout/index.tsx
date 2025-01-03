import { Outlet, useParams } from "react-router";
import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import SocialMedia from "../SocialMedia";

export default function Layout() {
  const { pokemons } = useContext(PokemonContext);
  const { pokemonID } = useParams();

  const id = pokemonID ? parseInt(pokemonID, 10) : 0;
  const pokemon = pokemons[id - 1];

  const backgroundColor = pokemon?.types?.[0]
    ? `bg-type-${pokemon.types[0]}`
    : "bg-header-bg";

  return (
    <>
      <main className="w-full">
        <Outlet />
      </main>
      <footer
        className={`${backgroundColor} text-center text-sm text-black p-2`}
      >
        <span>{`<> ElectroCode </>`}</span>
        <SocialMedia />
      </footer>
    </>
  );
}
