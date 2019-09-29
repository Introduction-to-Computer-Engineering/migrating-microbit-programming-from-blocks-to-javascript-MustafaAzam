
let sprite: game.LedSprite = null
let index = 0
sprite = game.createSprite(0, 0)

input.onButtonPressed(Button.AB, function () {
    for (let i = 0; i < 4; i++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let xindex = 0; xindex <= 4; xindex++) {
        for (let yindex = 0; yindex <= 4; yindex++) {
            led.plot(xindex, yindex)
            basic.pause(100)
            led.unplot(xindex, yindex)
            basic.pause(100)
        }
    }
    for (let yindex = 0; yindex <= 4; yindex++) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            led.plot(xindex, yindex)
            basic.pause(100)
            led.unplot(xindex, yindex)
            basic.pause(100)
        }
    }
})

input.onButtonPressed(Button.A, function () {
    for (let yindex = 0; yindex <= 4; yindex++) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            led.plot(xindex, yindex)
            basic.pause(100)
            led.unplot(xindex, yindex)
            basic.pause(100)
        }
    }
    for (let xindex = 0; xindex <= 4; xindex++) {
        for (let yindex = 0; yindex <= 4; yindex++) {
            led.plot(xindex, yindex)
            basic.pause(100)
            led.unplot(xindex, yindex)
            basic.pause(100)
        }
    }
})

