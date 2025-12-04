from microbit import *

modo = 0

x = 2
y = 2

while True:

    if input.button_is_pressed(Button.A):
        modo = 1
        basic.clear_screen()
        
    if input.button_is_pressed(Button.B):
        modo = 2
        basic.clear_screen()
        
    if modo == 1:
        temperatura = input.temperature()
        led.plot_bar_graph(temperatura, 50)

    if modo == 2:
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)

        ejeX = input.acceleration(Dimension.X)
        ejeY = input.acceleration(Dimension.Y)

        if ejeX < -150 and x > 0:
            x = x - 1

        if ejeX > 150 and x < 4:
            x = x + 1

        if ejeY < -150 and y > 0:
            y = y - 1

        if ejeY > 150 and y < 4:
            y = y + 1