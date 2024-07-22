import { createContext, useContext, useEffect, useState } from "react";

const PokemonContext = createContext({});

export function usePokemonContext() {
  return useContext(PokemonContext);
}

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  const toggleFavorite = (pokemonId) => {
    setPokemons((pokemonList) =>
      pokemonList.map((pokemon) => {
        if (pokemon.id !== pokemonId) {
          return pokemon;
        }

        return {
          ...pokemon,
          isFavorite: !pokemon.isFavorite,
        };
      })
    );
  };

  useEffect(() => {
    let unmounted = false; // para evitar el doble request (StrictMode)

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => response.json())
      .then(({ results }) => {
        if (unmounted) {
          return;
        }

        setPokemons(
          results.map((pokemon, index) => ({
            ...pokemon,
            id: index + 1,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
            isFavorite: false,
          }))
        );
      });

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, toggleFavorite }}>
      {children}
    </PokemonContext.Provider>
  );
}
