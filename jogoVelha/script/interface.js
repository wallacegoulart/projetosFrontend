document.addEventListener('DOMContentLoaded', ()=> {
    
    let squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})


function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(() => {
            alert("O Jogo Acabou - O Vencedor foi Jogador " + (playerTime == 0 ? "Escudo": "Espada") ); 
        }, 20);
    };
    updateSquare();
}


// aqui que vai ter a criação da div para preencher o quadrado
function updateSquare(){

    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{

        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }

    })

}


