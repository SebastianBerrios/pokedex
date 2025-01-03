interface PokemonTypeProps {
  types: string[];
  id: number;
}

export default function PokemonType({ types, id }: PokemonTypeProps) {
  return (
    <div className="flex gap-4 justify-center items-center">
      {types.map((type) => (
        <p
          key={`${type}-${id}`}
          className={`bg-type-${type} text-white px-4 py-1 rounded-full capitalize`}
        >
          {type}
        </p>
      ))}
    </div>
  );
}
