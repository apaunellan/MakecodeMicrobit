input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        led.plot(index, index)
        led.plot(4 - index, index)
        basic.pause(1000)
        if (index == 2) {
            led.unplot(index, index)
        }
    }
})
