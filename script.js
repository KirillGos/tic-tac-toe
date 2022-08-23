const variables = (function() {
    const displayWinner = document.querySelector('.winner');
    const playAgainBtn = document.querySelector('.play-again');
    const winStatus = document.querySelector('.draw-win-lose');
    return {displayWinner, playAgainBtn, winStatus}
}) ()

const game = (function() {
    let win = 'draw';
    let turn = 'X';
    let gameBoard = [null,null ,null ,null ,null ,null,null ,null ,null];
    let block = Array.from(document.querySelectorAll('.block'));

    block.map(item => {
        item.addEventListener('click', addMark)
    });

    function addMark(e) {
        if(win === 'draw') {
            let currentTurn = turn;
            let index = e.target.dataset.index;
            if(gameBoard[index - 1] === null) {
                if(currentTurn == 'X') {
                    e.target.innerText = 'X';
                    gameBoard[index - 1] = 'X';
                    checkWin();
                    turn = 'O';
                } else if(currentTurn == 'O') {
                    e.target.innerText = 'O';
                    gameBoard[index - 1] = 'O';
                    checkWin();
                    turn = 'X';
                    
                }
            }
        }
    };
        const winningCombo = [
            [1, 4, 7],
            [1, 2, 3],
            [1, 5, 9],
            [2, 5, 8],
            [3, 6, 9],
            [3, 5, 7],
            [4, 5, 6],
            [7, 8 ,9]
        ];
        function checkWin() {
            for(let i = 0; i < winningCombo.length; i++) {
                let first = winningCombo.map(item => item[0]);
                let second = winningCombo.map(item =>  item[1]);
                let third = winningCombo.map(item => item[2]);
                if(gameBoard[first[i]- 1] !== null && gameBoard[second[i] - 1] !== null &&  gameBoard[third[i]- 1] !== null) {
                    if(gameBoard[first[i]- 1]  == gameBoard[second[i] - 1] && gameBoard[first[i]- 1] == gameBoard[third[i]- 1]) {
                        win = 'win';
                        variables.winStatus.innerText = `You Won ${turn}` 
                        variables.displayWinner.className = 'winner visible';
                        return;
                    } else if(gameBoard.every(drawCheck)) {
                        win = 'draw';
                        variables.winStatus.innerText = 'Draw'
                        variables.displayWinner.className = 'winner visible';
                    }
                }
            }
        }
        
        variables.playAgainBtn.addEventListener('click', playAgain)

        function playAgain() {
            win = 'draw';
            variables.displayWinner.className = 'winner hidden';
            gameBoard = [null,null ,null ,null ,null ,null,null ,null ,null];
            turn = 'X';
            block.map(item => item.innerText = '');
        }

        function drawCheck(item) {
            return item !== null;
        }
         return {gameBoard} 
}) ();
