import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api/apiUrl";

export const useType = () => {
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemonTypes = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/type`);
        const types = data.results.map((type: { name: string }) => type.name);
        types.unshift("all");
        setTypes(types);
      } catch (error) {
        console.error("Error fetching pokemon type:", error);
        return 0;
      }
    };

    fetchPokemonTypes();
  }, []);

  return { types };
};
