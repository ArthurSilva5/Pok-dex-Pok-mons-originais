const elementos = document.querySelector('#elementos');
elementos.addEventListener('change', buscaElemento);

async function buscaElemento(){
    const cards = document.querySelectorAll('.card')
    cards.forEach(item => item.remove());

    const btnExibirMais = document.querySelectorAll('.btn');
    btnExibirMais.forEach(botao => botao.remove());

    const elementoEscolhido = elementos.options[elementos.selectedIndex];
    for(let i = 1; i <= 151; i++){
    const requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const resposta = await requisicao.json();
    if(resposta.types[0].type.name === elementoEscolhido.value){
        listaDePokemons.push(resposta)
        exibePokemons();
    }
    else if(elementoEscolhido.value === 'all'){
        listaDePokemons.push(resposta);
        exibePokemons();
    }
  } 
}
