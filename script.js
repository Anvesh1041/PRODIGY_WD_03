// Selecting opponent   
let op1Active = true
let op2Active = false

const op1 = document.querySelectorAll(`.opp`)[0]
const op2 = document.querySelectorAll(`.opp`)[1]


op1.addEventListener('click', () => {
    op1.classList.add(`active`)
    op2.classList.remove(`active`)
    op1Active = true
    op2Active = false
})
op2.addEventListener('click', () => {
    op1.classList.remove(`active`)
    op2.classList.add(`active`)
    op2Active = true
    op1Active = false
})

// selecting marker
let xActive = true
let oActive = false
let player1Marker = 'X'
let player2Marker = 'O'

const x = document.querySelectorAll(`.xo`)[0]
const o = document.querySelectorAll(`.xo`)[1]

x.addEventListener('click', () => {
    x.classList.add(`active`)
    o.classList.remove(`active`)
    xActive = true
    oActive = false
    player1Marker = 'X'
    player2Marker = 'O'
})
o.addEventListener('click', () => {
    x.classList.remove(`active`)
    o.classList.add(`active`)
    oActive = true
    xActive = false
    player1Marker = 'O'
    player2Marker = 'X'
})

// working of play button

const play = document.querySelector(`.play`)
const container = document.querySelector(`#container`)
const board = document.querySelector(`#board`)

play.addEventListener('click', () => {
    container.style.display = 'none'
    board.style.display = 'grid'
    if (op1Active && player1Marker === 'O') {
        let randomRow = Math.floor(Math.random() * 3);
        let randomColumn = Math.floor(Math.random() * 3);
        game.push([String(randomRow), String(randomColumn), 'X'])
        let k = 0
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (String(i) === String(randomRow) && String(j) === String(randomColumn)) {
                    cells[k].textContent = 'X'
                }
                k++
            }

        }
    }
    score()
})


// adding markers and logic to the game with friends
const rocol = (row, col, val) => {
    return [row, col, val]
}

let game = []
let won = []
let b = ['', '', '', '', '', '', '', '', '']
let c = []

for (let i = 0; i < 3; i++) {
    c[i] = [];
    for (let j = 0; j < 3; j++) {
        c[i][j] = '';
    }
}


const cells = document.querySelectorAll(`.cell`)
cells.forEach((cell) => {

    cell.addEventListener('click', () => {
        if (op2Active) {
            // console.log("op2 is activated")
            if (winner.textContent === '') {

                if (xActive && cell.textContent === '') {
                    cell.textContent = 'X'
                    xActive = false
                    oActive = true
                    let row = cell.getAttribute('data-row')
                    let col = cell.getAttribute('data-col')
                    let click = rocol(row, col, 'X')

                    game.push(click)
                    // console.log(game)
                    for (let i = 0; i < 9; i++) {
                        b[i] = cells[i].textContent

                    }
                    check()
                    checkDraw()
                    if (winner.textContent !== '') {
                        for (let i = 0; i < 9; i++) {
                            won.push(cells[i].textContent)

                        }

                        animation(won)
                        replay.style.display = 'inline-block'
                        reset.style.display = 'inline-block'
                    }
                    resultBtn()
                }
                else if (oActive && cell.textContent === '') {
                    cell.textContent = 'O'
                    oActive = false
                    xActive = true
                    let row = cell.getAttribute('data-row')
                    let col = cell.getAttribute('data-col')
                    let click = rocol(row, col, 'O')
                    game.push(click)
                    // console.log(game)
                    for (let i = 0; i < 9; i++) {
                        b[i] = cells[i].textContent

                    }
                    check()
                    checkDraw()
                    if (winner.textContent !== '') {
                        for (let i = 0; i < 9; i++) {
                            won.push(cells[i].textContent)

                        }
                        animation(won)
                        replay.style.display = 'inline-block'
                        reset.style.display = 'inline-block'
                    }
                    resultBtn()
                }
            }
        }
    })

});



//game logic
const winner = document.querySelector(`.winner`)

const check = () => {
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let counter4 = 0
    let counter5 = 0
    let counter6 = 0
    let counter7 = 0
    let counter8 = 0
    let counter9 = 0
    let counter0 = 0

    if (cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent && cells[0].textContent === 'X') {
        counter7++
    }
    else if (cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent && cells[0].textContent === 'O') {
        counter8++
    }
    else if (cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent && cells[2].textContent === 'X') {
        counter9++
    }
    else if (cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent && cells[2].textContent === 'O') {
        counter0++
    }
    for (let i = 0; i < game.length - 1; i++) {
        for (let j = i + 1; j < game.length; j++) {
            if (game[i][0] === game[j][0] && game[i][2] === 'X' && game[j][2] === 'X') {
                counter1++
            }
            else if (game[i][0] === game[j][0] && game[i][2] === 'O' && game[j][2] === 'O') {
                counter2++

            }
            else if (game[i][1] === game[j][1] && game[i][2] === 'X' && game[j][2] === 'X') {
                counter3++
            }
            else if (game[i][1] === game[j][1] && game[i][2] === 'O' && game[j][2] === 'O') {
                counter4++
            }
            else if (game[i][0] === game[i][1] && game[i][2] === 'X' && game[j][0] === game[j][1] && game[j][2] === 'X') {
                counter5++
            }
            else if (game[i][0] === game[i][1] && game[i][2] === 'O' && game[j][0] === game[j][1] && game[j][2] === 'O') {
                counter6++
            }
        }

        if ((counter1 >= 3 ||
            counter3 >= 3 ||
            counter5 >= 3 ||
            counter7 >= 1 ||
            counter9 >= 1) && player1Marker == 'X' && op2Active
        ) {
            winner.textContent = "Player 1 win...."
        }
        else if ((counter1 >= 3 ||
            counter3 >= 3 ||
            counter5 >= 3 ||
            counter7 >= 1 ||
            counter9 >= 1) && player1Marker == 'O' && op2Active
        ) {
            winner.textContent = "Player 2 win...."
        }
        else if ((counter2 >= 3 ||
            counter4 >= 3 ||
            counter6 >= 3 ||
            counter8 >= 1 ||
            counter0 >= 1) && player1Marker == 'O' && op2Active
        ) {
            winner.textContent = "Player 1 win...."
        }
        else if ((counter2 >= 3 ||
            counter4 >= 3 ||
            counter6 >= 3 ||
            counter8 >= 1 ||
            counter0 >= 1) && player1Marker == 'X' && op2Active
        ) {
            winner.textContent = "Player 2 win...."
        }

        // for play with computer
        if ((counter1 >= 3 ||
            counter3 >= 3 ||
            counter5 >= 3 ||
            counter7 >= 1 ||
            counter9 >= 1) && player1Marker == 'X' && op1Active
        ) {
            winner.textContent = "You win...."
        }
        else if ((counter1 >= 3 ||
            counter3 >= 3 ||
            counter5 >= 3 ||
            counter7 >= 1 ||
            counter9 >= 1) && player1Marker == 'O' && op1Active
        ) {
            winner.textContent = "Computer win...."
        }
        else if ((counter2 >= 3 ||
            counter4 >= 3 ||
            counter6 >= 3 ||
            counter8 >= 1 ||
            counter0 >= 1) && player1Marker == 'O' && op1Active
        ) {
            winner.textContent = "You win...."
        }
        else if ((counter2 >= 3 ||
            counter4 >= 3 ||
            counter6 >= 3 ||
            counter8 >= 1 ||
            counter0 >= 1) && player1Marker == 'X' && op1Active
        ) {
            winner.textContent = "Computer win...."
        }


    }

}

// Adding animations
let win = document.querySelector(`.win`)
const animation = (won) => {
    if (won[0] === won[1] && won[0] === won[2] && won[0] !== '') {
        win.classList.add(`winr1`)
    }
    else if (won[3] === won[4] && won[3] === won[5] && won[3] !== '') {
        win.classList.add(`winr2`)
    }
    else if (won[6] === won[7] && won[6] === won[8] && won[6] !== '') {
        win.classList.add(`winr3`)
    }
    else if (won[0] === won[3] && won[0] === won[6] && won[0] !== '') {
        win.classList.add(`winc1`)
    }
    else if (won[1] === won[4] && won[1] === won[7] && won[1] !== '') {
        win.classList.add(`winc2`)
    }
    else if (won[2] === won[5] && won[2] === won[8] && won[2] !== '') {
        win.classList.add(`winc3`)
    }
    else if (won[0] === won[4] && won[0] === won[8] && won[0] !== '') {
        win.classList.add(`wind1`)
    }
    else if (won[2] === won[4] && won[2] === won[6] && won[2] !== '') {
        win.classList.add(`wind2`)
    }
}


// adding markers and logic to the game with computer
cells.forEach((cell) => {

    cell.addEventListener('click', () => {
        if (op1Active && player1Marker === 'O') {
            if (winner.textContent === '') {
                if (oActive && cell.textContent === '') {
                    cell.textContent = 'O'
                    let row = cell.getAttribute('data-row')
                    let col = cell.getAttribute('data-col')
                    let click = rocol(row, col, 'O')
                    game.push(click)
                    // console.log(game)
                    for (let i = 0; i < 9; i++) {
                        b[i] = cells[i].textContent

                    }
                    check()
                    checkDraw()
                    if (winner.textContent !== '') {
                        for (let i = 0; i < 9; i++) {
                            won.push(cells[i].textContent)

                        }
                        animation(won)
                        replay.style.display = 'inline-block'
                        reset.style.display = 'inline-block'
                    }

                    // console.log(b)
                    let d = 0
                    while (d < 9) {
                        for (let i = 0; i < 3; i++) {
                            // c[i] = c[i] || []; 
                            for (let j = 0; j < 3; j++) {
                                c[i][j] = b[d]
                                d++
                            }

                        }
                    }
                    let isWinnerDecided = false
                    if (winner.textContent !== '')
                        isWinnerDecided = true
                    let computerMove = computerMoveX(c, isWinnerDecided)
                    // console.log(computerMove)
                    let k = 0
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            if (computerMove !== null && String(i) === computerMove[0] && String(j) === computerMove[1]) {
                                cells[k].textContent = 'X'
                            }
                            k++
                        }

                    }
                    game.push(computerMove)
                    // console.log(game)
                    // console.log(computerMove)
                    check()
                    checkDraw()
                    if (winner.textContent !== '') {
                        for (let i = 0; i < 9; i++) {
                            won.push(cells[i].textContent)

                        }
                        animation(won)
                        replay.style.display = 'inline-block'
                        reset.style.display = 'inline-block'
                    }
                    resultBtn()
                }
            }
        }
        else if (op1Active && player1Marker === 'X') {

            if (winner.textContent === '') {
                if (xActive && cell.textContent === '') {
                    cell.textContent = 'X'
                    let row = cell.getAttribute('data-row')
                    let col = cell.getAttribute('data-col')
                    let click = rocol(row, col, 'X')
                    game.push(click)
                    // console.log(game)
                    for (let i = 0; i < 9; i++) {
                        b[i] = cells[i].textContent

                    }
                    check()
                    checkDraw()
                    if (winner.textContent !== '') {
                        for (let i = 0; i < 9; i++) {
                            won.push(cells[i].textContent)

                        }
                        animation(won)
                        replay.style.display = 'inline-block'
                        reset.style.display = 'inline-block'
                    }
                    // console.log(b)
                    let d = 0
                    while (d < 9) {
                        for (let i = 0; i < 3; i++) {
                            // c[i] = c[i] || []; 
                            for (let j = 0; j < 3; j++) {
                                c[i][j] = b[d]
                                d++
                            }

                        }
                    }
                    let isWinnerDecided = false
                    if (winner.textContent !== '')
                        isWinnerDecided = true
                    let computerMove = computerMoveO(c, isWinnerDecided)
                    // console.log(computerMove)
                    let k = 0
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            if (computerMove !== null && String(i) === computerMove[0] && String(j) === computerMove[1]) {
                                cells[k].textContent = 'O'
                            }
                            k++
                        }

                    }
                    game.push(computerMove)
                    game = game.filter(item => item !== null);
                    // console.log(game)
                    // console.log(computerMove)
                    check()
                    checkDraw()
                    if (winner.textContent !== '') {
                        for (let i = 0; i < 9; i++) {
                            won.push(cells[i].textContent)

                        }
                        animation(won)
                        replay.style.display = 'inline-block'
                        reset.style.display = 'inline-block'
                    }
                    resultBtn()
                }
            }
        }
    })

});

// Getting computer move when computer playing with x
const computerMoveX = (matrix, isWinnerDecided) => {

    let isBoardFull = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j] === '') {
                isBoardFull = false;
                break;
            }
        }
        if (!isBoardFull) {
            break;
        }
    }

    if (isBoardFull || isWinnerDecided) {
        return null;
    }

    // console.log(matrix)
    //Winning conditions 
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] === 'X' && matrix[i][1] === 'X' && matrix[i][2] === '') {
            return [String(i), '2', 'X']
        }
        else if (matrix[i][0] === 'X' && matrix[i][1] === '' && matrix[i][2] === 'X') {
            return [String(i), '1', 'X']
        }
        else if (matrix[i][0] === '' && matrix[i][1] === 'X' && matrix[i][2] === 'X') {
            return [String(i), '0', 'X']
        }


        if (matrix[0][i] === 'X' && matrix[1][i] === 'X' && matrix[2][i] === '') {
            return ['2', String(i), 'X']
        }
        else if (matrix[0][i] === 'X' && matrix[1][i] === '' && matrix[2][i] === 'X') {
            return ['1', String(i), 'X']
        }
        else if (matrix[0][i] === '' && matrix[1][i] === 'X' && matrix[2][i] === 'X') {
            return ['0', String(i), 'X']
        }
    }
    if (matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === '') {
        return ['2', '2', 'X']
    }
    else if (matrix[0][0] === 'X' && matrix[1][1] === '' && matrix[2][2] === 'X') {
        return ['1', '1', 'X']
    }
    else if (matrix[0][0] === '' && matrix[1][1] === 'X' && matrix[2][2] === 'X') {
        return ['0', '0', 'X']
    }

    if (matrix[0][2] === 'X' && matrix[1][1] === 'X' && matrix[2][0] === '') {
        return ['2', '0', 'X']
    }
    else if (matrix[0][2] === 'X' && matrix[1][1] === '' && matrix[2][0] === 'X') {
        return ['1', '1', 'X']
    }
    else if (matrix[0][2] === '' && matrix[1][1] === 'X' && matrix[2][0] === 'X') {
        return ['0', '2', 'X']
    }


    //Loosing conditions


    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] === 'O' && matrix[i][1] === 'O' && matrix[i][2] === '') {
            return [String(i), '2', 'X']
        }
        else if (matrix[i][0] === 'O' && matrix[i][1] === '' && matrix[i][2] === 'O') {
            return [String(i), '1', 'X']
        }
        else if (matrix[i][0] === '' && matrix[i][1] === 'O' && matrix[i][2] === 'O') {
            return [String(i), '0', 'X']
        }


        if (matrix[0][i] === 'O' && matrix[1][i] === 'O' && matrix[2][i] === '') {
            return ['2', String(i), 'X']
        }
        else if (matrix[0][i] === 'O' && matrix[1][i] === '' && matrix[2][i] === 'O') {
            return ['1', String(i), 'X']
        }
        else if (matrix[0][i] === '' && matrix[1][i] === 'O' && matrix[2][i] === 'O') {
            return ['0', String(i), 'X']
        }
    }
    if (matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === '') {
        return ['2', '2', 'X']
    }
    else if (matrix[0][0] === 'O' && matrix[1][1] === '' && matrix[2][2] === 'O') {
        return ['1', '1', 'X']
    }
    else if (matrix[0][0] === '' && matrix[1][1] === 'O' && matrix[2][2] === 'O') {
        return ['0', '0', 'X']
    }

    if (matrix[0][2] === 'O' && matrix[1][1] === 'O' && matrix[2][0] === '') {
        return ['2', '0', 'X']
    }
    else if (matrix[0][2] === 'O' && matrix[1][1] === '' && matrix[2][0] === 'O') {
        return ['1', '1', 'X']
    }
    else if (matrix[0][2] === '' && matrix[1][1] === 'O' && matrix[2][0] === 'O') {
        return ['0', '2', 'X']
    }

    // if center is available
    if (matrix[1][1] === '') {
        return ['1', '1', 'X']
    }

    // Make a random move.
    let randomRow = Math.floor(Math.random() * 3);
    let randomColumn = Math.floor(Math.random() * 3);
    // console.log(randomRow)
    // console.log(randomColumn)
    while (matrix[randomRow][randomColumn] !== '') {
        randomRow = Math.floor(Math.random() * 3);
        randomColumn = Math.floor(Math.random() * 3);
    }
    return [String(randomRow), String(randomColumn), 'X'];


}

// Getting computer move when computer playing with O

const computerMoveO = (matrix, isWinnerDecided) => {

    let isBoardFull = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j] === '') {
                isBoardFull = false;
                break;
            }
        }
        if (!isBoardFull) {
            break;
        }
    }

    if (isBoardFull || isWinnerDecided) {
        return null;
    }

    // console.log(matrix)


    //Winning conditions


    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] === 'O' && matrix[i][1] === 'O' && matrix[i][2] === '') {
            return [String(i), '2', 'O']
        }
        else if (matrix[i][0] === 'O' && matrix[i][1] === '' && matrix[i][2] === 'O') {
            return [String(i), '1', 'O']
        }
        else if (matrix[i][0] === '' && matrix[i][1] === 'O' && matrix[i][2] === 'O') {
            return [String(i), '0', 'O']
        }

        if (matrix[0][i] === 'O' && matrix[1][i] === 'O' && matrix[2][i] === '') {
            return ['2', String(i), 'O']
        }
        else if (matrix[0][i] === 'O' && matrix[1][i] === '' && matrix[2][i] === 'O') {
            return ['1', String(i), 'O']
        }
        else if (matrix[0][i] === '' && matrix[1][i] === 'O' && matrix[2][i] === 'O') {
            return ['0', String(i), 'O']
        }
    }
    if (matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === '') {
        return ['2', '2', 'O']
    }
    else if (matrix[0][0] === 'O' && matrix[1][1] === '' && matrix[2][2] === 'O') {
        return ['1', '1', 'O']
    }
    else if (matrix[0][0] === '' && matrix[1][1] === 'O' && matrix[2][2] === 'O') {
        return ['0', '0', 'O']
    }

    if (matrix[0][2] === 'O' && matrix[1][1] === 'O' && matrix[2][0] === '') {
        return ['2', '0', 'O']
    }
    else if (matrix[0][2] === 'O' && matrix[1][1] === '' && matrix[2][0] === 'O') {
        return ['1', '1', 'O']
    }
    else if (matrix[0][2] === '' && matrix[1][1] === 'O' && matrix[2][0] === 'O') {
        return ['0', '2', 'O']
    }
    //Loosing conditions 
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] === 'X' && matrix[i][1] === 'X' && matrix[i][2] === '') {
            return [String(i), '2', 'O']
        }
        else if (matrix[i][0] === 'X' && matrix[i][1] === '' && matrix[i][2] === 'X') {
            return [String(i), '1', 'O']
        }
        else if (matrix[i][0] === '' && matrix[i][1] === 'X' && matrix[i][2] === 'X') {
            return [String(i), '0', 'O']
        }


        if (matrix[0][i] === 'X' && matrix[1][i] === 'X' && matrix[2][i] === '') {
            return ['2', String(i), 'O']
        }
        else if (matrix[0][i] === 'X' && matrix[1][i] === '' && matrix[2][i] === 'X') {
            return ['1', String(i), 'O']
        }
        else if (matrix[0][i] === '' && matrix[1][i] === 'X' && matrix[2][i] === 'X') {
            return ['0', String(i), 'O']
        }
    }
    if (matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === '') {
        return ['2', '2', 'O']
    }
    else if (matrix[0][0] === 'X' && matrix[1][1] === '' && matrix[2][2] === 'X') {
        return ['1', '1', 'O']
    }
    else if (matrix[0][0] === '' && matrix[1][1] === 'X' && matrix[2][2] === 'X') {
        return ['0', '0', 'O']
    }

    if (matrix[0][2] === 'X' && matrix[1][1] === 'X' && matrix[2][0] === '') {
        return ['2', '0', 'O']
    }
    else if (matrix[0][2] === 'X' && matrix[1][1] === '' && matrix[2][0] === 'X') {
        return ['1', '1', 'O']
    }
    else if (matrix[0][2] === '' && matrix[1][1] === 'X' && matrix[2][0] === 'X') {
        return ['0', '2', 'O']
    }

    // if center is available
    if (matrix[1][1] === '') {
        return ['1', '1', 'O']
    }

    // Make a random move.
    let randomRow = Math.floor(Math.random() * 3);
    let randomColumn = Math.floor(Math.random() * 3);
    // console.log(randomRow)
    // console.log(randomColumn)
    while (matrix[randomRow][randomColumn] !== '') {
        randomRow = Math.floor(Math.random() * 3);
        randomColumn = Math.floor(Math.random() * 3);
    }
    return [String(randomRow), String(randomColumn), 'O'];


}

// check for draw 
const checkDraw = () => {
    let isBoardFull = true;
    for (let i = 0; i < 9; i++) {
        if (cells[i].textContent === '') {
            isBoardFull = false;
            break;
        }
    }
    if (isBoardFull && winner.textContent === '') {
        winner.textContent = "It's a draw!";
    }
};


// working of play again and reset buttons

const replay = document.querySelector(`#replay`)
const reset = document.querySelector(`#reset`)

const playAgain = () => {
    if (winner.textContent === "You win...." || winner.textContent === "Player 1 win....") {
        s1++
    }
    else if (winner.textContent === "Computer win...." || winner.textContent === "Player 2 win....") {
        s2++
    }
    score()
    winner.textContent = ''
    win.classList = []
    game = []
    b = ['', '', '', '', '', '', '', '', '']
    c = []
    won = []
    for (let i = 0; i < 3; i++) {
        c[i] = [];
        for (let j = 0; j < 3; j++) {
            c[i][j] = '';
        }
    }
    win.classList.add('win')
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = ''

    }
    replay.style.display = 'none'
    reset.style.display = 'none'
}

const resultBtn = () => {
    replay.addEventListener('click', () => {
        playAgain()
        if (op1Active && player1Marker === 'O') {
            let randomRow = Math.floor(Math.random() * 3);
            let randomColumn = Math.floor(Math.random() * 3);
            game.push([String(randomRow), String(randomColumn), 'X'])
            let k = 0
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (String(i) === String(randomRow) && String(j) === String(randomColumn)) {
                        cells[k].textContent = 'X'
                    }
                    k++
                }

            }
        }
    })
    reset.addEventListener('click', () => {
        playAgain()
        displayScore.style.display = 'none'
        s1 = 0
        s2 = 0
        xActive = true
        oActive = false
        player1Marker = 'X'
        player2Marker = 'O'
        container.style.display = 'block'
        board.style.display = 'none'
    })
}

// Scores of playes
const displayScore = document.querySelector('.score')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
let s1 = 0
let s2 = 0

const score = () => {
    if (op1Active) {
        p1.textContent = `You      : ${s1} `
        p2.textContent = `Computer : ${s2} `
    }
    else if (op2Active) {
        p1.textContent = `Player 1  : ${s1} `
        p2.textContent = `Player 2  : ${s2} `
    }
    displayScore.style.display = "block"
}