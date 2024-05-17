class Pokemon {
    constructor(name, height, weight, abilities, images) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.images = images;
    }

    renderPokemon() {
        const pokemonList = document.querySelector('#pokemon-name-list');
        //console.log(this.images);
        pokemonList.innerHTML += `
            <button class="pokemon-name" data-image="${this.images}" data-height="${this.height}" data-weight="${this.weight}" data-abilities="${this.abilities}">
                 ${this.name.toUpperCase()}                           
            </button>
        `
        const buttons = document.querySelectorAll('.pokemon-name');
        const nameDisplay = document.querySelector('#pokemon-name');
        const heightDisplay = document.querySelector('#height');
        const weightDisplay = document.querySelector('#weight'); //
        const abilitiesDisplay = document.querySelector('#pokemon-description');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const name = button.textContent; // Get the name from the clicked button
                const height = button.getAttribute('data-height'); // Get the height from the button's data attribute
                const weight = button.getAttribute('data-weight');
                const abilities = button.getAttribute('data-abilities');
                nameDisplay.textContent = name;
                heightDisplay.textContent = `Height: ${height}`; // Update the height display element
                weightDisplay.textContent = `Weight: ${weight}`;
                abilitiesDisplay.textContent = `Abilities: ${abilities}`;
                const image = button.getAttribute('data-image');
                renderImage(image);
            });
        });

    }
}
function renderImage(imageUrl) {
    const pokemonImage = document.querySelector('#pokemon-img');
    pokemonImage.setAttribute("src", imageUrl);
}
