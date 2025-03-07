import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import PokemonProvider from "./contexts/PokemonContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <PokemonProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemon/:pokemonID" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </PokemonProvider>
);
