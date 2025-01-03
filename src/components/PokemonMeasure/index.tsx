import rule from "../../assets/icons/rule.svg";
import weighting from "../../assets/icons/weighting.svg";

interface PokemonMeasureProps {
  height: number;
  weight: number;
}

export default function PokemonMeasure({
  height,
  weight,
}: PokemonMeasureProps) {
  const weightKilogram = weight / 10;
  const heightmeter = height / 10;

  return (
    <div className="flex justify-center items-center gap-14">
      <div className="grid grid-cols-2 items-center justify-items-center">
        <img src={weighting} alt="weighting" />
        <span>{weightKilogram} kg</span>
        <span className="col-span-2 row-start-2 text-gray-500">Weight</span>
      </div>
      <div className="grid grid-cols-2 items-center justify-items-center">
        <img className="-rotate-45" src={rule} alt="rule" />
        <span>{heightmeter} m</span>
        <span className="col-span-2 row-start-2 text-gray-500">Height</span>
      </div>
    </div>
  );
}
