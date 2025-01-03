import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { Link, useParams } from "react-router";
import arrow from "../../assets/icons/arrow.svg";
import backgroundpokeball from "../../assets/images/background-pokeball.png";
import PokemonName from "../../components/PokemonName";
import PokemonType from "../../components/PokemonType";
import PokemonImage from "../../components/PokemonImage";
import PokemonMeasure from "../../components/PokemonMeasure";
import BaseStats from "../../components/BaseStats";

export default function PokemonDetail() {
  const { pokemons } = useContext(PokemonContext);

  const { pokemonID } = useParams();

  const id = pokemonID ? parseInt(pokemonID, 10) : 0;
  const pokemon = pokemons[id - 1];

  return (
    <>
      <div
        className={`w-full mb-12 grid justify-center bg-type-${pokemon?.types[0]}`}
      >
        <div className="w-80 md:w-96 h-52">
          <Link to="/">
            <img
              src={arrow}
              alt="arrow-back"
              className="absolute p-1 top-2 left-2 md:left-4 xl:left-10 rounded-full bg-white opacity-85"
            />
          </Link>
          <PokemonName name={pokemon.name} order={pokemon.id} color="white" />
          <PokemonImage
            background={backgroundpokeball}
            image={pokemon?.image}
            name={pokemon?.name}
          />
        </div>
      </div>
      <PokemonType types={pokemon?.types} id={pokemon?.id} />
      <span
        className={`block my-4 text-center text-lg text-type-${pokemon?.types[0]} font-bold`}
      >
        About
      </span>
      <PokemonMeasure height={pokemon?.height} weight={pokemon?.weight} />
      <p className="text-center my-4 mx-2">{pokemon.description}</p>
      <BaseStats stats={pokemon.stats} type={pokemon.types} />
    </>
  );
}
