from microbit import *

while True:
    temperatura = input.temperature()
    led.plot_bar_graph(temperatura, 50)