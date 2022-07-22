const API_URL = "https://pokeapi.co/api/v2/pokemon";

const PokemonId = Math.floor((Math.random() * (900-1)) +1);

export default async function Pokimon(){
    try{
        const respuesta = await fetch(`${API_URL}/${PokemonId}/`);
        const data = await respuesta.json();
        const array = [data]
        return array;
        
    }catch(error){
        window.alert(error);
    }
}