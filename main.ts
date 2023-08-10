let lightsOn = 0
basic.forever(function () {
    lightsOn = 1
    basic.showNumber(input.soundLevel())
    if (input.soundLevel() >= 90) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # # .
            # . . . .
            # . . . .
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
