let lightsOn = 0
basic.forever(function () {
    lightsOn = 1
    basic.showNumber(input.soundLevel())
    datalogger.log(datalogger.createCV("dB", input.soundLevel()))
    serial.writeValue("LV", input.soundLevel())
    if (input.soundLevel() >= 80) {
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
