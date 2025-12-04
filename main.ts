let temperatura: number;
let ejeX: number;
let ejeY: number;
let modo = 0
let x = 2
let y = 2
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        modo = 1
        basic.clearScreen()
    }
    
    if (input.buttonIsPressed(Button.B)) {
        modo = 2
        basic.clearScreen()
    }
    
    if (modo == 1) {
        temperatura = input.temperature()
        led.plotBarGraph(temperatura, 50)
    }
    
    if (modo == 2) {
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
    
}
