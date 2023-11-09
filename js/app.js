//CRIANDO UMA FUNÇÃO, NA QUAL IRÁ SER CHAMADA NO MÉTODO 'ONCLICK', E SERÁ ENTREGUE UM PARâMETRO PARA ESSA FUNÇÃO DE ACORDO COM O ID DE CADA CLASSE
function alterarStatus(id){
    //CAPTURANDO O 
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img') ;
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar'
    }

    else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver'
    }

}
