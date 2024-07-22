import { Routes, Route } from "react-router-dom";
import FavoriteListScreen from "./FavoriteListScreen";
import Navigation from "./Navigation";
import PokemonListScreen from "./PokemonListScreen";
import PokemonProvider from "./PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <Navigation />
      <main className="container">
        <div className="row">
          <Routes>
            <Route exact path="/" element={<PokemonListScreen />} />
            <Route path="/favoritos" element={<FavoriteListScreen />} />
          </Routes>
        </div>
      </main>
    </PokemonProvider>
  );
}

export default App;
