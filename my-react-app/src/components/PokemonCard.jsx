function PokemonCard(props) {
    console.log(props)
    
    const pokemon = pokemonList [0]
    console.log(pokemon)
   return (
       <>
       {pokemon.name}
       {pokemon.imgSrc ? <img src = {pokemon.imgSrc} /> : <p>???</p>}
       </>  
      );
    }
    

export default PokemonCard;
