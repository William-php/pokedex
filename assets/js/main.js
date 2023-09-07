let pokemonsOl = document.getElementsByClassName("pokemons")[0];
let btnLoad = document.getElementById("btnLoad");
let limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {    

    return `
    <li class="pokemon ${pokemon.type.typeName}">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${returnOlType(pokemon.types)}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>`;
}

function returnOlType(types, ) {    
    return types.map((type) => `<li  class="type ${type.typeName}">${type.typeName}</li>`).join("");
} 


function loadMorePokemons(offsetLocal, limitLocal) {
     
    pokeApi.getPokemons(offset, limit).then((pokemons) => {            
                pokemonsOl.innerHTML += pokemons.map((pokemon) => convertPokemonToLi(pokemon)).join("");
                if (limitLocal === 10) {
                    offset += limitLocal;
                }
            });                    
}

loadMorePokemons(offset, limit);