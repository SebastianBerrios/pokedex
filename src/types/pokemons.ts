export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  image: string;
  description: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    ["special-attack"]: number;
    ["special-defense"]: number;
    speed: number;
  };
}
