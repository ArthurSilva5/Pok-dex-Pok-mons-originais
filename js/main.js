let listaDePokemons = [];
async function buscaURL(){
    for(let i = 1; i <= 12; i++){
        const conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const conexaoAtualizada = await conexao.json();
        listaDePokemons.push(conexaoAtualizada)
        exibePokemons();
    }
}

function exibePokemons(){
    const card = document.createElement('div');
    card.classList.add('card');
    const conteudo = document.querySelector('.conteudo');
    conteudo.appendChild(card)

    listaDePokemons.forEach( pokemon => {
        const nomeDoPokemon = pokemon.name;
        const nomeDoPokemonAtualizado = nomeDoPokemon[0].toUpperCase() + nomeDoPokemon.substring(1)
        const elemento = pokemon.types[0].type.name;

        card.innerHTML = `
        <h3 class="card-titulo">${pokemon.id} - ${nomeDoPokemonAtualizado}</h3>
        <img class="card-imagem" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="Imagem do pokemon">
        <p class="card-descricao">Elemento: ${elemento[0].toUpperCase() + elemento.substring(1)}</p>
    `
    })
}
        
buscaURL();



