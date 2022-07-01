# Pokédexle
A Pokémon guessing game inspired by [Wordle](https://www.nytimes.com/games/wordle/index.html), [Heardle](https://www.heardle.app/), and similar games.

The objective of the game is to guess the correct Pokémon in six guesses. The Pokémon's image will start blurry, but become clearer as you guess. Additionally, the Pokémon's weight, height, type, and generation info will narrow to help in your search.

In the game's current state, it does not have a "daily" mode. You can play endlessly! (*I do hope to eventually add a daily game mode*).

The game can be played at [https://addison-dalton.github.io/pokedexle/](https://addison-dalton.github.io/pokedexle/), or by running the game locally with the following commands:

1. Clone this repo.
2. Inside your local copy, run `yarn install` to install the dependencies.
3. Run `yarn start` to start the application.
4. It should be available at [http://localhost:3000](http://localhost:3000)

---

## Tech Stuff
Pokédexle is a React app written in TypeScript. It heavily uses [Chakra UI](https://chakra-ui.com/) as its component library; with [Emotion](https://emotion.sh) being used to style components. [Redux Toolkit](https://redux-toolkit.js.org/) is used for global state management.

All Pokémon data is sourced from an internal JSON file. This file was constructed from various API calls to [PokeAPI](https://pokeapi.co/). The Pokémon images are fetched as needed, and are sourced from PokeAPI's [GitHub](https://github.com/PokeAPI/sprites) for sprites.

Finally, searching for Pokémon is accomplished with help from [Fuse.js](https://fusejs.io/).

---

## Motivation - *for those that care*
As with many, I got caught up in the Wordle craze early in 2022. At the same time, I was playing Pokémon Arceus. The idea hit me that Pokémon could be a perfect adaptation.

I used development on this game as an opportunity to explore Chakra UI, which I really enjoyed.


