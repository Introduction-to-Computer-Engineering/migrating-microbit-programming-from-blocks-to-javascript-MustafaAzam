let binary=""
let decimal=0

input.onButtonPressed(Button.A, function () {
    binary = "" + binary + "1"
    basic.showString(binary)
    decimal = decimal * 2 + 1
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    binary = "" + binary + "0"
    basic.showString(binary)
    decimal = decimal * 2
    basic.clearScreen()
})

input.onButtonPressed(Button.AB, function () {
    basic.showNumber(decimal)
    basic.clearScreen()
})
