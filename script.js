

let game = () =>{
    let board = [
        ['00','01','02'],
        ['10','11','12'],
        ['20','21','22']
    ];
    let newBoard = () => {
        return board;
    }
    let displayboard = function(){
        console.table(board);
    }

    let newPlayer = (playerName, playerNum) => {
    
        let playerTag = '@' + playerName;
        if (playerNum == 1) {
            var playerSymbol = 'X';
        }
        else {
            var playerSymbol = 'O';
        }
        return { playerName, playerTag, playerSymbol };
    }

    let turnNum = 0;
    let count = 0;
    function turn(value){
    
        if(turnNum == 0){
            // console.log(`${player1.playerTag}s turn`);
            // let p1 = prompt(`Select your square ${player1.playerName}`);
            let first = Number(value[0]);
            let second = Number(value[1]);
            if(board[first][second]==='X' || board[first][second] === 'O'){
                console.log("Already marked!");
                turnNum = 0;
                
            }
            else{
                board[first][second] = player1.playerSymbol;
                console.log(`.t${value}`)
                document.querySelector(`.t${value} .char`).innerHTML = player1.playerSymbol;
                turnNum = 1;
            }
            
        }
        else if(turnNum == 1){
            // console.log(`${player2.playerTag}s turn`);
            // let p2 = prompt(`Select your square ${player2.playerName}`);
            let first = Number(value[0]);
            let second = Number(value[1]);
            if(board[first][second]==='X' || board[first][second] === 'O'){
                console.log("Already marked!");
                turnNum = 1;
                
            }
            else{
                board[first][second] = player2.playerSymbol;
                console.log(`.t${value}`)
                document.querySelector(`.t${value} .char`).innerHTML = player2.playerSymbol;
                turnNum = 0;
            }
        }

        
        count++;
        
        console.log(count);
        if(count > 3 && count < 9){
            if (checkForWinner()===1){
                console.log(`${player1.playerName} wins`);
                newgame.displayboard();
                result.innerText = 'player X wins!';
                turnNum = 3;
                
            }
            else if(checkForWinner()===2){
                console.log(`${player2.playerName} wins`);
                newgame.displayboard();
                result.innerText = 'player O wins!';
                turnNum = 3;
            }

        }
        else if(count > 8){
            console.log("its a draw!");
            newgame.displayboard();
            result.innerText = 'Its a draw!';
            turnNum = 3;
        }
        newgame.displayboard();
    
   
}

let result = document.getElementById('result');
let t00 = document.querySelector('.t00');
let t01 = document.querySelector('.t01');
let t02 = document.querySelector('.t02');
let t10 = document.querySelector('.t10');
let t11 = document.querySelector('.t11');
let t12 = document.querySelector('.t12');
let t20 = document.querySelector('.t20');
let t21 = document.querySelector('.t21');
let t22 = document.querySelector('.t22');

t00.addEventListener('click', () => {
    turn('00');
})
t01.addEventListener('click', () => {
    turn('01')
})
t02.addEventListener('click', () => {
    turn('02')
})
t10.addEventListener('click', () => {
    turn('10')
})
t11.addEventListener('click', () => {
    turn('11')
})
t12.addEventListener('click', () => {
    turn('12')
})
t20.addEventListener('click', () => {
    turn('20')
})
t21.addEventListener('click', () => {
    turn('21')
})
t22.addEventListener('click', () => {
    turn('22')
})

    let checkForWinner = () =>{
        
        if(board[0][0]===board[0][1] && board[0][0]===board[0][2] ){
            var winningSymbol = board[0][0];
        }
        else if(board[0][0]===board[1][0] && board[0][0]===board[2][0]){
            var winningSymbol = board[0][0];
        }
        else if(board[0][0]===board[1][1] && board[0][0]===board[2][2]){
            var winningSymbol = board[0][0];
        }
        else if(board[0][1]===board[1][1] && board[0][1]===board[2][1]){
            var winningSymbol = board[0][1];
        }
        else if(board[0][2]===board[1][2] && board[0][2]===board[2][2]){
            var winningSymbol = board[0][2];
        }
        else if(board[0][2]===board[1][1] && board[0][2]===board[2][0]){
            var winningSymbol = board[2][0];
        }
        else if(board[1][0]===board[1][1] && board[1][0]===board[1][2]){
            var winningSymbol = board[1][0];
        }
        else if(board[2][0]===board[2][1] && board[2][0]===board[2][2]){
            var winningSymbol = board[2][0];
        }


        if(winningSymbol === player1.playerSymbol){
            
            return 1;
        }
        else if(winningSymbol === player2.playerSymbol){
            
            return 2;
        }
            
    }

    return{newBoard,displayboard,checkForWinner,turn,newPlayer}
}



const newgame = game();
newgame.newBoard();
newgame.displayboard();
const player1 = newgame.newPlayer('player X',1);
const player2 = newgame.newPlayer('player O',2);

