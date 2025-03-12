const tableLimit = 25;
const bingo = ["B", "I", "N", "G", "O"]
// const myDoc = document;
// const docBody = myDoc.body;
const cardDiv = document.getElementById("carddiv")
const ballDiv = document.getElementById("balldiv")
const ball = document.getElementById("numball")
const playBtn = document.getElementById("playbtn")
const narrator = document.getElementById("narrator")
let win = false
let randomInts = []
let removedNums = []
let bingoArray = [
    // Rows
    [], // index 0: [1, 2, 3, 4, 5] 
    [], // index 1: [6, 7, 8, 9, 10]
    [], // index 2: [11, 12, 13, 14, 15]
    [], // index 3: [16, 17, 18, 19, 20]
    [], // index 4: [21, 22, 23, 24, 25]
    // Columns
    [], // index 5: [1, 6, 11, 16, 21]
    [], // index 6: [2, 7, 12, 17, 22]
    [], // index 7: [3, 8, 13, 18, 23]
    [], // index 8: [4, 9, 14, 19, 24]
    [], // index 9: [5, 10, 15, 20, 25]
    // Diagonals
    [], // index 10: [1, 7, 13, 19, 25]
    []  // index 11: [5, 9, 13, 17, 21]
]

const winningLines = [
    // Every time a number is called and the corresponding id is pushed to the player's appropriate bingo array, that array will be compared to all the arrays nested here. If any of them match, the player wins.
    // Rows
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    // Columns
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],
    // Diagonals
    [1, 7, 13, 19, 25],
    [5, 9, 13, 17, 21]
]

function reset() {
    removedNums = []
    randomInts = []
    numball.innerText = ""
    while (cardDiv.firstChild) {
        cardDiv.removeChild(cardDiv.firstChild)
    }
    win = false
    narrator.innerText = "Let's Play!"
    playBtn.innerText = "Play!"
    playBtn.removeEventListener('click', reset)
    playBtn.removeEventListener('click', drawNumber)
    bingoArray = [[], [], [], [], [], [], [], [], [], [], [], []]
    startGame()
}
function startGame() {
    playBtn.addEventListener('click', createBingoCard)
}

function createBingoCard() {
    while (randomInts.length < 25) {
        const randInt = Math.floor(Math.random() * 75);
        if (!randomInts.includes(randInt)) {
            randomInts.push(randInt)
        }
    }
    console.log(randomInts)
    const cardEl = document.createElement("div");
    cardEl.classList.add("card")
    cardDiv.appendChild(cardEl)
    for (let i = 0; i < tableLimit; i++) {
        const gridSlot = document.createElement("div")
        gridSlot.classList.add("box")
        gridSlot.id = i + 1
        gridSlot.innerText = randomInts[i]
        cardEl.appendChild(gridSlot)
        console.log(gridSlot.id)
    }
    playBtn.innerText = "Play!"
    playBtn.removeEventListener('click', createBingoCard)
    playBtn.addEventListener('click', drawNumber)
}

function drawNumber() {
    // Generate random integer
    // Check whether random integer is included in removedNums
    // If randInt is included in removedNums, generate new randInt
    const randInt = Math.floor(Math.random() * 75);
    if (removedNums.includes(randInt)) {
        drawNumber()
    } else {
        removedNums.push(randInt)
        console.log(randInt)
        ball.textContent = randInt
        console.log("random number: ", randInt)

        if (randomInts.includes(randInt)) {
            const boxId = randomInts.indexOf(randInt) + 1
            const box = document.getElementById(`${boxId}`)
            console.log("boxId:", boxId)
            // Add conditional logic to push numbers to appropriate arrays
            // Rows
            // index 0: [1, 2, 3, 4, 5] 
            // index 1: [6, 7, 8, 9, 10]
            // index 2: [11, 12, 13, 14, 15]
            // index 3: [16, 17, 18, 19, 20]
            // index 4: [21, 22, 23, 24, 25]
            // Columns
            // index 5: [1, 6, 11, 16, 21]
            // index 6: [2, 7, 12, 17, 22]
            // index 7: [3, 8, 13, 18, 23]
            // index 8: [4, 9, 14, 19, 24]
            // index 9: [5, 10, 15, 20, 25]
            // Diagonals
            // index 10: [1, 7, 13, 19, 25]
            // index 11: [5, 9, 13, 17, 21]
            switch (boxId) {
                case 1:
                    if (!bingoArray[0].includes(boxId)) {
                        bingoArray[0].push(boxId)
                        bingoArray[5].push(boxId)
                        bingoArray[10].push(boxId)
                    }
                    break
                case 2:
                    if (!bingoArray[0].includes(boxId)) {
                        bingoArray[0].push(boxId)
                        bingoArray[6].push(boxId)
                    }
                    break
                case 3:
                    if (!bingoArray[0].includes(boxId)) {
                        bingoArray[0].push(boxId)
                        bingoArray[7].push(boxId)
                    }
                    break
                case 4:
                    if (!bingoArray[0].includes(boxId)) {
                        bingoArray[0].push(boxId)
                        bingoArray[8].push(boxId)
                    }
                    break
                case 5:
                    if (!bingoArray[0].includes(boxId)) {
                        bingoArray[0].push(boxId)
                        bingoArray[9].push(boxId)
                        bingoArray[11].push(boxId)
                    }
                    break
                case 6:
                    if (!bingoArray[1].includes(boxId)) {
                        bingoArray[1].push(boxId)
                        bingoArray[5].push(boxId)
                    }
                    break
                case 7:
                    if (!bingoArray[1].includes(boxId)) {
                        bingoArray[1].push(boxId)
                        bingoArray[6].push(boxId)
                        bingoArray[10].push(boxId)
                    }
                    break
                case 8:
                    if (!bingoArray[1].includes(boxId)) {
                        bingoArray[1].push(boxId)
                        bingoArray[7].push(boxId)
                    }
                    break
                case 9:
                    if (!bingoArray[1].includes(boxId)) {
                        bingoArray[1].push(boxId)
                        bingoArray[8].push(boxId)
                        bingoArray[11].push(boxId)
                    }
                    break
                case 10:
                    if (!bingoArray[1].includes(boxId)) {
                        bingoArray[1].push(boxId)
                        bingoArray[9].push(boxId)
                    }
                    break
                case 11:
                    if (!bingoArray[2].includes(boxId)) {
                        bingoArray[2].push(boxId)
                        bingoArray[5].push(boxId)
                    }
                    break
                case 12:
                    if (!bingoArray[2].includes(boxId)) {
                        bingoArray[2].push(boxId)
                        bingoArray[6].push(boxId)
                    }
                    break
                case 13:
                    if (!bingoArray[2].includes(boxId)) {
                        bingoArray[2].push(boxId)
                        bingoArray[7].push(boxId)
                        bingoArray[10].push(boxId)
                        bingoArray[11].push(boxId)
                    }
                    break
                case 14:
                    if (!bingoArray[2].includes(boxId)) {
                        bingoArray[2].push(boxId)
                        bingoArray[8].push(boxId)
                    }
                    break
                case 15:
                    if (!bingoArray[2].includes(boxId)) {
                        bingoArray[2].push(boxId)
                        bingoArray[9].push(boxId)
                    }
                    break;
                case 16:
                    if (!bingoArray[3].includes(boxId)) {
                        bingoArray[3].push(boxId)
                        bingoArray[5].push(boxId)
                    }
                    break;
                case 17:
                    if (!bingoArray[3].includes(boxId)) {
                        bingoArray[3].push(boxId)
                        bingoArray[6].push(boxId)
                        bingoArray[11].push(boxId)
                    }
                    break
                case 18:
                    if (!bingoArray[3].includes(boxId)) {
                        bingoArray[3].push(boxId)
                        bingoArray[7].push(boxId)
                    }
                    break
                case 19:
                    if (!bingoArray[3].includes(boxId)) {
                        bingoArray[3].push(boxId)
                        bingoArray[8].push(boxId)
                        bingoArray[10].push(boxId)
                    }
                    break
                case 20:
                    if (!bingoArray[3].includes(boxId)) {

                        bingoArray[3].push(boxId)
                        bingoArray[9].push(boxId)
                    }
                    break
                case 21:
                    if (!bingoArray[4].includes(boxId)) {
                        bingoArray[4].push(boxId)
                        bingoArray[5].push(boxId)
                        bingoArray[11].push(boxId)
                    }
                    break
                case 22:
                    if (!bingoArray[4].includes(boxId)) {
                        bingoArray[4].push(boxId)
                        bingoArray[6].push(boxId)
                    }
                    break
                case 23:
                    if (!bingoArray[4].includes(boxId)) {
                        bingoArray[4].push(boxId)
                        bingoArray[7].push(boxId)
                    }
                    break
                case 24:
                    if (!bingoArray[4].includes(boxId)) {
                        bingoArray[4].push(boxId)
                        bingoArray[8].push(boxId)
                    }
                    break
                case 25:
                    if (!bingoArray[4].includes(boxId)) {
                        bingoArray[4].push(boxId)
                        bingoArray[9].push(boxId)
                        bingoArray[10].push(boxId)
                        break
                        
                    }
                }
                // bingoArray.push(boxId)
                console.log("bingoArray:", bingoArray)
                box.classList.add("checked")
                const index = randomInts.indexOf(randInt)
                if (index > -1) {
                    randomInts[index] = "X"
                }
                console.log("randomInts:", randomInts)
            }
            checkCard()
        }
}
// Code assisted by Xpert Learning Assistant
// function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// }


function checkCard() {
    for (let i = 0; i < winningLines.length; i++) {
        console.log(`Winning Line ${parseInt(i) + 1}:`, winningLines[i])
        for (let j = 0; j < bingoArray.length; j++) {
            const sortedArr = bingoArray[j]
            // console.log(sortedArr)
            if (winningLines[i].length === sortedArr.length) {
                win = true;
                console.log(sortedArr)
                console.log(winningLines[i])
                console.log(win)
            }
        }
    }
    if (win) {
        console.log(win)
        narrator.textContent = "Bingo! You win!"
        playBtn.textContent = "Replay!"
        playBtn.addEventListener('click', reset)
    } else if (!win) {
        console.log(win)
        narrator.textContent = "Not just yet. Play again!"
    }
}



startGame()
