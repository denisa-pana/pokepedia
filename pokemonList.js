root.innerHTML += `
<!--    <ul id="pokemon-list"></ul>-->
    <div id="content-box">
<!--        left-side-->
        <div id="pokemon-info">
            <img id="pokemon-img" src="" alt="">
            <div id="pokemon-name"></div>
            <div id="pokemon-properties">
                <span id="height"></span> <span id="weight"></span>    
            </div>
            <div id="pokemon-description"></div>
        </div>
<!--        right-side-->
        <div id="pokemon-name-list"></div>
    </div>
`;

function renderPokemonList(pokemonData) {
    pokemonData.forEach(function(pokemon) {
        const pokemonPo = new Pokemon(pokemon.name, pokemon.height, pokemon.weight, pokemon.abilities, pokemon.images);
        pokemonPo.renderPokemon();
    });
}

