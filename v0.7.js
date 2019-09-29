
input.onButtonPressed(Button.A, function ()
{
    for (let index = 0; index <= 4; index++)
    {
        led.plotBrightness(index, Math.randomRange(0, 4), Math.randomRange(25, 255))
    }
})

input.onButtonPressed(Button.B, function ()
{
    basic.clearScreen()
})