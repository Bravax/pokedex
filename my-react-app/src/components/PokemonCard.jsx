function PokemonCard() {
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
    const pokemon = pokemonList [0]
   return (
       <>
       {pokemon.name}
       {pokemon.imgSrc ? <img src = {pokemon.imgSrc} /> : <p>???</p>}
       </>  
      );
    }
    

console.log();
export default PokemonCard;
