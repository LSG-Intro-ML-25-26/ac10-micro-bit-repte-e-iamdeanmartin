#from microbit import *

#while True:
#    temperatura = input.temperature()
#    led.plot_bar_graph(temperatura, 50)

x = 2
y = 2

while True:
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