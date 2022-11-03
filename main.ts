function Update () {
    RainbowStart = ShiftColor(Step)
    Left.showRainbow(RainbowStart, RainbowStart + range)
    Right.showRainbow(ShiftColor(EarOffset), ShiftColor(EarOffset + range))
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    Step += 1
})
function ShiftColor (num: number) {
    return (RainbowStart + num) % 360
}
input.onButtonPressed(Button.AB, function () {
    EarOffset += 10
})
input.onButtonPressed(Button.B, function () {
    Step += -1
})
function SetColorHsv () {
    Hue += 8
    Color = neopixel.hsl(Hue, 255, 255)
    strip.showColor(Color)
    strip.setPixelColor(0, neopixel.rgb(0, 255, 255))
    strip.show()
}
let Color = 0
let Hue = 0
let Left: neopixel.Strip = null
let Right: neopixel.Strip = null
let strip: neopixel.Strip = null
let EarOffset = 0
let Step = 0
let RainbowStart = 0
let range = 0
let frameDelay = 5
range = 10
RainbowStart = 1
Step = 1
EarOffset = 0
strip = neopixel.create(DigitalPin.P2, 16, NeoPixelMode.RGB)
strip.setBrightness(172)
Right = strip.range(0, 8)
Left = strip.range(8, 8)
Update()
basic.forever(function () {
    Update()
    basic.showIcon(IconNames.Square)
    basic.pause(frameDelay)
    Update()
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(frameDelay)
})
