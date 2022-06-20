// Using these to roughly call pokeapi to construct the json I wish to use.
// As such, not bothering to type these or write them particularly well.

export const getAllPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=898');
  const json = await response.json();

  const parsedPokemons = await getPokemon(json.results);

}

const getPokemon = async (pokemons: any[]) => {
  return await Promise.all(
    pokemons.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const json = await response.json();
      return await parsePokemon(json);
    })
  );
};

const parsePokemon = async (pokemon: any) => {
  const types = pokemon.types.map((type: any) => type.type.name);
  const species = await callSpecies(pokemon.species.url);
  const evolutionChainUrl = species.evolution_chain.url;
  const generation  = extractGenerationNumber(species.generation.url);

  // delete all values not desired
  delete pokemon.abilities;
  delete pokemon.base_experience;
  delete pokemon.forms;
  delete pokemon.game_indices;
  delete pokemon.held_items;
  delete pokemon.is_default;
  delete pokemon.location_area_encounters;
  delete pokemon.moves;
  delete pokemon.past_types;
  delete pokemon.species;
  delete pokemon.sprites;
  delete pokemon.versions;
  delete pokemon.stats;

  const evolutions = await callEvolutionChain(evolutionChainUrl);

  return { ...pokemon, types, evolutions, generation };
};

const callSpecies = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

const callEvolutionChain = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();

  return parseEvolution(json.chain);
};

// takes the pokemon species generation url and extracts the id from it
const extractGenerationNumber = (generationUrl: string) => {
  const regex = /generation\/(\d+)\//g;
  const results = regex.exec(generationUrl);
  if (!results || results.length === 0) {
    return 0;
  }
  return parseInt(results[1], 10);
};

const parseEvolution = (evolutionChain: any, evolutions: any[] = []) => {
  // initialize array with evolutionChain first species name
  if (evolutions.length === 0) {
    evolutions.push(evolutionChain.species.name);
  }

  // if the current chain has an envolve_to, loop through it recursively
  const { evolves_to: evolvesTo } = evolutionChain;
  if (evolvesTo) {
    evolvesTo.forEach((evolution: any) => {
      evolutions.push(evolution.species.name);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      parseEvolution(evolution, evolutions);
    });
  }

  return evolutions;
};
