input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
