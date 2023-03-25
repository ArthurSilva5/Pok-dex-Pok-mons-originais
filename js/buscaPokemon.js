const btnProcurar = document.querySelector('.busca-btn');
const nomePokemon = document.querySelector('#busca-pokemon');

function buscarPokemon(nome){
    const cards = document.querySelectorAll('.card');
    const btnExibirMais = document.querySelectorAll('.btn');


    const conexao = `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`;
    fetch(conexao)
    .then(resposta => {
        if (resposta.ok) {
          return resposta.json();
        } else {
            alert(`O Pokemon digitado não existe! Tente novamente!`);
            throw new Error('Erro ao buscar dados da API.');
        }
      })
      .then(dados => {
        if(dados.id > 151){
          alert("Este pokémon não é da lista original!")
        }
        else{
          cards.forEach(pokemon => pokemon.remove());
          btnExibirMais.forEach(botao => botao.remove());
          listaDePokemons.push(dados);
          exibePokemons();
        }
      })
}

btnProcurar.addEventListener('click', () =>{
    buscarPokemon(nomePokemon.value);
})