const pokemonContainer = document.querySelector(".pokemon_container");
const spinner = document.querySelector("#spinner");
//traemos de primero los elementos de html (el spinner y el pokemoncontainer)
const previuos = document.querySelector('#previous');
const next = document.querySelector('#next');

let offset = 1;
let limit = 8;

previuos.addEventListener('click', () => {
    if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset,limit);
    }
})

next.addEventListener('click', () => {
    offset += 9;
    fetchPokemons(offset,limit);
})

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    //.then (data => console.log(data)) "esta funcion sencilla fue para probar llevar a consola a solo el primer pokemon"
    .then((data) => {
        createPokemon(data);
        //se coloca el spinner en la funcion de fetch pokemon escondido
        spinner.style.display = "none";
    })  
}
//fetchPokemon(1) "prueba de imprimir en mi consola los datos de mi primer pokemon"

    function fetchPokemons(offset,limit){
        spinner.style.display = "block";
        for (let index = offset; index <= offset + limit; index++) {
        fetchPokemon(index);   
     }
    }


// funcion para llamar a los poquemons por su numero de ID
//  function fetchPokemons(number){
    //motramos el spinner al momento de cambiar el grupo de pokemon de pagina
//    spinner.style.display = "block";
//    for (let index = 1; index <= number; index++) {
//        fetchPokemon(index);   
//    }
//}

// fetchPokemons(9); "prueba de imprimir en mi consola los datos de mis primeros 9 pokemon"

//Pasamos los datos de la consola a nuestra pagina
function createPokemon(pokemon){  
    //creamos la tarjeta que contendran a los pokemones, con su imagen, numero y nombre
    const card = document.createElement("div")
    card.classList.add("pokemon_block")
  
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img_container");
  
    const sprite = document.createElement("img")
    sprite.src = pokemon.sprites.other.home.front_default;
    //sprite.src = pokemon.sprites.front_shiny
  
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

  function removeChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  
  // fetchPokemons(9); en esta funcion solo llamaba al numero de pokemon que yo quisiera
  fetchPokemons(offset,limit);
