"use strict"

const gameBoard = (() => {
     const board = ['','','','','','','','','']

})();

const Player = () => {

}

const displayController = (() => {
    const cells = document.querySelectorAll('.field')
    const message = document.querySelector('#message')
    const resetBtn = document.querySelector('#restart-button')

    cells.forEach(cell => cell.addEventListener('click',(e)=> {
        if (e.target.textContent !== '') return
        console.log('testing')
    }))
})();