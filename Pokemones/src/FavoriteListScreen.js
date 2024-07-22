import Pokemon from "./Pokemon";
import { usePokemonContext } from "./PokemonProvider";

export default function FavoriteListScreen() {
  const { pokemons, toggleFavorite } = usePokemonContext();
  const favorites = pokemons.filter((pokemon) => pokemon.isFavorite);
  return (
    <div className="row">
      {favorites.length === 0 ? (
        <p className="alert alert-info">No has agregado favoritos</p>
      ) : (
        favorites.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            pokemon={pokemon}
            toggleFavorite={toggleFavorite}
          />
        ))
      )}
    </div>
  );
}
