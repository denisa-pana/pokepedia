const root = document.querySelector('#root');

function fetchPokemon() {
    return fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => response.json())
        .then((data) => {
            const pokemons = data.results;
            return pokemons;
        });
}


function fetchAbilities() {
   return fetchPokemon()
        .then((pokemons) => {
            return Promise.all(pokemons.map((pokemon) => {
               return fetch(pokemon.url)
                    .then((response) => response.json())
                    .then((data) => {
                        if(data.id<=18) {
                            const abilities = data.abilities.map(obj => obj.ability.name);
                            const images = data.sprites['front_default'];
                            return { ...data, abilities, images};
                        }
                        return null;
                    })
            }))
                .then((pokemonData) => pokemonData.filter(pokemon => pokemon !== null)); // Filter out null values
        })
}


function startRendering() {
    fetchAbilities()
        .then((pok) => {
            renderPokemonList(pok);
        })
}

window.addEventListener('load', startRendering);