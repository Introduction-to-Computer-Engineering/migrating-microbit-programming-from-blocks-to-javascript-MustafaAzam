let item = 0
let index = 0
let arrayWords: string[] = []
arrayWords = [
    "Floof",
    "Doge",
    "Pupper",
    "Doggo",
    "Birb",
    "Snoot",
    "Bloop",
    "Boof",
    "Smol",
    "Bork"
]

basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . . .
            . . # . .
            `)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.clearScreen()
basic.showString("" + arrayWords[index])

input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("" + arrayWords[index])
})
input.onGesture(Gesture.ScreenDown, function () {
    let list: number[] = []
    if (index < list.length) {
        item += 1
    } else {
        game.gameOver()
    }
})
