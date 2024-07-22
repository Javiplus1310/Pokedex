import Pokemon from "./Pokemon";
import { usePokemonContext } from "./PokemonProvider";

export default function PokemonListScreen() {
  const { pokemons, toggleFavorite } = usePokemonContext();
  return (
    <div className="row">
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          pokemon={pokemon}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
