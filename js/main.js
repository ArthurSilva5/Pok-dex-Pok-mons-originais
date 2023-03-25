let listaDePokemons = [];
async function buscaURL(){
    for(let i = 1; i <= 12; i++){
        // Requisição das informações individuais
        const conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const conexaoAtualizada = await conexao.json();
        listaDePokemons.push(conexaoAtualizada)
        exibePokemons();
    }
}

let contador = 0;
function exibePokemons(){
    const card = document.createElement('div');
    card.classList.add('card');
    const conteudo = document.querySelector('.conteudo');
    conteudo.appendChild(card)

    const elementosBR = ['Fogo','Água','Grama','Veneno','Elétrico','Gelo','Dragão','Terra','Fada','Psíquico','Inseto','Lutador','Pedra','Fantasma','Normal'];

    const elementosEN = ['fire','water','grass','poison','electric','ice','dragon','ground','fairy','psychic','bug','fighting','rock','ghost','normal']

    listaDePokemons.forEach( pokemon => {
        const nomeDoPokemon = pokemon.name;
        const nomeDoPokemonAtualizado = nomeDoPokemon[0].toUpperCase() + nomeDoPokemon.substring(1)
        let elemento = pokemon.types[0].type.name;
        const index = elementosEN.indexOf(elemento);

        card.innerHTML = `
        <h3 class="card-titulo">${pokemon.id} - ${nomeDoPokemonAtualizado}</h3>
        <img class="card-imagem" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="Imagem do pokemon">
        <p class="card-elemento">Elemento: ${elementosBR[index]}</p>
    `
    })
    contador = contador +1;
}

buscaURL();

