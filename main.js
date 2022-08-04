const listaBotoesFavoritos = document.querySelectorAll('.favorito')  
for (let contador = 0; contador < listaBotoesFavoritos.length; contador++){  
    const botaoFavorito = listaBotoesFavoritos[contador]  
  
    botaoFavorito.onclick = () => {  
        if(botaoFavorito.classList[1] === 'clicado'){  
            botaoFavorito.classList.remove('clicado');  
        }  
        else{  
            botaoFavorito.classList.add('clicado');  
        }  
    }  
} 
 
  function selecionarCategoria(elementoSelecionado, categoriaSelecionada){              
    let botoesAntesSelecionados = document.querySelectorAll('.button-aoclicar');
    
    for (let contador = 0; contador < botoesAntesSelecionados.length; contador++){
        const botao = botoesAntesSelecionados[contador];
        botao.classList.remove('button-aoclicar');
    };
    
    elementoSelecionado.classList.add('button-aoclicar');        

    const itensDaCategoria = document.querySelectorAll('[data-categoria]');
    itensDaCategoria.forEach( produto => {
        produto.classList.remove('hide');
        var categoriaDesteItem = produto.dataset.categoria;
        if(categoriaSelecionada != categoriaDesteItem && categoriaSelecionada != 'todos') {                
            produto.classList.add('hide');
        };            
    });

}