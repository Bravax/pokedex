import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    
   return (
       <>
       {pokemon.name}
       {pokemon.imgSrc ? <img src = {pokemon.imgSrc} /> : <p>???</p>}
       </>  
      );
    }
    PokemonCard.propTypes = {
        pokemon:PropTypes.shape ({
          name: PropTypes.string.isRequired, 
          imgSrc: PropTypes.string,})      
        }
      

export default PokemonCard;
