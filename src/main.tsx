import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import PokemonProvider from "./contexts/PokemonContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pokemon/:pokemonID",
        element: <Detail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
