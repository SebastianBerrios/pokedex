interface BaseStatsProps {
  stats: {
    hp: number;
    attack: number;
    defense: number;
    ["special-attack"]: number;
    ["special-defense"]: number;
    speed: number;
  };
  type: string[];
}

export default function BaseStats({ stats, type }: BaseStatsProps) {
  const baseStats = Object.entries(stats).map(([key, value]) => (
    <div
      key={key}
      className="grid grid-flow-col items-center gap-4 justify-end text-[10px]"
    >
      <span
        className={`text-type-${type[0]} font-bold border-r pr-2 text-base`}
      >
        {key === "hp"
          ? "HP"
          : key === "attack"
          ? "ATK"
          : key === "defense"
          ? "DEF"
          : key === "special-attack"
          ? "SATK"
          : key === "special-defense"
          ? "SDEF"
          : "SPD"}
      </span>
      <span className="text-base">
        {value < 10 ? `00${value}` : value < 100 ? `0${value}` : value}
      </span>
      <div
        className={`bg-type-${type[0]} rounded-full w-40 h-2.5 bg-opacity-20`}
      >
        <div
          className={`bg-type-${type[0]} rounded-full h-2.5`}
          style={{ width: `${value}%`, maxWidth: "160px" }}
        ></div>
      </div>
    </div>
  ));

  return <div className="mt-2 mb-4 place-self-center">{baseStats}</div>;
}
