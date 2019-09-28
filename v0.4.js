input.onGesture(Gesture.Shake, function () {
    basic.showString("A Wins:")
    basic.showNumber(WinsA)
    basic.clearScreen()
    basic.showString("B Wins:")
    basic.showNumber(WinsB)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    HandA = Math.randomRange(0, 2)
    if (HandA == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (HandA == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    HandB = Math.randomRange(0, 2)
    if (HandB == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (HandB == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let WinsB = 0
let WinsA = 0
let HandB = 0
let HandA = 0
HandA = 3
HandB = 4
WinsA = 0
WinsB = 0
basic.forever(function () {
    basic.pause(3000)
    if (HandA == 0 && HandB == 1) {
        WinsB += 1
        basic.clearScreen()
        basic.showString("B Wins:")
        basic.showNumber(WinsB)
        basic.clearScreen()
        HandA = 3
        HandB = 4
    } else if (HandA == 0 && HandB == 2) {
        WinsA += 1
        basic.clearScreen()
        basic.showString("A Wins:")
        basic.showNumber(WinsA)
        basic.clearScreen()
        HandA = 3
        HandB = 4
    } else if (HandA == 1 && HandB == 0) {
        WinsA += 1
        basic.clearScreen()
        basic.showString("A Wins:")
        basic.showNumber(WinsA)
        basic.clearScreen()
        HandA = 3
        HandB = 4
    } else if (HandA == 1 && HandB == 2) {
        WinsB += 1
        basic.clearScreen()
        basic.showString("B Wins:")
        basic.showNumber(WinsB)
        basic.clearScreen()
        HandA = 3
        HandB = 4
    } else if (HandA == 2 && HandB == 0) {
        WinsB += 1
        basic.clearScreen()
        basic.showString("B Wins:")
        basic.showNumber(WinsB)
        basic.clearScreen()
        HandA = 3
        HandB = 4
    } else if (HandA == 2 && HandB == 1) {
        WinsA += 1
        basic.clearScreen()
        basic.showString("A Wins:")
        basic.showNumber(WinsA)
        basic.clearScreen()
        HandA = 3
        HandB = 4
    } else if (HandA == HandB) {
        basic.clearScreen()
        basic.showString("Tie")
        basic.clearScreen()
        HandA = 3
        HandB = 4
    } else {
    	
    }
})
