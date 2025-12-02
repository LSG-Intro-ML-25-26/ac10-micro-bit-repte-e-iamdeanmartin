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