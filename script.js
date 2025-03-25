// An object
// const pokedex = [
//   {
//     thumbnail: 'bulbasaur.jpg',
//     id:'N°01' ,
//     name: 'bulbasaur',
//     type: ['plant', 'poison'],
//   },
//   {
//     thumbnail: 'charmander.jpg',
//     id:'N°02',
//     name: 'charmander',
//     type: ['fire'],
//   },
//   {
//     thumbnail: 'caterpie.jpg',
//     id:'N°03',
//     name: 'caterpie',
//     type: ['bug'],
//   },
//   {
//     thumbnail: 'kakuna.jpg',
//     id:'N°04',
//     name: 'kakuna',
//     type: ['bug', 'poison'],
//   },
//   {
//     thumbnail: 'rattata.jpg',
//     id:'N°05',
//     name: 'rattata',
//     type: ['plant'],
//   },
//   {
//     thumbnail: 'pikachu.jpg',
//     id:'N°06',
//     name: 'pikachu',
//     type: ['normal'],
//   },
//   {
//     thumbnail: 'vulpix.jpg',
//     id:'N°07',
//     name: 'vulpix',
//     type: ['fire', 'plant'],
//   },
//   {
//     thumbnail: 'jigglypuff.jpg',
//     id:'N°08',
//     name: 'jigglypuff',
//     type: ['normal', 'fairy'],
//   },
//   {
//     thumbnail: 'mew.jpg',
//     id:'N°09',
//     name: 'mew',
//     type: ['phychic'],
//   },
//   {
//     thumbnail: 'ponyta.jpg',
//     id:'N°10',
//     name: 'ponyta',
//     type: ['fire'],
//   },
//   {
//     thumbnail: 'cloyster.jpg',
//     id:'N°11',
//     name: 'cloyster',
//     type: ['ice', 'water'],
//   },
//   {
//     thumbnail: 'groudon.jpg',
//     id:'N°12',
//     name: 'groundor',
//     type: ['ground'],
//   },
//   {
//     thumbnail: 'cubone.jpg',
//     id:'N°13',
//     name: 'cubone',
//     type: ['ground'],
//   },
//   {
//     thumbnail: 'tentacruel.jpg',
//     id:'N°14',
//     name: 'tentacruel',
//     type: ['poison', 'water'],
//   },
//   {
//     thumbnail: 'darkrai.jpg',
//     id:'N°15',
//     name: 'darkrai',
//     type: ['dark'],
//   },
//   {
//     thumbnail: 'diglett.jpg',
//     id:'N°16',
//     name: 'diglett',
//     type: ['ground'],
//   }
// ]

let pokedex = [];

fetch('http://localhost:8000/pokemons', {
  headers: {
    'Access-Control-Allow-Origin': '*',
  } 
})
  .then(response => response.json())
  .then(data => {
  pokedex = data;
  buildPokedex();
});

const typeColors = {
  plant: 'Green',
  fire: 'Orange',
  bug: 'Sienna',
  poison: 'purple',
  normal: 'gray',
  fairy: 'pink',
  psychic: 'blue',
  ice: 'lightblue',
  water: 'blue',
  ground: 'black',
  dark: 'DarkSlateGrey',
  phychic: 'Salmon',
  grass: "Green",
  electric: "Yellow",
}

const displayPokedex = document.querySelector('.pokemon_card');

function buildPokedex() {
  for (let pokemon of pokedex) {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon')
  
    const img = document.createElement('img');
    img.src = pokemon.sprites.other['official-artwork'].front_default;
    img.alt = pokemon.name;
  
    const id = document.createElement('p');
    id.textContent = pokemon.id;
    id.classList.add('id--pokemon');
  
    const name = document.createElement('h3');
    name.textContent = pokemon.name;
  
    const typesContainer = document.createElement('div');
    typesContainer.classList.add('types--pokemon');
  
    for (let type of pokemon.types) {
      const typeName = type.type.name;
      const typeDiv = document.createElement('div');
      typeDiv.textContent = typeName;
      typeDiv.style.backgroundColor = typeColors[typeName];
      typeDiv.classList.add('type--badge');
      typesContainer.append(typeDiv);
    }
  
    pokemonDiv.append(img, id, name, typesContainer);
  
    displayPokedex.append(pokemonDiv);
  }
}
