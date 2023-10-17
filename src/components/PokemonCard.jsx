import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    return (
       <>
       {pokemon.name}
       {pokemon.imgSrc ? (
       <img src = {pokemon.imgSrc} alt= {pokemon.name} /> 
       ):( 
       <p>Elle est ou là ma photo?? L est ou hein??  😡😡</p>)}
       </>  
      );
    }

    PokemonCard.propTypes = {
        pokemon:PropTypes.shape ({
          name: PropTypes.string.isRequired, 
          imgSrc: PropTypes.string,}) 
          .isRequired,     
        };
      
        export default PokemonCard
        


