const pokemonContainer = document.querySelector(".pokemon_container");
const spinner = document.querySelector("#spinner");
//traemos de primero los elementos de html (el spinner y el pokemoncontainer)

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    //.then (data => console.log(data)) "esta funcion sencilla fue para probar llevar a consola a solo el primer pokemon"
    .then((data) => {
        createPokemon(data);
        spinner.style.display = "none";
    })  
}
//fetchPokemon(1) "prueba de imprimir en mi consola los datos de mi primer pokemon"

function fetchPokemons(number){
    spinner.style.display = "block";
    for (let index = 1; index <= number; index++) {
        fetchPokemon(index);
        
    }
}
// fetchPokemons(9); "prueba de imprimir en mi consola los datos de mis primeros 9 pokemon"

//Pasamos los datos de la consola a nuestra pagina
function createPokemon(pokemon){  
    //creamos la tarjeta que contendran a los pokemones, con su imagen, numero y nombre
    const card = document.createElement("div")
    card.classList.add("pokemon_block")
  
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img_container");
  
    const sprite = document.createElement("img")
    sprite.src = pokemon.sprites.front_default
  
        spriteContainer.appendChild(sprite);   
  
        const number = document.createElement("p");
        number.textContent = `#${pokemon.id.toString().padStart(3 , 0)}`;  
  
        const name = document.createElement("p");
        name.classList.add("name")
        name.textContent = pokemon.name;
  
        card.appendChild(spriteContainer);
        card.appendChild(number);
        card.appendChild(name);
  
        pokemonContainer.appendChild(card);
  
  }
  
  fetchPokemons(9);
