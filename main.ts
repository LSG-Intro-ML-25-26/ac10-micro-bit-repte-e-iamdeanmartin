let ejeX: number;
let ejeY: number;
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
    ejeX = input.acceleration(Dimension.X)
    ejeY = input.acceleration(Dimension.Y)
    if (ejeX < -150 && x > 0) {
        x = x - 1
    }
    
    if (ejeX > 150 && x < 4) {
        x = x + 1
    }
    
    if (ejeY < -150 && y > 0) {
        y = y - 1
    }
    
    if (ejeY > 150 && y < 4) {
        y = y + 1
    }
    
}
