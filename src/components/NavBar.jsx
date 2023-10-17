import PropTypes from "prop-types";

function NavBar({pokemonList, pokemonIndex, setPokemonIndex }) {
    const handlePrevious = () => {
      setPokemonIndex(pokemonIndex -1);
    };

    const handleNext = () => {
      setPokemonIndex(pokemonIndex + 1);
    };
  
  return (
  <>
    <button onClick={handlePrevious} disabled={pokemonIndex === 0}>
      Précédent
    </button>
      <button onClick={handleNext} disabled={pokemonIndex === pokemonList.length - 1}>
     Suivant
      </button>
  </>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};
export default NavBar;

