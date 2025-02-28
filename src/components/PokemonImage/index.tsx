interface PokemonImageProps {
  background: string;
  image: string;
  name: string;
}

export default function PokemonImage({
  background,
  image,
  name,
}: PokemonImageProps) {
  return (
    <div className="relative flex justify-center">
      <img
        className="absolute h-44 opacity-15 right-8 -top-7"
        src={background}
        alt="background-pokeball"
        loading="lazy"
      />
      <img className="absolute h-52" src={image} alt={`${name}`} />
    </div>
  );
}
