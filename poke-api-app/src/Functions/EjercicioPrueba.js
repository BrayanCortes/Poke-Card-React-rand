const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154";


export default async function GetAllPokemons(){
    try{
        const respuesta = await fetch(`${API_URL}`);
        const data = await respuesta.json();
        const listpokemons = data.results;
        var contador = 0
        var listpokemonswhitA = []
        
        for (let i = 0; i < listpokemons.length; i++) {
            contador = 0
            for(let j = 0; j < listpokemons[i].name.length; j++){
                if(listpokemons[i].name[j] === "a"){
                    contador = contador + 1;
                    if(contador >= 2){
                        listpokemonswhitA.push(listpokemons[i].name);
                        contador = 0;                    
                    }
                }   
            }

          }
        
        console.log(listpokemonswhitA)

        return data.results;
        
    }catch(error){
        window.alert(error);
    }
}


