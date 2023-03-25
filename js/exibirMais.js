async function buscaPokemon(idInicial, idFinal) {
    for(let i = idInicial; i <= idFinal; i++){
        // Requisição da informações específicas do pokémon
        const conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const conexaoAtualizada = await conexao.json();
        listaDePokemons.push(conexaoAtualizada);
        if(i > 151){
            break;
        }
        exibePokemons();
    }   
}

let idInicial = 13; // Define o primeiro id a ser buscado. Sempre partirá do 
let idFinal = 28; // Define o último id a ser buscado. Inicialmente irá até o valor 20.

// Captura o btn e adiciona um evento ao clicar nele
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {

    // Chama a função com os parâmetros iniciais e finais.
    buscaPokemon(idInicial, idFinal)

    // Depois do click, as duas variáveis terão novos valores:
    idFinal= idFinal + 16; // idFinal receberá seu valor anterior + 8.
    idInicial = idInicial + 16; // IdInicial receberá seu valor anterior + 8.

})