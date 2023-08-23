// este es el array de los pokemones

const data = [
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] }
];

// aca esta la función para mostrar los datos del Pokémon
function showPokemonData(pokemon) {
    console.log(`ID: ${pokemon.id}`);
    console.log(`Name: ${pokemon.name}`);
    console.log(`Types: ${pokemon.types.join(', ')}`);
    console.log('-------------------------');
  }
  
  // aqui dejo la función para ordenar los Pokémon por ID, usamos funciones flechas
  function sortByID(callback) {
    setTimeout(() => {
      const sortedData = data.slice().sort((a, b) => a.id - b.id);
      callback(sortedData);
    }, 1000);
  }
  
  // aqui dejo la función para ordenar los Pokémon por nombre, usamos funciones flechas
  function sortByName(callback) {
    setTimeout(() => {
      const sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name));
      callback(sortedData);
    }, 1000);
  }
  
  // esta es la función de callback para mostrar los resultados
  function displayResults(pokemonList) {
    pokemonList.forEach(showPokemonData);
  }
  
  // por aqui los ordeno por ID
  sortByID(displayResults);
  
  // aqui los ordeno por nombre
  sortByName(displayResults);