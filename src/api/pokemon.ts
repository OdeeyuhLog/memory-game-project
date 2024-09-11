import type { Pokemon } from "../types/types";

const getRandomPokemonId = () => Math.floor(Math.random() * 898) + 1;

const fetchPokemon = async (): Promise<Pokemon> => {
	const id = getRandomPokemonId();
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await response.json();

	return {
		id: data.id,
		name: data.name,
		url: data.sprites.front_default,
	};
};

const fetchPokemons = async (count: number) => {
	const promises = Array(count)
		.fill(null)
		.map(() => fetchPokemon());
	return Promise.all(promises);
};

export { getRandomPokemonId, fetchPokemon, fetchPokemons };
