interface IPokemonName {
  name: string;
  order: number;
  color: string;
}

export default function PokemonName({ name, order, color }: IPokemonName) {
  return (
    <div
      className={`flex text-${color} text-xl capitalize place-content-around p-2`}
    >
      <span className="font-bold">{name}</span>
      <span>
        {order < 10
          ? `#000${order}`
          : order < 100
          ? `#00${order}`
          : order < 1000
          ? `#0${order}`
          : `#${order}`}
      </span>
    </div>
  );
}
