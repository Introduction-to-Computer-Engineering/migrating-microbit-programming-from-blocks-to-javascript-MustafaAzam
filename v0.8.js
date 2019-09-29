let CoinBHeads = false
let CoinAHeads = false
let PlayerBScore = 0
let PlayerAScore = 0

basic.showLeds(`
    . # . . .
    # # # . .
    . # . # .
    . . # # #
    . . . # .
    `)

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("A Wins:")
    basic.showNumber(PlayerAScore)
    basic.clearScreen()
    basic.showString("B Wins:")
    basic.showNumber(PlayerBScore)
    basic.clearScreen()
})

input.onGesture(Gesture.Shake, function () {
    CoinAHeads = Math.randomBoolean()
    CoinBHeads = Math.randomBoolean()
    if (CoinAHeads == CoinBHeads) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        PlayerAScore += 1
    } else {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
        PlayerBScore += 1
    }
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})