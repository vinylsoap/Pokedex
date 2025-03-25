import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 8000;

const pokedex = [
  "bulbasaur", "charmander", "caterpie", "kakuna", "rattata",
  "pikachu", "vulpix", "jigglypuff", "mew", "ponyta", "cloyster", "groudon", "cubone", "tentacruel", "darkrai", "diglett"
];

app.get('/pokemons', async (req, res) => {
  try {
    const pokemonRequests = pokedex.map(async (name) => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data
      } catch (error) {
        console.error(`Failed to fetch: ${name}`, error.message);
        return null;
      }
    });

    const pokemons = await Promise.all(pokemonRequests);
    res.header('Access-Control-Allow-Origin','*').json(pokemons); 
  } catch (error) {
    console.error('Error fetching pokemons', error.message)
    res.status(500).json({ error: 'Something went wrong'});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
})