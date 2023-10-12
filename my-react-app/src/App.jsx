import './App.css'
import PokemonList from './components/PokemonCard';
import PokemonCard from './components/PokemonCard';
import PropTypes from 'prop-types';

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
    ]; 
    const pokemon = PokemonList[0] 
  return (
    <>
      <PokemonCard />
    </>
  )
}


console.log()
export default App
