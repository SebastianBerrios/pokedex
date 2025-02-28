import pokemonloading from "../../assets/gifs/pokemon-loading.gif";

export default function Loading() {
  return (
    <>
      <img src={pokemonloading} alt="loading" loading="lazy" />
    </>
  );
}
