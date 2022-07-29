"use strict"

const gameBoard = (() => {
     const board = ['','','','','','','','','']

     const setField = (index,sign) => {
        if (index > index.board.length) return;
        board[index] = sign;
     };

     const getField = (index) => {
        if (index > index.board.length) return;
        return board[index] = sign;
     };

     const reset = () => {
        for (let i of board) {
            board[i] = '';
        }
     };
     return { getField, setField, reset };
})();

const Player = (sign) => {
    this.sign = sign

    const getSign = () => {
        return sign
    }

    return { getSign }
}


const displayController = (() => {
    const cells = document.querySelectorAll('.field')
    const message = document.querySelector('#message')
    const resetBtn = document.querySelector('#restart-button')
    const playerTurnMessage = document.querySelector('.message')

    const playerTurn = (() => {
        const playerTurnMessage = document.querySelector('.message')
        let firstToAct = [Player('X').getSign(),Player('O').getSign()][Math.round(Math.random())]
        playerTurnMessage.textContent = `Player ${firstToAct}'s Turn`
        cells.forEach(cell => cell.addEventListener('click',(e)=> {
            if (e.target.textContent !== '') return
            if (firstToAct === 'X') {
                e.target.textContent = 'X'
                firstToAct = 'O'
                playerTurnMessage.textContent = `Player ${firstToAct}'s Turn`
            } 
            else { 
                e.target.textContent = 'O'
                firstToAct='X'
                playerTurnMessage.textContent = `Player ${firstToAct}'s Turn`
            }
        }))
    })()
})();


const gamePlay = (() => {
    const playerX = Player('X')
    const playerO = Player('O')
    let round = 1
    let gameOver = false

    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    

})();