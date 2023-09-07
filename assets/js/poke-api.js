const pokeApi = {};

function convertToPokemon(pokemon) {
    let poke = new Pokemon(
                    pokemon.name,
                    pokemon.order,
                    pokemon.types,
                    pokemon.sprites.other.dream_world.front_default
                );
    
    poke.name = poke.name.replace(poke.name[0], poke.name[0].toUpperCase());
    poke.setType(poke.types);
    return poke;
}
pokeApi.getPokeDetail = (pokemon) => fetch(pokemon.url)
                                        .then((response) => response.json())

pokeApi.getPokemons = (offset, limit) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokeDetail))
        .then((detailsReq) => Promise.all(detailsReq))
        .then((pokeDetails) => pokeDetails.map(convertToPokemon))        
        .catch((error) => console.error(error))
}

// Promise.all(
//     fetch("")
//         .then((response) => response.json())
//         .then((jsonBody) => jsonBody.results)
        
//         .catch((err) => console.error(err))
// )

// FEITO POR WILL
// pokeApi.getPokeDetails = (url) => {
//     return fetch(url)
//         .then((response) => response.json())
//         .then((jsonBody) => jsonBody)
//         .catch((err) => console.error(err));
// } 