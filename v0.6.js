let Timer = 0
input.onButtonPressed(Button. A, function() {
    Timer += 1
})
input.onButtonPressed(Button. B, function() {
    Timer -= 1
})
input.onButtonPressed(Button.AB, function () {
    while (Timer >= 0) {
        Timer += -1
        basic.pause(1000)
    }
})

basic.forever(function () {
    basic.showNumber(Timer)
    if (Timer == -1) {
        for (let i = 0; i < 5; i++) {
            basic.showLeds(`
                # . # . #
                . . . . .
                # . # . #
                . . . . .
                # . # . #
                `)
                
            led.plot(1, 1)
            led.plot(3, 1)
            led.plot(1, 3)
            led.plot(3, 3)
            basic.pause(500)
            led.unplot(1, 1)
            led.unplot(3, 1)
            led.unplot(1, 3)
            led.unplot(3, 3)

            basic.showLeds(`
                . # . # .
                # . . . #
                . . . . .
                # . . . #
                . # . # .
                `)
        }
        Timer = 0
    }
})