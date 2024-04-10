

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

    function turn(){
        let turn = 0;
        let count = 0;
        for(let i = 0;i==0;i){
            
            if(turn == 0){
                console.log(`${player1.playerTag}s turn`);
                let p1 = prompt(`Select your square ${player1.playerName}`);
                let first = Number(p1[0]);
                let second = Number(p1[1]);
                if(board[first][second]==='X' || board[first][second] === 'O'){
                    console.log("Already marked!");
                    turn = 0;
                    continue;
                }
                board[first][second] = player1.playerSymbol;
                //
                turn = 1;
            }
            else if(turn == 1){
                console.log(`${player2.playerTag}s turn`);
                let p2 = prompt(`Select your square ${player2.playerName}`);
                let first = Number(p2[0]);
                let second = Number(p2[1]);
                if(board[first][second]==='X' || board[first][second] === 'O'){
                    console.log("Already marked!");
                    turn = 1;
                    continue;
                }
                board[first][second] = player2.playerSymbol;
                //
                turn = 0;
            }
            count++;
            
            
            if(count > 3 && count < 9){
                if (checkForWinner()===1){
                    console.log(`${player1.playerName} wins`);
                    newgame.displayboard();
                    break;
                }
                else if(checkForWinner()===2){
                    console.log(`${player2.playerName} wins`);
                    newgame.displayboard();
                    break;
                }

            }
            else if(count > 8){
                console.log("its a draw!");
                newgame.displayboard();
                break;
            }
            newgame.displayboard();
        }
       
    }

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
const player1 = newgame.newPlayer(prompt("input name player 1"),1);
const player2 = newgame.newPlayer(prompt("input name player 2"),2);
newgame.turn();
