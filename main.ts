// from microbit import *
// while True:
//     temperatura = input.temperature()
//     led.plot_bar_graph(temperatura, 50)
let x = 2
let y = 2
while (true) {
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
}
