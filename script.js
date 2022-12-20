const pokemonContainer = document.querySelector(".pokemon_container")

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        createPokemon(data)
    })
    
}

function fetchPokemons (number){
    for (let index = 1; index <= number; index++) {
        fetchPokemon(index);
        
    }
}
