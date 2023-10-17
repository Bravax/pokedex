import React, from "react";

function NavBar ({pokemonList, pokemonIndex, setPokemonIndex}) {
    const handelPrevious= () => {
    setPokemonIndex(pokemonIndex -1);
};
const handelNext = () => {
      setPokemonIndex(pokemonIndex +1);
};
  

return (
<>
  <button onClick= {handelPrevious} disabled={pokemonIndex === 0}>
    Précédent
    </button>
  <button onClick= {handelNext} disabled={pokemonIndex === pokemonList.length -1}>
    Suivant
    </button>
</>
);
}

export default NavBar;

