let CounterA = 0
let CounterB = 0
let CounterAB = 0

input.onButtonPressed(Button.A, function () {
    CounterA += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    CounterB += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    CounterAB += 1
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # .
        # . # . #
        # . # # .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A=")
    basic.showNumber(CounterA)
    basic.clearScreen()
    basic.showString("B=")
    basic.showNumber(CounterB)
    basic.clearScreen()
    basic.showString("AB=")
    basic.showNumber(CounterAB)
    basic.clearScreen()
    basic.showString("Total=")
    basic.showNumber(CounterA + CounterB + CounterAB)
    basic.clearScreen()

})