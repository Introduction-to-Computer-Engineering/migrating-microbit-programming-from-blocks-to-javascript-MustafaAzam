basic.forever(function () 
{
    while (input.buttonIsPressed(Button.A)) // I used while loops to suit my needs.
    {
        basic.showNumber(input.compassHeading())
    }
    while (input.buttonIsPressed(Button.B))
    {
        if (338 <= input.compassHeading() || input.compassHeading() <= 22) // I had to calculate the (whole number) degrees to specify the ranges on a Unit Circle
        {
            basic.clearScreen()
            basic.showString("N")
            basic.pause(1000)
        } 
        else if (23 <= input.compassHeading() && input.compassHeading() <= 67) 
        {
            basic.clearScreen()
            basic.showString("NE")
            basic.pause(1000)
        } 
        else if (68 <= input.compassHeading() && input.compassHeading() <= 112) 
        {
            basic.clearScreen()
            basic.showString("E")
            basic.pause(1000)
        } 
        else if (113 <= input.compassHeading() && input.compassHeading() <= 157) 
        {
            basic.clearScreen()
            basic.showString("SE")
        } 
        else if (158 <= input.compassHeading() && input.compassHeading() <= 202) 
        {
            basic.clearScreen()
            basic.showString("S")
            basic.pause(1000)
        } 
        else if (203 <= input.compassHeading() && input.compassHeading() <= 247) 
        {
            basic.clearScreen()
            basic.showString("SW")
            basic.pause(1000)
        } 
        else if (248 <= input.compassHeading() && input.compassHeading() <= 292) 
        {
            basic.clearScreen()
            basic.showString("W")
            basic.pause(1000)
        } 
        else if (293 <= input.compassHeading() && input.compassHeading() <= 337) 
        {
            basic.clearScreen()
            basic.showString("NW")
            basic.pause(1000)
        } 
        else { // Just in case anything goes wrong
            basic.clearScreen()
            basic.showString("ERROR")
            basic.pause(1000)
        }
    }




    if (338 <= input.compassHeading() || input.compassHeading() <= 22) // Actual compass (Not as precise)
    {
        basic.clearScreen() // The compass direction is flipped to make it follow N (North), like a real compass.
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
    }
    else if (23 <= input.compassHeading() && input.compassHeading() <= 67) 
    {
        basic.clearScreen()
        led.plot(0, 0)
        led.plot(1, 1)
        led.plot(2, 2)
    }
    else if (68 <= input.compassHeading() && input.compassHeading() <= 112) 
    {
        basic.clearScreen()
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
    }
    else if (113 <= input.compassHeading() && input.compassHeading() <= 157) 
    {
        basic.clearScreen()
        led.plot(0, 4)
        led.plot(1, 3)
        led.plot(2, 2)
    }
    else if (158 <= input.compassHeading() && input.compassHeading() <= 202) 
    {
        basic.clearScreen()
        led.plot(2, 4)
        led.plot(2, 3)
        led.plot(2, 2)
    }
    else if (203 <= input.compassHeading() && input.compassHeading() <= 247) 
    {
        basic.clearScreen()
        led.plot(4, 4)
        led.plot(3, 3)
        led.plot(2, 2)
    } 
    else if (248 <= input.compassHeading() && input.compassHeading() <= 292) 
    {
        basic.clearScreen()
        led.plot(4, 2)
        led.plot(3, 2)
        led.plot(2, 2)
    } 
    else {
        basic.clearScreen()
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(2, 2)
    }
})