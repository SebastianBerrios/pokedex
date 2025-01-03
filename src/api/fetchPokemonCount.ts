import axios from "axios";
import { API_BASE_URL } from "./apiUrl";

export const fetchPokemonCount = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/pokemon`);
    return data.count;
  } catch (error) {
    console.error("Error fetching pokemon count:", error);
    return 0;
  }
};
