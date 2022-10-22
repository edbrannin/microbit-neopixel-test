function Update () {
    strip.rotate(1)
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
let Step = 1
let Hue = 0
strip.showRainbow(1, 360)
basic.pause(1000)
Update()
basic.forever(function () {
    Update()
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    Update()
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
})
