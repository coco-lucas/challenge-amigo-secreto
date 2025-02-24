let nomes = [];

function adicionarAmigo(){
    let nome = document.querySelector(".input-name");
    if (!nomes.includes(nome.value)){
        nomes.push(nome.value);
    }
    else{
        alert("Este amigo já está na lista!")
    }
    
    exibirListaNaTela();
}

function exibirListaNaTela(){
    let campo = document.querySelector(".name-list");
    campo.innerHTML = nomes.join('<br>');
}
function exibirResultado(nome){
    let campo = document.querySelector(".result-list");
    campo.innerHTML = nome;
}

function sortearAmigo(){
    let max = nomes.length;
    let random = parseInt(Math.random() * max + 1);

    for(i = 0; i < max; i++){
        if(random > max){
            corrigido = random - max;
            exibirResultado(nomes[corrigido])
        }
        if(random <= max){
            if (random == i){
                exibirResultado(nomes[random])            
            }
        }
    }
}