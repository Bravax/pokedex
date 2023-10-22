import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <NavBar
        pokemonList={pokemonList}
        onPokemonClick={handlePokemonClick}
        selectedPokemon={selectedPokemon}
      />
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App;
